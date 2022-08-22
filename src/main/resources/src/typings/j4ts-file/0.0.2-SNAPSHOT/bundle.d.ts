declare namespace test {
    class TestFile {
        static assertEquals(o1: any, o2: any): void;
        static assertTrue(b: boolean): void;
        static assertFalse(b: boolean): void;
        static test(): void;
        static testIO(): void;
    }
}
declare namespace java.io {
    /**
     * Package-private abstract class for the local filesystem abstraction.
     * @class
     */
    abstract class FileSystem {
        static __static_initialized: boolean;
        static __static_initialize(): void;
        /**
         * Return the local filesystem's name-separator character.
         * @return {string}
         */
        abstract getSeparator(): string;
        /**
         * Return the local filesystem's path-separator character.
         * @return {string}
         */
        abstract getPathSeparator(): string;
        /**
         * Convert the given pathname string to normal form.  If the string is
         * already in normal form then it is simply returned.
         * @param {string} path
         * @return {string}
         */
        abstract normalize(path: string): string;
        /**
         * Compute the length of this pathname string's prefix.  The pathname
         * string must be in normal form.
         * @param {string} path
         * @return {number}
         */
        abstract prefixLength(path: string): number;
        resolve$java_lang_String$java_lang_String(parent: string, child: string): string;
        /**
         * Resolve the child pathname string against the parent.
         * Both strings must be in normal form, and the result
         * will be in normal form.
         * @param {string} parent
         * @param {string} child
         * @return {string}
         */
        resolve(parent?: any, child?: any): string;
        /**
         * Return the parent pathname string to be used when the parent-directory
         * argument in one of the two-argument File constructors is the empty
         * pathname.
         * @return {string}
         */
        abstract getDefaultParent(): string;
        /**
         * Post-process the given URI path string if necessary.  This is used on
         * win32, e.g., to transform "/c:/foo" into "c:/foo".  The path string
         * still has slash separators; code in the File class will translate them
         * after this method returns.
         * @param {string} path
         * @return {string}
         */
        abstract fromURIPath(path: string): string;
        /**
         * Tell whether or not the given abstract pathname is absolute.
         * @param {java.io.File} f
         * @return {boolean}
         */
        abstract isAbsolute(f: java.io.File): boolean;
        resolve$java_io_File(f: java.io.File): string;
        abstract canonicalize(path: string): string;
        static BA_EXISTS: number;
        static BA_REGULAR: number;
        static BA_DIRECTORY: number;
        static BA_HIDDEN: number;
        /**
         * Return the simple boolean attributes for the file or directory denoted
         * by the given abstract pathname, or zero if it does not exist or some
         * other I/O error occurs.
         * @param {java.io.File} f
         * @return {number}
         */
        abstract getBooleanAttributes(f: java.io.File): number;
        static ACCESS_READ: number;
        static ACCESS_WRITE: number;
        static ACCESS_EXECUTE: number;
        /**
         * Check whether the file or directory denoted by the given abstract
         * pathname may be accessed by this process.  The second argument specifies
         * which access, ACCESS_READ, ACCESS_WRITE or ACCESS_EXECUTE, to check.
         * Return false if access is denied or an I/O error occurs
         * @param {java.io.File} f
         * @param {number} access
         * @return {boolean}
         */
        abstract checkAccess(f: java.io.File, access: number): boolean;
        /**
         * Set on or off the access permission (to owner only or to all) to the file
         * or directory denoted by the given abstract pathname, based on the parameters
         * enable, access and oweronly.
         * @param {java.io.File} f
         * @param {number} access
         * @param {boolean} enable
         * @param {boolean} owneronly
         * @return {boolean}
         */
        abstract setPermission(f: java.io.File, access: number, enable: boolean, owneronly: boolean): boolean;
        /**
         * Return the time at which the file or directory denoted by the given
         * abstract pathname was last modified, or zero if it does not exist or
         * some other I/O error occurs.
         * @param {java.io.File} f
         * @return {number}
         */
        abstract getLastModifiedTime(f: java.io.File): number;
        /**
         * Return the length in bytes of the file denoted by the given abstract
         * pathname, or zero if it does not exist, is a directory, or some other
         * I/O error occurs.
         * @param {java.io.File} f
         * @return {number}
         */
        abstract getLength(f: java.io.File): number;
        /**
         * Create a new empty file with the given pathname.  Return
         * <code>true</code> if the file was created and <code>false</code> if a
         * file or directory with the given pathname already exists.  Throw an
         * IOException if an I/O error occurs.
         * @param {string} pathname
         * @return {boolean}
         */
        abstract createFileExclusively(pathname: string): boolean;
        /**
         * Delete the file or directory denoted by the given abstract pathname,
         * returning <code>true</code> if and only if the operation succeeds.
         * @param {java.io.File} f
         * @return {boolean}
         */
        abstract delete(f: java.io.File): boolean;
        /**
         * List the elements of the directory denoted by the given abstract
         * pathname.  Return an array of strings naming the elements of the
         * directory if successful; otherwise, return <code>null</code>.
         * @param {java.io.File} f
         * @return {java.lang.String[]}
         */
        abstract list(f: java.io.File): string[];
        /**
         * Create a new directory denoted by the given abstract pathname,
         * returning <code>true</code> if and only if the operation succeeds.
         * @param {java.io.File} f
         * @return {boolean}
         */
        abstract createDirectory(f: java.io.File): boolean;
        /**
         * Rename the file or directory denoted by the first abstract pathname to
         * the second abstract pathname, returning <code>true</code> if and only if
         * the operation succeeds.
         * @param {java.io.File} f1
         * @param {java.io.File} f2
         * @return {boolean}
         */
        abstract rename(f1: java.io.File, f2: java.io.File): boolean;
        /**
         * Set the last-modified time of the file or directory denoted by the
         * given abstract pathname, returning <code>true</code> if and only if the
         * operation succeeds.
         * @param {java.io.File} f
         * @param {number} time
         * @return {boolean}
         */
        abstract setLastModifiedTime(f: java.io.File, time: number): boolean;
        /**
         * Mark the file or directory denoted by the given abstract pathname as
         * read-only, returning <code>true</code> if and only if the operation
         * succeeds.
         * @param {java.io.File} f
         * @return {boolean}
         */
        abstract setReadOnly(f: java.io.File): boolean;
        /**
         * List the available filesystem roots.
         * @return {java.io.File[]}
         */
        abstract listRoots(): java.io.File[];
        static SPACE_TOTAL: number;
        static SPACE_FREE: number;
        static SPACE_USABLE: number;
        abstract getSpace(f: java.io.File, t: number): number;
        /**
         * Compare two abstract pathnames lexicographically.
         * @param {java.io.File} f1
         * @param {java.io.File} f2
         * @return {number}
         */
        abstract compare(f1: java.io.File, f2: java.io.File): number;
        /**
         * Compute the hash code of an abstract pathname.
         * @param {java.io.File} f
         * @return {number}
         */
        abstract hashCode(f: java.io.File): number;
        static useCanonCaches: boolean;
        static useCanonPrefixCache: boolean;
        static getBooleanProperty(prop: string, defaultVal: boolean): boolean;
        static __static_initializer_0(): void;
    }
}
declare namespace java.io {
    /**
     * JSweet partial implementation based on a local storage FS.
     * @param {string} name
     * @param {boolean} append
     * @class
     * @extends java.io.OutputStream
     */
    class FileOutputStream extends java.io.OutputStream {
        /**
         * True if the file is opened for append.
         */
        append: boolean;
        file: java.io.File;
        entry: java.io.LocalStorageFileSystem.Entry;
        content: number[];
        constructor(name?: any, append?: any);
        write$int$boolean(b: number, append: boolean): void;
        write$int(b: number): void;
        writeBytes(b: number[], off: number, len: number, append: boolean): void;
        write$byte_A(b: number[]): void;
        write$byte_A$int$int(b: number[], off: number, len: number): void;
        write(b?: any, off?: any, len?: any): any;
        /**
         *
         */
        flush(): void;
        close(): void;
    }
}
declare namespace java.io {
    /**
     * JSweet implementation based on a local storage FS.
     * @param {string} n
     * @class
     * @extends java.io.InputStream
     */
    class FileInputStream extends java.io.InputStream {
        content: number[];
        index: number;
        constructor(n?: any);
        read$(): number;
        readBytes(b: number[], off: number, len: number): number;
        read$byte_A(b: number[]): number;
        read$byte_A$int$int(b: number[], off: number, len: number): number;
        read(b?: any, off?: any, len?: any): number;
        skip(n: number): number;
        available(): number;
        close(): void;
    }
}
declare namespace java.io {
    /**
     * JSweet implementation.
     * @param {string} fileName
     * @param {boolean} append
     * @class
     * @extends java.io.OutputStreamWriter
     */
    class FileWriter extends java.io.OutputStreamWriter {
        constructor(fileName?: any, append?: any);
    }
}
declare namespace java.io {
    interface FilenameFilter {
        (dir: java.io.File, name: string): boolean;
    }
}
declare namespace java.io {
    /**
     * JSweet implementation.
     * @param {string} fileName
     * @class
     * @extends java.io.InputStreamReader
     */
    class FileReader extends java.io.InputStreamReader {
        constructor(fileName?: any);
    }
}
declare namespace java.io {
    /**
     * JSweet implementation.
     * @param {string} s
     * @class
     * @extends java.io.IOException
     */
    class FileNotFoundException extends java.io.IOException {
        static serialVersionUID: number;
        constructor(s?: any);
    }
}
declare namespace java.io {
    interface FileFilter {
        (pathname: java.io.File): boolean;
    }
}
declare namespace java.io {
    class LocalStorageFileSystem extends java.io.FileSystem {
        PREFIX: string;
        roots: java.io.File[];
        /**
         * The FileSystem object representing the platform's local file system.
         */
        static fs: LocalStorageFileSystem;
        static fs_$LI$(): LocalStorageFileSystem;
        /**
         *
         * @return {string}
         */
        getSeparator(): string;
        /**
         *
         * @return {string}
         */
        getPathSeparator(): string;
        normalize$java_lang_String$int$int(pathname: string, len: number, off: number): string;
        normalize(pathname?: any, len?: any, off?: any): string;
        normalize$java_lang_String(pathname: string): string;
        /**
         *
         * @param {string} pathname
         * @return {number}
         */
        prefixLength(pathname: string): number;
        resolve$java_lang_String$java_lang_String(parent: string, child: string): string;
        /**
         *
         * @param {string} parent
         * @param {string} child
         * @return {string}
         */
        resolve(parent?: any, child?: any): string;
        /**
         *
         * @return {string}
         */
        getDefaultParent(): string;
        /**
         *
         * @param {string} path
         * @return {string}
         */
        fromURIPath(path: string): string;
        /**
         *
         * @param {java.io.File} f
         * @return {boolean}
         */
        isAbsolute(f: java.io.File): boolean;
        resolve$java_io_File(f: java.io.File): string;
        /**
         *
         * @param {string} path
         * @return {string}
         */
        canonicalize(path: string): string;
        /**
         *
         * @param {java.io.File} f
         * @return {number}
         */
        getBooleanAttributes(f: java.io.File): number;
        /**
         *
         * @param {java.io.File} f
         * @param {number} access
         * @return {boolean}
         */
        checkAccess(f: java.io.File, access: number): boolean;
        /**
         *
         * @param {java.io.File} f
         * @param {number} access
         * @param {boolean} enable
         * @param {boolean} owneronly
         * @return {boolean}
         */
        setPermission(f: java.io.File, access: number, enable: boolean, owneronly: boolean): boolean;
        /**
         *
         * @param {java.io.File} f
         * @return {number}
         */
        getLastModifiedTime(f: java.io.File): number;
        /**
         *
         * @param {java.io.File} f
         * @return {number}
         */
        getLength(f: java.io.File): number;
        clear(): void;
        getKey(pathname: string): string;
        createFileEntry(pathname: string): LocalStorageFileSystem.Entry;
        /**
         *
         * @param {string} pathname
         * @return {boolean}
         */
        createFileExclusively(pathname: string): boolean;
        hasEntry(pathname: string): boolean;
        getEntry(pathname: string): LocalStorageFileSystem.Entry;
        getDirectoryEntry(pathname: string): LocalStorageFileSystem.DirectoryEntry;
        putEntry(pathname: string, entry: LocalStorageFileSystem.Entry): void;
        getChildEntries(pathname: string): Array<string>;
        removeEntry(pathname: string): void;
        /**
         *
         * @param {java.io.File} f
         * @return {boolean}
         */
        delete(f: java.io.File): boolean;
        /**
         *
         * @param {java.io.File} f
         * @return {java.lang.String[]}
         */
        list(f: java.io.File): string[];
        /**
         *
         * @param {java.io.File} f
         * @return {boolean}
         */
        createDirectory(f: java.io.File): boolean;
        /**
         *
         * @param {java.io.File} f1
         * @param {java.io.File} f2
         * @return {boolean}
         */
        rename(f1: java.io.File, f2: java.io.File): boolean;
        /**
         *
         * @param {java.io.File} f
         * @param {number} time
         * @return {boolean}
         */
        setLastModifiedTime(f: java.io.File, time: number): boolean;
        /**
         *
         * @param {java.io.File} f
         * @return {boolean}
         */
        setReadOnly(f: java.io.File): boolean;
        /**
         *
         * @return {java.io.File[]}
         */
        listRoots(): java.io.File[];
        /**
         *
         * @param {java.io.File} f
         * @param {number} t
         * @return {number}
         */
        getSpace(f: java.io.File, t: number): number;
        /**
         *
         * @param {java.io.File} f1
         * @param {java.io.File} f2
         * @return {number}
         */
        compare(f1: java.io.File, f2: java.io.File): number;
        /**
         *
         * @param {java.io.File} f
         * @return {number}
         */
        hashCode(f: java.io.File): number;
        constructor();
    }
    namespace LocalStorageFileSystem {
        interface Entry {
            attributes: number;
            access: number;
            data: string;
            lastModifiedTime: number;
            length: number;
        }
        interface DirectoryEntry extends LocalStorageFileSystem.Entry {
            entries: string[];
        }
    }
}
declare namespace java.io {
    /**
     * JSweet implementation for file.
     * @param {string} parent
     * @param {string} child
     * @class
     */
    class File implements java.io.Serializable, java.lang.Comparable<File> {
        path: string;
        status: File.PathStatus;
        isInvalid(): boolean;
        prefixLength: number;
        getPrefixLength(): number;
        static separatorChar: string;
        static separatorChar_$LI$(): string;
        static separator: string;
        static separator_$LI$(): string;
        static pathSeparatorChar: string;
        static pathSeparatorChar_$LI$(): string;
        static pathSeparator: string;
        static pathSeparator_$LI$(): string;
        constructor(parent?: any, child?: any, direct?: any);
        getName(): string;
        getParent(): string;
        getParentFile(): File;
        getPath(): string;
        isAbsolute(): boolean;
        getAbsolutePath(): string;
        getAbsoluteFile(): File;
        getCanonicalPath(): string;
        getCanonicalFile(): File;
        static slashify(path: string, isDirectory: boolean): string;
        canRead(): boolean;
        canWrite(): boolean;
        exists(): boolean;
        isDirectory(): boolean;
        isFile(): boolean;
        isHidden(): boolean;
        lastModified(): number;
        length(): number;
        createNewFile(): boolean;
        delete(): boolean;
        list$(): string[];
        list$java_io_FilenameFilter(filter: java.io.FilenameFilter): string[];
        list(filter?: any): string[];
        listFiles$(): File[];
        listFiles$java_io_FilenameFilter(filter: java.io.FilenameFilter): File[];
        listFiles(filter?: any): File[];
        listFiles$java_io_FileFilter(filter: java.io.FileFilter): File[];
        mkdir(): boolean;
        mkdirs(): boolean;
        renameTo(dest: File): boolean;
        setLastModified(time: number): boolean;
        setReadOnly(): boolean;
        setWritable$boolean$boolean(writable: boolean, ownerOnly: boolean): boolean;
        setWritable(writable?: any, ownerOnly?: any): boolean;
        setWritable$boolean(writable: boolean): boolean;
        setReadable$boolean$boolean(readable: boolean, ownerOnly: boolean): boolean;
        setReadable(readable?: any, ownerOnly?: any): boolean;
        setReadable$boolean(readable: boolean): boolean;
        setExecutable$boolean$boolean(executable: boolean, ownerOnly: boolean): boolean;
        setExecutable(executable?: any, ownerOnly?: any): boolean;
        setExecutable$boolean(executable: boolean): boolean;
        canExecute(): boolean;
        static listRoots(): File[];
        getTotalSpace(): number;
        getFreeSpace(): number;
        getUsableSpace(): number;
        static createTempFile$java_lang_String$java_lang_String$java_io_File(prefix: string, suffix: string, directory: File): File;
        static createTempFile(prefix?: any, suffix?: any, directory?: any): File;
        static createTempFile$java_lang_String$java_lang_String(prefix: string, suffix: string): File;
        compareTo(pathname: File): number;
        equals(obj: any): boolean;
        hashCode(): number;
        toString(): string;
        static serialVersionUID: number;
    }
    namespace File {
        enum PathStatus {
            INVALID = 0,
            CHECKED = 1
        }
        class TempDirectory {
            constructor();
            static tmpdir: java.io.File;
            static tmpdir_$LI$(): java.io.File;
            static location(): java.io.File;
            static generateFile(prefix: string, suffix: string, dir: java.io.File): java.io.File;
        }
    }
}
