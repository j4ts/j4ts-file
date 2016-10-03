declare namespace java.io {
    interface FileFilter {
        (pathname: java.io.File): boolean;
    }
}
declare namespace java.io {
    /**
     * JSweet implementation based on a local storage FS.
     */
    class FileInputStream extends java.io.InputStream {
        private content;
        private index;
        constructor(name?: any);
        read$(): number;
        private readBytes(b, off, len);
        read$byte_A(b: number[]): number;
        read(b?: any, off?: any, len?: any): any;
        skip(n: number): number;
        available(): number;
        close(): void;
    }
}
declare namespace java.io {
    /**
     * JSweet implementation.
     */
    class FileNotFoundException extends java.io.IOException {
        static serialVersionUID: number;
        constructor(s?: any);
    }
}
declare namespace java.io {
    /**
     * JSweet partial implementation based on a local storage FS.
     */
    class FileOutputStream extends java.io.OutputStream {
        /**
         * True if the file is opened for append.
         */
        private append;
        private file;
        private entry;
        private content;
        constructor(name?: any, append?: any);
        private write$int$boolean(b, append);
        write$int(b: number): void;
        private writeBytes(b, off, len, append);
        write$byte_A(b: number[]): void;
        write(b?: any, off?: any, len?: any): any;
        flush(): void;
        close(): void;
    }
}
declare namespace java.io {
    /**
     * JSweet implementation.
     */
    class FileReader extends java.io.InputStreamReader {
        constructor(fileName?: any);
    }
}
declare namespace java.io {
    /**
     * Package-private abstract class for the local filesystem abstraction.
     */
    abstract class FileSystem {
        static __static_initialized: boolean;
        static __static_initialize(): void;
        /**
         * Return the local filesystem's name-separator character.
         */
        abstract getSeparator(): string;
        /**
         * Return the local filesystem's path-separator character.
         */
        abstract getPathSeparator(): string;
        normalize(pathname?: any, len?: any, off?: any): any;
        /**
         * Convert the given pathname string to normal form.  If the string is
         * already in normal form then it is simply returned.
         */
        normalize$java_lang_String(path: string): string;
        /**
         * Compute the length of this pathname string's prefix.  The pathname
         * string must be in normal form.
         */
        abstract prefixLength(path: string): number;
        /**
         * Resolve the child pathname string against the parent.
         * Both strings must be in normal form, and the result
         * will be in normal form.
         */
        resolve(parent?: any, child?: any): any;
        /**
         * Return the parent pathname string to be used when the parent-directory
         * argument in one of the two-argument File constructors is the empty
         * pathname.
         */
        abstract getDefaultParent(): string;
        /**
         * Post-process the given URI path string if necessary.  This is used on
         * win32, e.g., to transform "/c:/foo" into "c:/foo".  The path string
         * still has slash separators; code in the File class will translate them
         * after this method returns.
         */
        abstract fromURIPath(path: string): string;
        /**
         * Tell whether or not the given abstract pathname is absolute.
         */
        abstract isAbsolute(f: java.io.File): boolean;
        /**
         * Resolve the given abstract pathname into absolute form.  Invoked by the
         * getAbsolutePath and getCanonicalPath methods in the File class.
         */
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
         */
        abstract checkAccess(f: java.io.File, access: number): boolean;
        /**
         * Set on or off the access permission (to owner only or to all) to the file
         * or directory denoted by the given abstract pathname, based on the parameters
         * enable, access and oweronly.
         */
        abstract setPermission(f: java.io.File, access: number, enable: boolean, owneronly: boolean): boolean;
        /**
         * Return the time at which the file or directory denoted by the given
         * abstract pathname was last modified, or zero if it does not exist or
         * some other I/O error occurs.
         */
        abstract getLastModifiedTime(f: java.io.File): number;
        /**
         * Return the length in bytes of the file denoted by the given abstract
         * pathname, or zero if it does not exist, is a directory, or some other
         * I/O error occurs.
         */
        abstract getLength(f: java.io.File): number;
        /**
         * Create a new empty file with the given pathname.  Return
         * <code>true</code> if the file was created and <code>false</code> if a
         * file or directory with the given pathname already exists.  Throw an
         * IOException if an I/O error occurs.
         */
        abstract createFileExclusively(pathname: string): boolean;
        /**
         * Delete the file or directory denoted by the given abstract pathname,
         * returning <code>true</code> if and only if the operation succeeds.
         */
        abstract delete(f: java.io.File): boolean;
        /**
         * List the elements of the directory denoted by the given abstract
         * pathname.  Return an array of strings naming the elements of the
         * directory if successful; otherwise, return <code>null</code>.
         */
        abstract list(f: java.io.File): string[];
        /**
         * Create a new directory denoted by the given abstract pathname,
         * returning <code>true</code> if and only if the operation succeeds.
         */
        abstract createDirectory(f: java.io.File): boolean;
        /**
         * Rename the file or directory denoted by the first abstract pathname to
         * the second abstract pathname, returning <code>true</code> if and only if
         * the operation succeeds.
         */
        abstract rename(f1: java.io.File, f2: java.io.File): boolean;
        /**
         * Set the last-modified time of the file or directory denoted by the
         * given abstract pathname, returning <code>true</code> if and only if the
         * operation succeeds.
         */
        abstract setLastModifiedTime(f: java.io.File, time: number): boolean;
        /**
         * Mark the file or directory denoted by the given abstract pathname as
         * read-only, returning <code>true</code> if and only if the operation
         * succeeds.
         */
        abstract setReadOnly(f: java.io.File): boolean;
        /**
         * List the available filesystem roots.
         */
        abstract listRoots(): java.io.File[];
        static SPACE_TOTAL: number;
        static SPACE_FREE: number;
        static SPACE_USABLE: number;
        abstract getSpace(f: java.io.File, t: number): number;
        /**
         * Compare two abstract pathnames lexicographically.
         */
        abstract compare(f1: java.io.File, f2: java.io.File): number;
        /**
         * Compute the hash code of an abstract pathname.
         */
        abstract hashCode(f: java.io.File): number;
        static useCanonCaches: boolean;
        static useCanonPrefixCache: boolean;
        private static getBooleanProperty(prop, defaultVal);
        static __static_initializer_0(): void;
    }
}
declare namespace java.io {
    /**
     * JSweet implementation.
     */
    class FileWriter extends java.io.OutputStreamWriter {
        constructor(fileName?: any, append?: any);
    }
}
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
    class LocalStorageFileSystem extends java.io.FileSystem {
        private PREFIX;
        roots: java.io.File[];
        /**
         * The FileSystem object representing the platform's local file system.
         */
        static fs: LocalStorageFileSystem;
        static fs_$LI$(): LocalStorageFileSystem;
        getSeparator(): string;
        getPathSeparator(): string;
        normalize(pathname?: any, len?: any, off?: any): any;
        normalize$java_lang_String(pathname: string): string;
        prefixLength(pathname: string): number;
        resolve(parent?: any, child?: any): any;
        getDefaultParent(): string;
        fromURIPath(path: string): string;
        isAbsolute(f: java.io.File): boolean;
        resolve$java_io_File(f: java.io.File): string;
        canonicalize(path: string): string;
        getBooleanAttributes(f: java.io.File): number;
        checkAccess(f: java.io.File, access: number): boolean;
        setPermission(f: java.io.File, access: number, enable: boolean, owneronly: boolean): boolean;
        getLastModifiedTime(f: java.io.File): number;
        getLength(f: java.io.File): number;
        clear(): void;
        getKey(pathname: string): string;
        createFileEntry(pathname: string): LocalStorageFileSystem.Entry;
        createFileExclusively(pathname: string): boolean;
        hasEntry(pathname: string): boolean;
        getEntry(pathname: string): LocalStorageFileSystem.Entry;
        getDirectoryEntry(pathname: string): LocalStorageFileSystem.DirectoryEntry;
        putEntry(pathname: string, entry: LocalStorageFileSystem.Entry): void;
        getChildEntries(pathname: string): Array<string>;
        removeEntry(pathname: string): void;
        delete(f: java.io.File): boolean;
        list(f: java.io.File): string[];
        createDirectory(f: java.io.File): boolean;
        rename(f1: java.io.File, f2: java.io.File): boolean;
        setLastModifiedTime(f: java.io.File, time: number): boolean;
        setReadOnly(f: java.io.File): boolean;
        listRoots(): java.io.File[];
        getSpace(f: java.io.File, t: number): number;
        compare(f1: java.io.File, f2: java.io.File): number;
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
     */
    class File implements java.io.Serializable, java.lang.Comparable<File> {
        private path;
        private status;
        isInvalid(): boolean;
        private prefixLength;
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
        list(filter?: any): any;
        listFiles$(): File[];
        listFiles(filter?: any): any;
        listFiles$java_io_FileFilter(filter: java.io.FileFilter): File[];
        mkdir(): boolean;
        mkdirs(): boolean;
        renameTo(dest: File): boolean;
        setLastModified(time: number): boolean;
        setReadOnly(): boolean;
        setWritable(writable: boolean, ownerOnly?: boolean): boolean;
        setReadable(readable: boolean, ownerOnly?: boolean): boolean;
        setExecutable(executable: boolean, ownerOnly?: boolean): boolean;
        canExecute(): boolean;
        static listRoots(): File[];
        getTotalSpace(): number;
        getFreeSpace(): number;
        getUsableSpace(): number;
        static createTempFile(prefix: string, suffix: string, directory?: File): File;
        compareTo(pathname: File): number;
        equals(obj: any): boolean;
        hashCode(): number;
        toString(): string;
        static serialVersionUID: number;
    }
    namespace File {
        enum PathStatus {
            INVALID = 0,
            CHECKED = 1,
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
