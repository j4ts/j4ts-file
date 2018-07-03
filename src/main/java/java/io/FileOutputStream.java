package java.io;

import static def.dom.Globals.btoa;
import static jsweet.util.Lang.array;
import static jsweet.util.Lang.string;

/**
 * JSweet partial implementation based on a local storage FS.
 */

public class FileOutputStream extends OutputStream {
	/**
	 * True if the file is opened for append.
	 */
	private final boolean append;

	private final File file;

	private final LocalStorageFileSystem.Entry entry;

	private final byte[] content;

	public FileOutputStream(String name) throws FileNotFoundException {
		this(name != null ? new File(name) : null, false);
	}

	public FileOutputStream(String name, boolean append) throws FileNotFoundException {
		this(name != null ? new File(name) : null, append);
	}

	public FileOutputStream(File file) throws FileNotFoundException {
		this(file, false);
	}

	public FileOutputStream(File file, boolean append) throws FileNotFoundException {
		if (!file.exists()) {
			throw new FileNotFoundException();
		}
		this.file = file;
		this.append = append;
		entry = LocalStorageFileSystem.fs.getEntry(file.getAbsolutePath());
		content = append ? entry.data.getBytes() : new byte[0];
	}

	private void write(int b, boolean append) throws IOException {
		array(content).push((byte) b);
	}

	public void write(int b) throws IOException {
		write(b, append);
	}

	private void writeBytes(byte b[], int off, int len, boolean append) throws IOException {
		for (int i = off; i < off + len; i++) {
			array(content).push(b[i]);
		}
	}

	public void write(byte b[]) throws IOException {
		writeBytes(b, 0, b.length, append);
	}

	public void write(byte b[], int off, int len) throws IOException {
		writeBytes(b, off, len, append);
	}

	@Override
	public void flush() throws IOException {
		entry.data = btoa(string(array(content).map((b, __, ___) -> {
			return string(def.js.String.fromCharCode(b));
		}).join("")));
		LocalStorageFileSystem.fs.putEntry(file.getAbsolutePath(), entry);
	}

	public void close() throws IOException {
		flush();
	}

}
