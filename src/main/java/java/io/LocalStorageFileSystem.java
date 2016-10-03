package java.io;

import static jsweet.dom.Globals.localStorage;
import static jsweet.util.Globals.array;

import jsweet.lang.Array;
import jsweet.lang.Interface;
import jsweet.lang.JSON;

public class LocalStorageFileSystem extends FileSystem {

	private final String PREFIX = "LSFS://";

	File[] roots;

	/**
	 * The FileSystem object representing the platform's local file system.
	 */
	public static final LocalStorageFileSystem fs = new LocalStorageFileSystem();

	@Interface
	public static class Entry {
		public int attributes;
		public int access;
		public String data;
		public long lastModifiedTime;
		public long length;
	}

	@Interface
	public static class DirectoryEntry extends Entry {
		String[] entries;
	}

	@Override
	public char getSeparator() {
		return '/';
	}

	@Override
	public char getPathSeparator() {
		return ':';
	}

	private String normalize(String pathname, int len, int off) {
		if (len == 0)
			return pathname;
		int n = len;
		while ((n > 0) && (pathname.charAt(n - 1) == '/'))
			n--;
		if (n == 0)
			return "/";
		StringBuffer sb = new StringBuffer(pathname.length());
		if (off > 0)
			sb.append(pathname.substring(0, off));
		char prevChar = 0;
		for (int i = off; i < n; i++) {
			char c = pathname.charAt(i);
			if ((prevChar == '/') && (c == '/'))
				continue;
			sb.append(c);
			prevChar = c;
		}
		return sb.toString();
	}

	@Override
	public String normalize(String pathname) {
		int n = pathname.length();
		char prevChar = 0;
		for (int i = 0; i < n; i++) {
			char c = pathname.charAt(i);
			if ((prevChar == '/') && (c == '/'))
				return normalize(pathname, n, i - 1);
			prevChar = c;
		}
		if (prevChar == '/')
			return normalize(pathname, n, n - 1);
		return pathname;
	}

	@Override
	public int prefixLength(String pathname) {
		if (pathname.length() == 0)
			return 0;
		return (pathname.charAt(0) == '/') ? 1 : 0;
	}

	@Override
	public String resolve(String parent, String child) {
		if (child.equals(""))
			return parent;
		if (child.charAt(0) == '/') {
			if (parent.equals("/"))
				return child;
			return parent + child;
		}
		if (parent.equals("/"))
			return parent + child;
		return parent + '/' + child;
	}

	@Override
	public String getDefaultParent() {
		return "/";
	}

	@Override
	public String fromURIPath(String path) {
		String p = path;
		if (p.endsWith("/") && (p.length() > 1)) {
			// "/foo/" --> "/foo", but "/" --> "/"
			p = p.substring(0, p.length() - 1);
		}
		return p;
	}

	@Override
	public boolean isAbsolute(File f) {
		return (f.getPrefixLength() != 0);
	}

	@Override
	public String resolve(File f) {
		if (isAbsolute(f))
			return f.getPath();
		return resolve(System.getProperty("user.dir"), f.getPath());
	}

	@Override
	public String canonicalize(String path) throws IOException {
		return normalize(path);
	}

	@Override
	public int getBooleanAttributes(File f) {
		Entry e = getEntry(f.getAbsolutePath());
		return e == null ? 0 : e.attributes;
	}

	@Override
	public boolean checkAccess(File f, int access) {
		return (getEntry(f.getAbsolutePath()).access & access) != 0;
	}

	@Override
	public boolean setPermission(File f, int access, boolean enable, boolean owneronly) {
		return false;
	}

	@Override
	public long getLastModifiedTime(File f) {
		return getEntry(f.getAbsolutePath()).lastModifiedTime;
	}

	@Override
	public long getLength(File f) {
		return getEntry(f.getAbsolutePath()).length;
	}

	public void clear() {
		for (int i = 0; i < localStorage.length; i++) {
			String key = localStorage.key(i);
			if (key.startsWith(PREFIX)) {
				localStorage.removeItem(key);
			}
		}
	}

	private String getKey(String pathname) {
		return PREFIX + pathname;
	}

