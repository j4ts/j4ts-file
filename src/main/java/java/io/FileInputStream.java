package java.io;

import static def.dom.Globals.atob;
import static jsweet.util.Lang.any;

/**
 * JSweet implementation based on a local storage FS.
 */
public class FileInputStream extends InputStream {

	private byte[] content;
	private int index;

	public FileInputStream(String n) throws FileNotFoundException {
		this(n != null ? new File(n) : null);
	}

	public FileInputStream(File file) throws FileNotFoundException {
		String name = (file != null ? file.getPath() : null);
		if (name == null) {
			throw new NullPointerException();
		}
		if (file.isInvalid()) {
			throw new FileNotFoundException("Invalid file path");
		}
		if (!file.exists()) {
			throw new FileNotFoundException();
		}
		this.content = any(atob(LocalStorageFileSystem.fs.getEntry(file.getAbsolutePath()).data));
		this.index = 0;
	}

	public int read() throws IOException {
		if (index >= this.content.length) {
			return -1;
		}
		return this.content[index++];
	}

	private int readBytes(byte b[], int off, int len) throws IOException {
		if (index >= this.content.length) {
			return -1;
		}
		int count = 0;
		for (int i = off; i < off + len; i++) {
			if (index >= this.content.length) {
				break;
			}
			b[i] = this.content[index++];
			count++;
		}
		return count;
	}

	public int read(byte b[]) throws IOException {
		return readBytes(b, 0, b.length);
	}

	public int read(byte b[], int off, int len) throws IOException {
		return readBytes(b, off, len);
	}

	public long skip(long n) throws IOException {
		index += n;
		return n;
	}

	public int available() throws IOException {
		return content.length - index;
	}

	public void close() throws IOException {
		// do nothing
	}

}