	public Entry createFileEntry(String pathname) throws IOException {
		File f = new File(pathname);
		pathname = f.getAbsolutePath();
		if (hasEntry(pathname)) {
			return null;
		}
		File parent = f.getParentFile();
		if (parent != null) {
			String parentPath = parent.getAbsolutePath();
			DirectoryEntry directoryEntry = getDirectoryEntry(parentPath);
			if (directoryEntry == null) {
				throw new IOException("directory does not exist: " + parentPath);
			}
			Array<String> entries = array(directoryEntry.entries);
			entries.push(f.getName());
			putEntry(parentPath, directoryEntry);
		}
		Entry e;
		putEntry(pathname, e = new Entry() {
			{
				lastModifiedTime = System.currentTimeMillis();
				length = 0;
				data = "";
				attributes = BA_EXISTS | BA_REGULAR;
				access = ACCESS_READ | ACCESS_WRITE;
			}
		});
		return e;
	}

	@Override
	public boolean createFileExclusively(String pathname) throws IOException {
		Entry e = createFileEntry(pathname);
		return e != null;
	}

	boolean hasEntry(String pathname) {
		return localStorage.getItem(getKey(pathname)) != null;
	}

	public Entry getEntry(String pathname) {
		return (Entry) JSON.parse((String) localStorage.getItem(getKey(pathname)));
	}

	public DirectoryEntry getDirectoryEntry(String pathname) {
		return (DirectoryEntry) JSON.parse((String) localStorage.getItem(getKey(pathname)));
	}

	void putEntry(String pathname, Entry entry) {
		localStorage.setItem(getKey(pathname), JSON.stringify(entry));
	}

	private Array<String> getChildEntries(String pathname) {
		DirectoryEntry directoryEntry = getDirectoryEntry(pathname);
		if (directoryEntry != null) {
			return array(directoryEntry.entries);
		} else {
			return new Array<String>();
		}
	}

	private void removeEntry(String pathname) {
		for (String e : getChildEntries(pathname)) {
			removeEntry(pathname + "/" + e);
		}
		localStorage.removeItem(getKey(pathname));
	}

	@Override
	public boolean delete(File f) {
		if (hasEntry(f.getAbsolutePath())) {
			removeEntry(f.getAbsolutePath());
			String parentPath = f.getParentFile().getAbsolutePath();
			DirectoryEntry directoryEntry = getDirectoryEntry(parentPath);
			Array<String> entries = array(directoryEntry.entries);
			directoryEntry.entries = entries.splice(entries.indexOf(f.getName()), 1);
			putEntry(parentPath, directoryEntry);
			return true;
		}
		return false;
	}

	@Override
	public String[] list(File f) {
		return array(getChildEntries(f.getAbsolutePath()));
	}

	@Override
	public boolean createDirectory(File f) {
		if (hasEntry(f.getAbsolutePath())) {
			return false;
		}

		File parent = f.getParentFile();
		if (parent != null) {
			String parentPath = parent.getAbsolutePath();
			DirectoryEntry directoryEntry = getDirectoryEntry(parentPath);
			if (directoryEntry == null) {
				return false;
			}
			Array<String> entries = array(directoryEntry.entries);
			entries.push(f.getName());
			putEntry(parentPath, directoryEntry);
		}

		putEntry(f.getAbsolutePath(), new DirectoryEntry() {
			{
				attributes = BA_DIRECTORY | BA_EXISTS;
				access = ACCESS_READ | ACCESS_WRITE;
				entries = new String[0];
			}
		});
		return true;
	}

	@Override
	public boolean rename(File f1, File f2) {
		Entry e1 = getEntry(f1.getAbsolutePath());
		Entry e2 = getEntry(f2.getAbsolutePath());
		if (e1 == null || e2 != null) {
			return false;
		}
		delete(f1);
		try {
			createFileExclusively(f2.getAbsolutePath());
		} catch (Exception e) {
			return false;
		}
		putEntry(f2.getAbsolutePath(), e1);
		return true;
	}

	@Override
	public boolean setLastModifiedTime(File f, long time) {
		Entry e = getEntry(f.getAbsolutePath());
		if (e != null) {
			e.lastModifiedTime = time;
			return true;
		} else {
			return false;
		}
	}

	@Override
	public boolean setReadOnly(File f) {
		getEntry(f.getAbsolutePath()).access &= ~ACCESS_WRITE;
		return true;
	}

	@Override
	public File[] listRoots() {
		if (roots == null) {
			roots = new File[] { new File("/") };
		}

		return roots;
	}

	@Override
	public long getSpace(File f, int t) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int compare(File f1, File f2) {
		return f1.getAbsolutePath().compareTo(f2.getAbsolutePath());
	}

	@Override
	public int hashCode(File f) {
		return f.getAbsolutePath().hashCode();
	}

}
