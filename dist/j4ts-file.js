var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* Generated from Java with JSweet 2.0.1-SNAPSHOT - http://www.jsweet.org */
var test;
(function (test) {
    var TestFile = (function () {
        function TestFile() {
        }
        TestFile.assertEquals = function (o1, o2) {
            if (o1 !== o2) {
                throw new Error("invalid assertion: " + o1 + "!=" + o2);
            }
        };
        TestFile.assertTrue = function (b) {
            if (!b) {
                throw new Error("invalid assertion");
            }
        };
        TestFile.assertFalse = function (b) {
            if (b) {
                throw new Error("invalid assertion");
            }
        };
        TestFile.test = function () {
            try {
                TestFile.testIO();
                var result = document.getElementById("result");
                if (result != null) {
                    result.innerHTML = "Success!";
                }
            }
            catch (e) {
                console.error(e);
                var result = document.getElementById("result");
                if (result != null) {
                    result.innerHTML = "Failure: " + e.message;
                }
            }
            ;
        };
        TestFile.testIO = function () {
            console.info("testing io");
            localStorage.clear();
            var s = new java.io.ByteArrayInputStream(/* getBytes */ ("abc").split('').map(function (s) { return s.charCodeAt(0); }));
            TestFile.assertEquals(javaemul.internal.CharacterHelper.getNumericValue('a'), s.read());
            var dir = new java.io.File("/a/b/c");
            TestFile.assertFalse(dir.exists());
            dir.mkdirs();
            TestFile.assertTrue(dir.exists());
            var f = new java.io.File(dir, "test.txt");
            TestFile.assertFalse(f.exists());
            f.createNewFile();
            TestFile.assertTrue(f.exists());
            var fw = new java.io.FileWriter(f);
            fw.append("abc");
            fw.close();
            var reader = new java.io.BufferedReader(new java.io.FileReader(f));
            var line = reader.readLine();
            reader.close();
            TestFile.assertEquals("abc", line);
            console.info("end testing io");
        };
        return TestFile;
    }());
    test.TestFile = TestFile;
    TestFile["__class"] = "test.TestFile";
})(test || (test = {}));
var java;
(function (java) {
    var io;
    (function (io) {
        /**
         * JSweet implementation based on a local storage FS.
         * @param {string} name
         * @class
         * @extends java.io.InputStream
         */
        var FileInputStream = (function (_super) {
            __extends(FileInputStream, _super);
            function FileInputStream(name) {
                var _this = this;
                if (((typeof name === 'string') || name === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    {
                        var __args_1 = Array.prototype.slice.call(arguments);
                        var file_1 = name != null ? new java.io.File(name) : null;
                        _this = _super.call(this) || this;
                        if (_this.content === undefined)
                            _this.content = null;
                        if (_this.index === undefined)
                            _this.index = 0;
                        if (_this.content === undefined)
                            _this.content = null;
                        if (_this.index === undefined)
                            _this.index = 0;
                        (function () {
                            var name = (file_1 != null ? file_1.getPath() : null);
                            if (name == null) {
                                throw new java.lang.NullPointerException();
                            }
                            if (file_1.isInvalid()) {
                                throw new java.io.FileNotFoundException("Invalid file path");
                            }
                            if (!file_1.exists()) {
                                throw new java.io.FileNotFoundException();
                            }
                            _this.content = (atob(java.io.LocalStorageFileSystem.fs_$LI$().getEntry(file_1.getAbsolutePath()).data));
                            _this.index = 0;
                        })();
                    }
                }
                else if (((name != null && name instanceof java.io.File) || name === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    var file_2 = __args[0];
                    _this = _super.call(this) || this;
                    if (_this.content === undefined)
                        _this.content = null;
                    if (_this.index === undefined)
                        _this.index = 0;
                    if (_this.content === undefined)
                        _this.content = null;
                    if (_this.index === undefined)
                        _this.index = 0;
                    (function () {
                        var name = (file_2 != null ? file_2.getPath() : null);
                        if (name == null) {
                            throw new java.lang.NullPointerException();
                        }
                        if (file_2.isInvalid()) {
                            throw new java.io.FileNotFoundException("Invalid file path");
                        }
                        if (!file_2.exists()) {
                            throw new java.io.FileNotFoundException();
                        }
                        _this.content = (atob(java.io.LocalStorageFileSystem.fs_$LI$().getEntry(file_2.getAbsolutePath()).data));
                        _this.index = 0;
                    })();
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            FileInputStream.prototype.read$ = function () {
                if (this.index >= this.content.length) {
                    return -1;
                }
                return this.content[this.index++];
            };
            /*private*/ FileInputStream.prototype.readBytes = function (b, off, len) {
                if (this.index >= this.content.length) {
                    return -1;
                }
                var count = 0;
                for (var i = off; i < off + len; i++) {
                    if (this.index >= this.content.length) {
                        break;
                    }
                    b[i] = this.content[this.index++];
                    count++;
                }
                ;
                return count;
            };
            FileInputStream.prototype.read$byte_A = function (b) {
                return this.readBytes(b, 0, b.length);
            };
            FileInputStream.prototype.read$byte_A$int$int = function (b, off, len) {
                return this.readBytes(b, off, len);
            };
            FileInputStream.prototype.read = function (b, off, len) {
                if (((b != null && b instanceof Array && (b.length == 0 || b[0] == null || (typeof b[0] === 'number'))) || b === null) && ((typeof off === 'number') || off === null) && ((typeof len === 'number') || len === null)) {
                    return this.read$byte_A$int$int(b, off, len);
                }
                else if (((b != null && b instanceof Array && (b.length == 0 || b[0] == null || (typeof b[0] === 'number'))) || b === null) && off === undefined && len === undefined) {
                    return this.read$byte_A(b);
                }
                else if (b === undefined && off === undefined && len === undefined) {
                    return this.read$();
                }
                else
                    throw new Error('invalid overload');
            };
            FileInputStream.prototype.skip = function (n) {
                this.index += n;
                return n;
            };
            FileInputStream.prototype.available = function () {
                return this.content.length - this.index;
            };
            FileInputStream.prototype.close = function () {
            };
            return FileInputStream;
        }(java.io.InputStream));
        io.FileInputStream = FileInputStream;
        FileInputStream["__class"] = "java.io.FileInputStream";
        FileInputStream["__interfaces"] = ["java.io.Closeable", "java.lang.AutoCloseable"];
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
(function (java) {
    var io;
    (function (io) {
        /**
         * Package-private abstract class for the local filesystem abstraction.
         * @class
         */
        var FileSystem = (function () {
            function FileSystem() {
            }
            FileSystem.__static_initialize = function () { if (!FileSystem.__static_initialized) {
                FileSystem.__static_initialized = true;
                FileSystem.__static_initializer_0();
            } };
            FileSystem.prototype.normalize = function (pathname, len, off) {
                if (((typeof pathname === 'string') || pathname === null) && len === undefined && off === undefined) {
                    return this.normalize$java_lang_String(pathname);
                }
                else
                    throw new Error('invalid overload');
            };
            FileSystem.prototype.normalize$java_lang_String = function (path) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
            FileSystem.prototype.resolve$java_lang_String$java_lang_String = function (parent, child) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
            /**
             * Resolve the child pathname string against the parent.
             * Both strings must be in normal form, and the result
             * will be in normal form.
             * @param {string} parent
             * @param {string} child
             * @return {string}
             */
            FileSystem.prototype.resolve = function (parent, child) {
                if (((typeof parent === 'string') || parent === null) && ((typeof child === 'string') || child === null)) {
                    return this.resolve$java_lang_String$java_lang_String(parent, child);
                }
                else if (((parent != null && parent instanceof java.io.File) || parent === null) && child === undefined) {
                    return this.resolve$java_io_File(parent);
                }
                else
                    throw new Error('invalid overload');
            };
            FileSystem.prototype.resolve$java_io_File = function (f) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
            /*private*/ FileSystem.getBooleanProperty = function (prop, defaultVal) {
                var val = java.lang.System.getProperty(prop);
                if (val == null)
                    return defaultVal;
                if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(val, "true")) {
                    return true;
                }
                else {
                    return false;
                }
            };
            FileSystem.__static_initializer_0 = function () {
                FileSystem.useCanonCaches = FileSystem.getBooleanProperty("sun.io.useCanonCaches", FileSystem.useCanonCaches);
                FileSystem.useCanonPrefixCache = FileSystem.getBooleanProperty("sun.io.useCanonPrefixCache", FileSystem.useCanonPrefixCache);
            };
            return FileSystem;
        }());
        FileSystem.__static_initialized = false;
        FileSystem.BA_EXISTS = 1;
        FileSystem.BA_REGULAR = 2;
        FileSystem.BA_DIRECTORY = 4;
        FileSystem.BA_HIDDEN = 8;
        FileSystem.ACCESS_READ = 4;
        FileSystem.ACCESS_WRITE = 2;
        FileSystem.ACCESS_EXECUTE = 1;
        FileSystem.SPACE_TOTAL = 0;
        FileSystem.SPACE_FREE = 1;
        FileSystem.SPACE_USABLE = 2;
        FileSystem.useCanonCaches = true;
        FileSystem.useCanonPrefixCache = true;
        io.FileSystem = FileSystem;
        FileSystem["__class"] = "java.io.FileSystem";
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
(function (java) {
    var io;
    (function (io) {
        /**
         * JSweet partial implementation based on a local storage FS.
         * @param {string} name
         * @param {boolean} append
         * @class
         * @extends java.io.OutputStream
         */
        var FileOutputStream = (function (_super) {
            __extends(FileOutputStream, _super);
            function FileOutputStream(name, append) {
                var _this = this;
                if (((typeof name === 'string') || name === null) && ((typeof append === 'boolean') || append === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    {
                        var __args_2 = Array.prototype.slice.call(arguments);
                        var file_3 = name != null ? new java.io.File(name) : null;
                        _this = _super.call(this) || this;
                        if (_this.append === undefined)
                            _this.append = false;
                        if (_this.file === undefined)
                            _this.file = null;
                        if (_this.entry === undefined)
                            _this.entry = null;
                        if (_this.content === undefined)
                            _this.content = null;
                        if (_this.append === undefined)
                            _this.append = false;
                        if (_this.file === undefined)
                            _this.file = null;
                        if (_this.entry === undefined)
                            _this.entry = null;
                        if (_this.content === undefined)
                            _this.content = null;
                        (function () {
                            if (!file_3.exists()) {
                                throw new java.io.FileNotFoundException();
                            }
                            _this.file = file_3;
                            _this.append = append;
                            _this.entry = java.io.LocalStorageFileSystem.fs_$LI$().getEntry(file_3.getAbsolutePath());
                            _this.content = append ? (_this.entry.data).split('').map(function (s) { return s.charCodeAt(0); }) : [];
                        })();
                    }
                }
                else if (((name != null && name instanceof java.io.File) || name === null) && ((typeof append === 'boolean') || append === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    var file_4 = __args[0];
                    _this = _super.call(this) || this;
                    if (_this.append === undefined)
                        _this.append = false;
                    if (_this.file === undefined)
                        _this.file = null;
                    if (_this.entry === undefined)
                        _this.entry = null;
                    if (_this.content === undefined)
                        _this.content = null;
                    if (_this.append === undefined)
                        _this.append = false;
                    if (_this.file === undefined)
                        _this.file = null;
                    if (_this.entry === undefined)
                        _this.entry = null;
                    if (_this.content === undefined)
                        _this.content = null;
                    (function () {
                        if (!file_4.exists()) {
                            throw new java.io.FileNotFoundException();
                        }
                        _this.file = file_4;
                        _this.append = append;
                        _this.entry = java.io.LocalStorageFileSystem.fs_$LI$().getEntry(file_4.getAbsolutePath());
                        _this.content = append ? (_this.entry.data).split('').map(function (s) { return s.charCodeAt(0); }) : [];
                    })();
                }
                else if (((typeof name === 'string') || name === null) && append === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    {
                        var __args_3 = Array.prototype.slice.call(arguments);
                        var file_5 = name != null ? new java.io.File(name) : null;
                        var append_1 = false;
                        _this = _super.call(this) || this;
                        if (_this.append === undefined)
                            _this.append = false;
                        if (_this.file === undefined)
                            _this.file = null;
                        if (_this.entry === undefined)
                            _this.entry = null;
                        if (_this.content === undefined)
                            _this.content = null;
                        if (_this.append === undefined)
                            _this.append = false;
                        if (_this.file === undefined)
                            _this.file = null;
                        if (_this.entry === undefined)
                            _this.entry = null;
                        if (_this.content === undefined)
                            _this.content = null;
                        (function () {
                            if (!file_5.exists()) {
                                throw new java.io.FileNotFoundException();
                            }
                            _this.file = file_5;
                            _this.append = append_1;
                            _this.entry = java.io.LocalStorageFileSystem.fs_$LI$().getEntry(file_5.getAbsolutePath());
                            _this.content = append_1 ? (_this.entry.data).split('').map(function (s) { return s.charCodeAt(0); }) : [];
                        })();
                    }
                }
                else if (((name != null && name instanceof java.io.File) || name === null) && append === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    var file_6 = __args[0];
                    {
                        var __args_4 = Array.prototype.slice.call(arguments);
                        var append_2 = false;
                        _this = _super.call(this) || this;
                        if (_this.append === undefined)
                            _this.append = false;
                        if (_this.file === undefined)
                            _this.file = null;
                        if (_this.entry === undefined)
                            _this.entry = null;
                        if (_this.content === undefined)
                            _this.content = null;
                        if (_this.append === undefined)
                            _this.append = false;
                        if (_this.file === undefined)
                            _this.file = null;
                        if (_this.entry === undefined)
                            _this.entry = null;
                        if (_this.content === undefined)
                            _this.content = null;
                        (function () {
                            if (!file_6.exists()) {
                                throw new java.io.FileNotFoundException();
                            }
                            _this.file = file_6;
                            _this.append = append_2;
                            _this.entry = java.io.LocalStorageFileSystem.fs_$LI$().getEntry(file_6.getAbsolutePath());
                            _this.content = append_2 ? (_this.entry.data).split('').map(function (s) { return s.charCodeAt(0); }) : [];
                        })();
                    }
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            /*private*/ FileOutputStream.prototype.write$int$boolean = function (b, append) {
                (this.content).push((b | 0));
            };
            FileOutputStream.prototype.write$int = function (b) {
                this.write$int$boolean(b, this.append);
            };
            /*private*/ FileOutputStream.prototype.writeBytes = function (b, off, len, append) {
                for (var i = off; i < off + len; i++) {
                    (this.content).push(b[i]);
                }
                ;
            };
            FileOutputStream.prototype.write$byte_A = function (b) {
                this.writeBytes(b, 0, b.length, this.append);
            };
            FileOutputStream.prototype.write$byte_A$int$int = function (b, off, len) {
                this.writeBytes(b, off, len, this.append);
            };
            FileOutputStream.prototype.write = function (b, off, len) {
                if (((b != null && b instanceof Array && (b.length == 0 || b[0] == null || (typeof b[0] === 'number'))) || b === null) && ((typeof off === 'number') || off === null) && ((typeof len === 'number') || len === null)) {
                    return this.write$byte_A$int$int(b, off, len);
                }
                else if (((typeof b === 'number') || b === null) && ((typeof off === 'boolean') || off === null) && len === undefined) {
                    return this.write$int$boolean(b, off);
                }
                else if (((b != null && b instanceof Array && (b.length == 0 || b[0] == null || (typeof b[0] === 'number'))) || b === null) && off === undefined && len === undefined) {
                    return this.write$byte_A(b);
                }
                else if (((typeof b === 'number') || b === null) && off === undefined && len === undefined) {
                    return this.write$int(b);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             *
             */
            FileOutputStream.prototype.flush = function () {
                this.entry.data = btoa(((this.content).map(function (b, __, ___) {
                    return String.fromCharCode(b);
                }).join("")));
                java.io.LocalStorageFileSystem.fs_$LI$().putEntry(this.file.getAbsolutePath(), this.entry);
            };
            FileOutputStream.prototype.close = function () {
                this.flush();
            };
            return FileOutputStream;
        }(java.io.OutputStream));
        io.FileOutputStream = FileOutputStream;
        FileOutputStream["__class"] = "java.io.FileOutputStream";
        FileOutputStream["__interfaces"] = ["java.io.Closeable", "java.lang.AutoCloseable", "java.io.Flushable"];
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
(function (java) {
    var io;
    (function (io) {
        /**
         * JSweet implementation.
         * @param {string} fileName
         * @class
         * @extends java.io.InputStreamReader
         */
        var FileReader = (function (_super) {
            __extends(FileReader, _super);
            function FileReader(fileName) {
                var _this = this;
                if (((typeof fileName === 'string') || fileName === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this, new java.io.FileInputStream(fileName)) || this;
                }
                else if (((fileName != null && fileName instanceof java.io.File) || fileName === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    var file = __args[0];
                    _this = _super.call(this, new java.io.FileInputStream(file)) || this;
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            return FileReader;
        }(java.io.InputStreamReader));
        io.FileReader = FileReader;
        FileReader["__class"] = "java.io.FileReader";
        FileReader["__interfaces"] = ["java.io.Closeable", "java.lang.Readable", "java.lang.AutoCloseable"];
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
(function (java) {
    var io;
    (function (io) {
        /**
         * JSweet implementation.
         * @param {string} s
         * @class
         * @extends java.io.IOException
         */
        var FileNotFoundException = (function (_super) {
            __extends(FileNotFoundException, _super);
            function FileNotFoundException(s) {
                var _this = this;
                if (((typeof s === 'string') || s === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this, s) || this;
                    Object.setPrototypeOf(_this, FileNotFoundException.prototype);
                }
                else if (s === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this) || this;
                    Object.setPrototypeOf(_this, FileNotFoundException.prototype);
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            return FileNotFoundException;
        }(java.io.IOException));
        FileNotFoundException.serialVersionUID = -897856973823710492;
        io.FileNotFoundException = FileNotFoundException;
        FileNotFoundException["__class"] = "java.io.FileNotFoundException";
        FileNotFoundException["__interfaces"] = ["java.io.Serializable"];
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
(function (java) {
    var io;
    (function (io) {
        /**
         * JSweet implementation.
         * @param {string} fileName
         * @param {boolean} append
         * @class
         * @extends java.io.OutputStreamWriter
         */
        var FileWriter = (function (_super) {
            __extends(FileWriter, _super);
            function FileWriter(fileName, append) {
                var _this = this;
                if (((typeof fileName === 'string') || fileName === null) && ((typeof append === 'boolean') || append === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this, new java.io.FileOutputStream(fileName, append)) || this;
                }
                else if (((fileName != null && fileName instanceof java.io.File) || fileName === null) && ((typeof append === 'boolean') || append === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    var file = __args[0];
                    _this = _super.call(this, new java.io.FileOutputStream(file, append)) || this;
                }
                else if (((typeof fileName === 'string') || fileName === null) && append === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this, new java.io.FileOutputStream(fileName)) || this;
                }
                else if (((fileName != null && fileName instanceof java.io.File) || fileName === null) && append === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    var file = __args[0];
                    _this = _super.call(this, new java.io.FileOutputStream(file)) || this;
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            return FileWriter;
        }(java.io.OutputStreamWriter));
        io.FileWriter = FileWriter;
        FileWriter["__class"] = "java.io.FileWriter";
        FileWriter["__interfaces"] = ["java.lang.Appendable", "java.io.Closeable", "java.lang.AutoCloseable", "java.io.Flushable"];
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
(function (java) {
    var io;
    (function (io) {
        var LocalStorageFileSystem = (function (_super) {
            __extends(LocalStorageFileSystem, _super);
            function LocalStorageFileSystem() {
                var _this = _super.call(this) || this;
                /*private*/ _this.PREFIX = "LSFS://";
                if (_this.roots === undefined)
                    _this.roots = null;
                return _this;
            }
            LocalStorageFileSystem.fs_$LI$ = function () { if (LocalStorageFileSystem.fs == null)
                LocalStorageFileSystem.fs = new LocalStorageFileSystem(); return LocalStorageFileSystem.fs; };
            ;
            /**
             *
             * @return {string}
             */
            LocalStorageFileSystem.prototype.getSeparator = function () {
                return '/';
            };
            /**
             *
             * @return {string}
             */
            LocalStorageFileSystem.prototype.getPathSeparator = function () {
                return ':';
            };
            LocalStorageFileSystem.prototype.normalize$java_lang_String$int$int = function (pathname, len, off) {
                if (len === 0)
                    return pathname;
                var n = len;
                while (((n > 0) && ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(pathname.charAt(n - 1)) == '/'.charCodeAt(0))))
                    n--;
                if (n === 0)
                    return "/";
                var sb = new java.lang.StringBuffer(pathname.length);
                if (off > 0)
                    sb.append(pathname.substring(0, off));
                var prevChar = String.fromCharCode(0);
                for (var i = off; i < n; i++) {
                    var c = pathname.charAt(i);
                    if (((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(prevChar) == '/'.charCodeAt(0)) && ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) == '/'.charCodeAt(0)))
                        continue;
                    sb.append(c);
                    prevChar = c;
                }
                ;
                return sb.toString();
            };
            LocalStorageFileSystem.prototype.normalize = function (pathname, len, off) {
                if (((typeof pathname === 'string') || pathname === null) && ((typeof len === 'number') || len === null) && ((typeof off === 'number') || off === null)) {
                    return this.normalize$java_lang_String$int$int(pathname, len, off);
                }
                else if (((typeof pathname === 'string') || pathname === null) && len === undefined && off === undefined) {
                    return this.normalize$java_lang_String(pathname);
                }
                else
                    throw new Error('invalid overload');
            };
            LocalStorageFileSystem.prototype.normalize$java_lang_String = function (pathname) {
                var n = pathname.length;
                var prevChar = String.fromCharCode(0);
                for (var i = 0; i < n; i++) {
                    var c = pathname.charAt(i);
                    if (((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(prevChar) == '/'.charCodeAt(0)) && ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) == '/'.charCodeAt(0)))
                        return this.normalize$java_lang_String$int$int(pathname, n, i - 1);
                    prevChar = c;
                }
                ;
                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(prevChar) == '/'.charCodeAt(0))
                    return this.normalize$java_lang_String$int$int(pathname, n, n - 1);
                return pathname;
            };
            /**
             *
             * @param {string} pathname
             * @return {number}
             */
            LocalStorageFileSystem.prototype.prefixLength = function (pathname) {
                if (pathname.length === 0)
                    return 0;
                return ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(pathname.charAt(0)) == '/'.charCodeAt(0)) ? 1 : 0;
            };
            LocalStorageFileSystem.prototype.resolve$java_lang_String$java_lang_String = function (parent, child) {
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(child, ""))
                    return parent;
                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(child.charAt(0)) == '/'.charCodeAt(0)) {
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(parent, "/"))
                        return child;
                    return parent + child;
                }
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(parent, "/"))
                    return parent + child;
                return parent + '/' + child;
            };
            /**
             *
             * @param {string} parent
             * @param {string} child
             * @return {string}
             */
            LocalStorageFileSystem.prototype.resolve = function (parent, child) {
                if (((typeof parent === 'string') || parent === null) && ((typeof child === 'string') || child === null)) {
                    return this.resolve$java_lang_String$java_lang_String(parent, child);
                }
                else if (((parent != null && parent instanceof java.io.File) || parent === null) && child === undefined) {
                    return this.resolve$java_io_File(parent);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             *
             * @return {string}
             */
            LocalStorageFileSystem.prototype.getDefaultParent = function () {
                return "/";
            };
            /**
             *
             * @param {string} path
             * @return {string}
             */
            LocalStorageFileSystem.prototype.fromURIPath = function (path) {
                var p = path;
                if ((function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(p, "/") && (p.length > 1)) {
                    p = p.substring(0, p.length - 1);
                }
                return p;
            };
            /**
             *
             * @param {java.io.File} f
             * @return {boolean}
             */
            LocalStorageFileSystem.prototype.isAbsolute = function (f) {
                return (f.getPrefixLength() !== 0);
            };
            LocalStorageFileSystem.prototype.resolve$java_io_File = function (f) {
                if (this.isAbsolute(f))
                    return f.getPath();
                return this.resolve$java_lang_String$java_lang_String(java.lang.System.getProperty("user.dir"), f.getPath());
            };
            /**
             *
             * @param {string} path
             * @return {string}
             */
            LocalStorageFileSystem.prototype.canonicalize = function (path) {
                return this.normalize$java_lang_String(path);
            };
            /**
             *
             * @param {java.io.File} f
             * @return {number}
             */
            LocalStorageFileSystem.prototype.getBooleanAttributes = function (f) {
                var e = this.getEntry(f.getAbsolutePath());
                return e == null ? 0 : e.attributes;
            };
            /**
             *
             * @param {java.io.File} f
             * @param {number} access
             * @return {boolean}
             */
            LocalStorageFileSystem.prototype.checkAccess = function (f, access) {
                return (this.getEntry(f.getAbsolutePath()).access & access) !== 0;
            };
            /**
             *
             * @param {java.io.File} f
             * @param {number} access
             * @param {boolean} enable
             * @param {boolean} owneronly
             * @return {boolean}
             */
            LocalStorageFileSystem.prototype.setPermission = function (f, access, enable, owneronly) {
                return false;
            };
            /**
             *
             * @param {java.io.File} f
             * @return {number}
             */
            LocalStorageFileSystem.prototype.getLastModifiedTime = function (f) {
                return this.getEntry(f.getAbsolutePath()).lastModifiedTime;
            };
            /**
             *
             * @param {java.io.File} f
             * @return {number}
             */
            LocalStorageFileSystem.prototype.getLength = function (f) {
                return this.getEntry(f.getAbsolutePath()).length;
            };
            LocalStorageFileSystem.prototype.clear = function () {
                for (var i = 0; i < localStorage.length; i++) {
                    var key = localStorage.key(i);
                    if ((function (str, searchString, position) {
                        if (position === void 0) { position = 0; }
                        return str.substr(position, searchString.length) === searchString;
                    })(key, this.PREFIX)) {
                        localStorage.removeItem(key);
                    }
                }
                ;
            };
            LocalStorageFileSystem.prototype.getKey = function (pathname) {
                return this.PREFIX + pathname;
            };
            LocalStorageFileSystem.prototype.createFileEntry = function (pathname) {
                var f = new java.io.File(pathname);
                pathname = f.getAbsolutePath();
                if (this.hasEntry(pathname)) {
                    return null;
                }
                var parent = f.getParentFile();
                if (parent != null) {
                    var parentPath = parent.getAbsolutePath();
                    var directoryEntry = this.getDirectoryEntry(parentPath);
                    if (directoryEntry == null) {
                        throw new java.io.IOException("directory does not exist: " + parentPath);
                    }
                    var entries = directoryEntry.entries;
                    entries.push(f.getName());
                    this.putEntry(parentPath, directoryEntry);
                }
                var e;
                this.putEntry(pathname, e = Object.defineProperty({
                    lastModifiedTime: java.lang.System.currentTimeMillis(),
                    length: 0,
                    data: "",
                    attributes: java.io.FileSystem.BA_EXISTS | java.io.FileSystem.BA_REGULAR,
                    access: java.io.FileSystem.ACCESS_READ | java.io.FileSystem.ACCESS_WRITE
                }, '__interfaces', { configurable: true, value: ["java.io.LocalStorageFileSystem.Entry"] }));
                return e;
            };
            /**
             *
             * @param {string} pathname
             * @return {boolean}
             */
            LocalStorageFileSystem.prototype.createFileExclusively = function (pathname) {
                var e = this.createFileEntry(pathname);
                return e != null;
            };
            LocalStorageFileSystem.prototype.hasEntry = function (pathname) {
                return localStorage.getItem(this.getKey(pathname)) != null;
            };
            LocalStorageFileSystem.prototype.getEntry = function (pathname) {
                return JSON.parse(localStorage.getItem(this.getKey(pathname)));
            };
            LocalStorageFileSystem.prototype.getDirectoryEntry = function (pathname) {
                return JSON.parse(localStorage.getItem(this.getKey(pathname)));
            };
            LocalStorageFileSystem.prototype.putEntry = function (pathname, entry) {
                localStorage.setItem(this.getKey(pathname), JSON.stringify(entry));
            };
            LocalStorageFileSystem.prototype.getChildEntries = function (pathname) {
                var directoryEntry = this.getDirectoryEntry(pathname);
                if (directoryEntry != null) {
                    return directoryEntry.entries;
                }
                else {
                    return (new Array());
                }
            };
            LocalStorageFileSystem.prototype.removeEntry = function (pathname) {
                {
                    var array122 = this.getChildEntries(pathname);
                    for (var index121 = 0; index121 < array122.length; index121++) {
                        var e = array122[index121];
                        {
                            this.removeEntry(pathname + "/" + e);
                        }
                    }
                }
                localStorage.removeItem(this.getKey(pathname));
            };
            /**
             *
             * @param {java.io.File} f
             * @return {boolean}
             */
            LocalStorageFileSystem.prototype["delete"] = function (f) {
                if (this.hasEntry(f.getAbsolutePath())) {
                    this.removeEntry(f.getAbsolutePath());
                    var parentPath = f.getParentFile().getAbsolutePath();
                    var directoryEntry = this.getDirectoryEntry(parentPath);
                    var entries = directoryEntry.entries;
                    directoryEntry.entries = entries.splice(entries.indexOf(f.getName()), 1);
                    this.putEntry(parentPath, directoryEntry);
                    return true;
                }
                return false;
            };
            /**
             *
             * @param {java.io.File} f
             * @return {Array}
             */
            LocalStorageFileSystem.prototype.list = function (f) {
                return this.getChildEntries(f.getAbsolutePath());
            };
            /**
             *
             * @param {java.io.File} f
             * @return {boolean}
             */
            LocalStorageFileSystem.prototype.createDirectory = function (f) {
                if (this.hasEntry(f.getAbsolutePath())) {
                    return false;
                }
                var parent = f.getParentFile();
                if (parent != null) {
                    var parentPath = parent.getAbsolutePath();
                    var directoryEntry = this.getDirectoryEntry(parentPath);
                    if (directoryEntry == null) {
                        return false;
                    }
                    var entries = directoryEntry.entries;
                    entries.push(f.getName());
                    this.putEntry(parentPath, directoryEntry);
                }
                this.putEntry(f.getAbsolutePath(), Object.defineProperty({
                    attributes: java.io.FileSystem.BA_DIRECTORY | java.io.FileSystem.BA_EXISTS,
                    access: java.io.FileSystem.ACCESS_READ | java.io.FileSystem.ACCESS_WRITE,
                    entries: []
                }, '__interfaces', { configurable: true, value: ["java.io.LocalStorageFileSystem.DirectoryEntry", "java.io.LocalStorageFileSystem.Entry"] }));
                return true;
            };
            /**
             *
             * @param {java.io.File} f1
             * @param {java.io.File} f2
             * @return {boolean}
             */
            LocalStorageFileSystem.prototype.rename = function (f1, f2) {
                var e1 = this.getEntry(f1.getAbsolutePath());
                var e2 = this.getEntry(f2.getAbsolutePath());
                if (e1 == null || e2 != null) {
                    return false;
                }
                this["delete"](f1);
                try {
                    this.createFileExclusively(f2.getAbsolutePath());
                }
                catch (e) {
                    return false;
                }
                ;
                this.putEntry(f2.getAbsolutePath(), e1);
                return true;
            };
            /**
             *
             * @param {java.io.File} f
             * @param {number} time
             * @return {boolean}
             */
            LocalStorageFileSystem.prototype.setLastModifiedTime = function (f, time) {
                var e = this.getEntry(f.getAbsolutePath());
                if (e != null) {
                    e.lastModifiedTime = time;
                    return true;
                }
                else {
                    return false;
                }
            };
            /**
             *
             * @param {java.io.File} f
             * @return {boolean}
             */
            LocalStorageFileSystem.prototype.setReadOnly = function (f) {
                this.getEntry(f.getAbsolutePath()).access &= ~java.io.FileSystem.ACCESS_WRITE;
                return true;
            };
            /**
             *
             * @return {Array}
             */
            LocalStorageFileSystem.prototype.listRoots = function () {
                if (this.roots == null) {
                    this.roots = [new java.io.File("/")];
                }
                return this.roots;
            };
            /**
             *
             * @param {java.io.File} f
             * @param {number} t
             * @return {number}
             */
            LocalStorageFileSystem.prototype.getSpace = function (f, t) {
                return 0;
            };
            /**
             *
             * @param {java.io.File} f1
             * @param {java.io.File} f2
             * @return {number}
             */
            LocalStorageFileSystem.prototype.compare = function (f1, f2) {
                return f1.getAbsolutePath().localeCompare(f2.getAbsolutePath());
            };
            /**
             *
             * @param {java.io.File} f
             * @return {number}
             */
            LocalStorageFileSystem.prototype.hashCode = function (f) {
                return (function (o) { if (o.hashCode) {
                    return o.hashCode();
                }
                else {
                    return o.toString();
                } })(f.getAbsolutePath());
            };
            return LocalStorageFileSystem;
        }(java.io.FileSystem));
        io.LocalStorageFileSystem = LocalStorageFileSystem;
        LocalStorageFileSystem["__class"] = "java.io.LocalStorageFileSystem";
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
(function (java) {
    var io;
    (function (io) {
        /**
         * JSweet implementation for file.
         * @param {string} parent
         * @param {string} child
         * @class
         */
        var File = (function () {
            function File(parent, child, direct) {
                var _this = this;
                /*private*/ this.status = null;
                if (((parent != null && parent instanceof java.io.File) || parent === null) && ((typeof child === 'string') || child === null) && ((typeof direct === 'boolean') || direct === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    if (this.path === undefined)
                        this.path = null;
                    if (this.prefixLength === undefined)
                        this.prefixLength = 0;
                    this.status = null;
                    if (this.path === undefined)
                        this.path = null;
                    if (this.prefixLength === undefined)
                        this.prefixLength = 0;
                    (function () {
                        _this.path = java.io.LocalStorageFileSystem.fs_$LI$().resolve$java_lang_String$java_lang_String(parent.path, child);
                        _this.prefixLength = parent.prefixLength;
                    })();
                }
                else if (((typeof parent === 'string') || parent === null) && ((typeof child === 'string') || child === null) && direct === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    if (this.path === undefined)
                        this.path = null;
                    if (this.prefixLength === undefined)
                        this.prefixLength = 0;
                    this.status = null;
                    if (this.path === undefined)
                        this.path = null;
                    if (this.prefixLength === undefined)
                        this.prefixLength = 0;
                    (function () {
                        if (child == null) {
                            throw new java.lang.NullPointerException();
                        }
                        if (parent != null) {
                            if ((function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(parent, "")) {
                                _this.path = java.io.LocalStorageFileSystem.fs_$LI$().resolve$java_lang_String$java_lang_String(java.io.LocalStorageFileSystem.fs_$LI$().getDefaultParent(), java.io.LocalStorageFileSystem.fs_$LI$().normalize$java_lang_String(child));
                            }
                            else {
                                _this.path = java.io.LocalStorageFileSystem.fs_$LI$().resolve$java_lang_String$java_lang_String(java.io.LocalStorageFileSystem.fs_$LI$().normalize$java_lang_String(parent), java.io.LocalStorageFileSystem.fs_$LI$().normalize$java_lang_String(child));
                            }
                        }
                        else {
                            _this.path = java.io.LocalStorageFileSystem.fs_$LI$().normalize$java_lang_String(child);
                        }
                        _this.prefixLength = java.io.LocalStorageFileSystem.fs_$LI$().prefixLength(_this.path);
                    })();
                }
                else if (((parent != null && parent instanceof java.io.File) || parent === null) && ((typeof child === 'string') || child === null) && direct === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    if (this.path === undefined)
                        this.path = null;
                    if (this.prefixLength === undefined)
                        this.prefixLength = 0;
                    this.status = null;
                    if (this.path === undefined)
                        this.path = null;
                    if (this.prefixLength === undefined)
                        this.prefixLength = 0;
                    (function () {
                        if (child == null) {
                            throw new java.lang.NullPointerException();
                        }
                        if (parent != null) {
                            if ((function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(parent.path, "")) {
                                _this.path = java.io.LocalStorageFileSystem.fs_$LI$().resolve$java_lang_String$java_lang_String(java.io.LocalStorageFileSystem.fs_$LI$().getDefaultParent(), java.io.LocalStorageFileSystem.fs_$LI$().normalize$java_lang_String(child));
                            }
                            else {
                                _this.path = java.io.LocalStorageFileSystem.fs_$LI$().resolve$java_lang_String$java_lang_String(parent.path, java.io.LocalStorageFileSystem.fs_$LI$().normalize$java_lang_String(child));
                            }
                        }
                        else {
                            _this.path = java.io.LocalStorageFileSystem.fs_$LI$().normalize$java_lang_String(child);
                        }
                        _this.prefixLength = java.io.LocalStorageFileSystem.fs_$LI$().prefixLength(_this.path);
                    })();
                }
                else if (((typeof parent === 'string') || parent === null) && ((typeof child === 'number') || child === null) && direct === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    var pathname_1 = __args[0];
                    var prefixLength_1 = __args[1];
                    if (this.path === undefined)
                        this.path = null;
                    if (this.prefixLength === undefined)
                        this.prefixLength = 0;
                    this.status = null;
                    if (this.path === undefined)
                        this.path = null;
                    if (this.prefixLength === undefined)
                        this.prefixLength = 0;
                    (function () {
                        _this.path = pathname_1;
                        _this.prefixLength = prefixLength_1;
                    })();
                }
                else if (((typeof parent === 'string') || parent === null) && child === undefined && direct === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    var pathname_2 = __args[0];
                    if (this.path === undefined)
                        this.path = null;
                    if (this.prefixLength === undefined)
                        this.prefixLength = 0;
                    this.status = null;
                    if (this.path === undefined)
                        this.path = null;
                    if (this.prefixLength === undefined)
                        this.prefixLength = 0;
                    (function () {
                        if (pathname_2 == null) {
                            throw new java.lang.NullPointerException();
                        }
                        _this.path = java.io.LocalStorageFileSystem.fs_$LI$().normalize$java_lang_String(pathname_2);
                        _this.prefixLength = java.io.LocalStorageFileSystem.fs_$LI$().prefixLength(_this.path);
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            File.prototype.isInvalid = function () {
                if (this.status == null) {
                    this.status = (this.path.indexOf('\u0000') < 0) ? File.PathStatus.CHECKED : File.PathStatus.INVALID;
                }
                return this.status === File.PathStatus.INVALID;
            };
            File.prototype.getPrefixLength = function () {
                return this.prefixLength;
            };
            File.separatorChar_$LI$ = function () { if (File.separatorChar == null)
                File.separatorChar = java.io.LocalStorageFileSystem.fs_$LI$().getSeparator(); return File.separatorChar; };
            ;
            File.separator_$LI$ = function () { if (File.separator == null)
                File.separator = "" + File.separatorChar_$LI$(); return File.separator; };
            ;
            File.pathSeparatorChar_$LI$ = function () { if (File.pathSeparatorChar == null)
                File.pathSeparatorChar = java.io.LocalStorageFileSystem.fs_$LI$().getPathSeparator(); return File.pathSeparatorChar; };
            ;
            File.pathSeparator_$LI$ = function () { if (File.pathSeparator == null)
                File.pathSeparator = "" + File.pathSeparatorChar_$LI$(); return File.pathSeparator; };
            ;
            File.prototype.getName = function () {
                var index = this.path.lastIndexOf(File.separatorChar_$LI$());
                if (index < this.prefixLength)
                    return this.path.substring(this.prefixLength);
                return this.path.substring(index + 1);
            };
            File.prototype.getParent = function () {
                var index = this.path.lastIndexOf(File.separatorChar_$LI$());
                if (index < this.prefixLength) {
                    if ((this.prefixLength > 0) && (this.path.length > this.prefixLength))
                        return this.path.substring(0, this.prefixLength);
                    return null;
                }
                return this.path.substring(0, index);
            };
            File.prototype.getParentFile = function () {
                var p = this.getParent();
                if (p == null)
                    return null;
                return new File(p, this.prefixLength);
            };
            File.prototype.getPath = function () {
                return this.path;
            };
            File.prototype.isAbsolute = function () {
                return java.io.LocalStorageFileSystem.fs_$LI$().isAbsolute(this);
            };
            File.prototype.getAbsolutePath = function () {
                return java.io.LocalStorageFileSystem.fs_$LI$().resolve$java_io_File(this);
            };
            File.prototype.getAbsoluteFile = function () {
                var absPath = this.getAbsolutePath();
                return new File(absPath, java.io.LocalStorageFileSystem.fs_$LI$().prefixLength(absPath));
            };
            File.prototype.getCanonicalPath = function () {
                if (this.isInvalid()) {
                    throw new java.io.IOException("Invalid file path");
                }
                return java.io.LocalStorageFileSystem.fs_$LI$().canonicalize(java.io.LocalStorageFileSystem.fs_$LI$().resolve$java_io_File(this));
            };
            File.prototype.getCanonicalFile = function () {
                var canonPath = this.getCanonicalPath();
                return new File(canonPath, java.io.LocalStorageFileSystem.fs_$LI$().prefixLength(canonPath));
            };
            File.slashify = function (path, isDirectory) {
                var p = path;
                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(File.separatorChar_$LI$()) != '/'.charCodeAt(0))
                    p = p.split(File.separatorChar_$LI$()).join('/');
                if (!(function (str, searchString, position) {
                    if (position === void 0) { position = 0; }
                    return str.substr(position, searchString.length) === searchString;
                })(p, "/"))
                    p = "/" + p;
                if (!(function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(p, "/") && isDirectory)
                    p = p + "/";
                return p;
            };
            File.prototype.canRead = function () {
                if (this.isInvalid()) {
                    return false;
                }
                return java.io.LocalStorageFileSystem.fs_$LI$().checkAccess(this, java.io.FileSystem.ACCESS_READ);
            };
            File.prototype.canWrite = function () {
                if (this.isInvalid()) {
                    return false;
                }
                return java.io.LocalStorageFileSystem.fs_$LI$().checkAccess(this, java.io.FileSystem.ACCESS_WRITE);
            };
            File.prototype.exists = function () {
                if (this.isInvalid()) {
                    return false;
                }
                return ((java.io.LocalStorageFileSystem.fs_$LI$().getBooleanAttributes(this) & java.io.FileSystem.BA_EXISTS) !== 0);
            };
            File.prototype.isDirectory = function () {
                if (this.isInvalid()) {
                    return false;
                }
                return ((java.io.LocalStorageFileSystem.fs_$LI$().getBooleanAttributes(this) & java.io.FileSystem.BA_DIRECTORY) !== 0);
            };
            File.prototype.isFile = function () {
                if (this.isInvalid()) {
                    return false;
                }
                return ((java.io.LocalStorageFileSystem.fs_$LI$().getBooleanAttributes(this) & java.io.FileSystem.BA_REGULAR) !== 0);
            };
            File.prototype.isHidden = function () {
                if (this.isInvalid()) {
                    return false;
                }
                return ((java.io.LocalStorageFileSystem.fs_$LI$().getBooleanAttributes(this) & java.io.FileSystem.BA_HIDDEN) !== 0);
            };
            File.prototype.lastModified = function () {
                if (this.isInvalid()) {
                    return 0;
                }
                return java.io.LocalStorageFileSystem.fs_$LI$().getLastModifiedTime(this);
            };
            File.prototype.length = function () {
                if (this.isInvalid()) {
                    return 0;
                }
                return java.io.LocalStorageFileSystem.fs_$LI$().getLength(this);
            };
            File.prototype.createNewFile = function () {
                if (this.isInvalid()) {
                    throw new java.io.IOException("Invalid file path");
                }
                return java.io.LocalStorageFileSystem.fs_$LI$().createFileExclusively(this.path);
            };
            File.prototype["delete"] = function () {
                if (this.isInvalid()) {
                    return false;
                }
                return java.io.LocalStorageFileSystem.fs_$LI$()["delete"](this);
            };
            File.prototype.list$ = function () {
                if (this.isInvalid()) {
                    return null;
                }
                return java.io.LocalStorageFileSystem.fs_$LI$().list(this);
            };
            File.prototype.list$java_io_FilenameFilter = function (filter) {
                var names = this.list();
                if ((names == null) || (filter == null)) {
                    return names;
                }
                var v = (new java.util.ArrayList());
                for (var i = 0; i < names.length; i++) {
                    if (filter(this, names[i])) {
                        v.add(names[i]);
                    }
                }
                ;
                return v.toArray((function (s) { var a = []; while (s-- > 0)
                    a.push(null); return a; })(v.size()));
            };
            File.prototype.list = function (filter) {
                if (((typeof filter === 'function' && filter.length == 2) || filter === null)) {
                    return this.list$java_io_FilenameFilter(filter);
                }
                else if (filter === undefined) {
                    return this.list$();
                }
                else
                    throw new Error('invalid overload');
            };
            File.prototype.listFiles$ = function () {
                var ss = this.list();
                if (ss == null)
                    return null;
                var n = ss.length;
                var fs = (function (s) { var a = []; while (s-- > 0)
                    a.push(null); return a; })(n);
                for (var i = 0; i < n; i++) {
                    fs[i] = new File(this, ss[i], true);
                }
                ;
                return fs;
            };
            File.prototype.listFiles$java_io_FilenameFilter = function (filter) {
                var ss = this.list();
                if (ss == null)
                    return null;
                var files = (new java.util.ArrayList());
                for (var index123 = 0; index123 < ss.length; index123++) {
                    var s = ss[index123];
                    if ((filter == null) || filter(this, s))
                        files.add(new File(this, s, true));
                }
                return files.toArray((function (s) { var a = []; while (s-- > 0)
                    a.push(null); return a; })(files.size()));
            };
            File.prototype.listFiles = function (filter) {
                if (((typeof filter === 'function' && filter.length == 2) || filter === null)) {
                    return this.listFiles$java_io_FilenameFilter(filter);
                }
                else if (((typeof filter === 'function' && filter.length == 1) || filter === null)) {
                    return this.listFiles$java_io_FileFilter(filter);
                }
                else if (filter === undefined) {
                    return this.listFiles$();
                }
                else
                    throw new Error('invalid overload');
            };
            File.prototype.listFiles$java_io_FileFilter = function (filter) {
                var ss = this.list();
                if (ss == null)
                    return null;
                var files = (new java.util.ArrayList());
                for (var index124 = 0; index124 < ss.length; index124++) {
                    var s = ss[index124];
                    {
                        var f = new File(this, s, true);
                        if ((filter == null) || filter(f))
                            files.add(f);
                    }
                }
                return files.toArray((function (s) { var a = []; while (s-- > 0)
                    a.push(null); return a; })(files.size()));
            };
            File.prototype.mkdir = function () {
                if (this.isInvalid()) {
                    return false;
                }
                return java.io.LocalStorageFileSystem.fs_$LI$().createDirectory(this);
            };
            File.prototype.mkdirs = function () {
                if (this.exists()) {
                    return false;
                }
                if (this.mkdir()) {
                    return true;
                }
                var canonFile = null;
                try {
                    canonFile = this.getCanonicalFile();
                }
                catch (e) {
                    return false;
                }
                ;
                var parent = canonFile.getParentFile();
                return (parent != null && (parent.mkdirs() || parent.exists()) && canonFile.mkdir());
            };
            File.prototype.renameTo = function (dest) {
                if (dest == null) {
                    throw new java.lang.NullPointerException();
                }
                if (this.isInvalid() || dest.isInvalid()) {
                    return false;
                }
                return java.io.LocalStorageFileSystem.fs_$LI$().rename(this, dest);
            };
            File.prototype.setLastModified = function (time) {
                if (time < 0)
                    throw new java.lang.IllegalArgumentException("Negative time");
                if (this.isInvalid()) {
                    return false;
                }
                return java.io.LocalStorageFileSystem.fs_$LI$().setLastModifiedTime(this, time);
            };
            File.prototype.setReadOnly = function () {
                if (this.isInvalid()) {
                    return false;
                }
                return java.io.LocalStorageFileSystem.fs_$LI$().setReadOnly(this);
            };
            File.prototype.setWritable$boolean$boolean = function (writable, ownerOnly) {
                if (this.isInvalid()) {
                    return false;
                }
                return java.io.LocalStorageFileSystem.fs_$LI$().setPermission(this, java.io.FileSystem.ACCESS_WRITE, writable, ownerOnly);
            };
            File.prototype.setWritable = function (writable, ownerOnly) {
                if (((typeof writable === 'boolean') || writable === null) && ((typeof ownerOnly === 'boolean') || ownerOnly === null)) {
                    return this.setWritable$boolean$boolean(writable, ownerOnly);
                }
                else if (((typeof writable === 'boolean') || writable === null) && ownerOnly === undefined) {
                    return this.setWritable$boolean(writable);
                }
                else
                    throw new Error('invalid overload');
            };
            File.prototype.setWritable$boolean = function (writable) {
                return this.setWritable$boolean$boolean(writable, true);
            };
            File.prototype.setReadable$boolean$boolean = function (readable, ownerOnly) {
                if (this.isInvalid()) {
                    return false;
                }
                return java.io.LocalStorageFileSystem.fs_$LI$().setPermission(this, java.io.FileSystem.ACCESS_READ, readable, ownerOnly);
            };
            File.prototype.setReadable = function (readable, ownerOnly) {
                if (((typeof readable === 'boolean') || readable === null) && ((typeof ownerOnly === 'boolean') || ownerOnly === null)) {
                    return this.setReadable$boolean$boolean(readable, ownerOnly);
                }
                else if (((typeof readable === 'boolean') || readable === null) && ownerOnly === undefined) {
                    return this.setReadable$boolean(readable);
                }
                else
                    throw new Error('invalid overload');
            };
            File.prototype.setReadable$boolean = function (readable) {
                return this.setReadable$boolean$boolean(readable, true);
            };
            File.prototype.setExecutable$boolean$boolean = function (executable, ownerOnly) {
                if (this.isInvalid()) {
                    return false;
                }
                return java.io.LocalStorageFileSystem.fs_$LI$().setPermission(this, java.io.FileSystem.ACCESS_EXECUTE, executable, ownerOnly);
            };
            File.prototype.setExecutable = function (executable, ownerOnly) {
                if (((typeof executable === 'boolean') || executable === null) && ((typeof ownerOnly === 'boolean') || ownerOnly === null)) {
                    return this.setExecutable$boolean$boolean(executable, ownerOnly);
                }
                else if (((typeof executable === 'boolean') || executable === null) && ownerOnly === undefined) {
                    return this.setExecutable$boolean(executable);
                }
                else
                    throw new Error('invalid overload');
            };
            File.prototype.setExecutable$boolean = function (executable) {
                return this.setExecutable$boolean$boolean(executable, true);
            };
            File.prototype.canExecute = function () {
                if (this.isInvalid()) {
                    return false;
                }
                return java.io.LocalStorageFileSystem.fs_$LI$().checkAccess(this, java.io.FileSystem.ACCESS_EXECUTE);
            };
            File.listRoots = function () {
                return java.io.LocalStorageFileSystem.fs_$LI$().listRoots();
            };
            File.prototype.getTotalSpace = function () {
                if (this.isInvalid()) {
                    return 0;
                }
                return java.io.LocalStorageFileSystem.fs_$LI$().getSpace(this, java.io.FileSystem.SPACE_TOTAL);
            };
            File.prototype.getFreeSpace = function () {
                if (this.isInvalid()) {
                    return 0;
                }
                return java.io.LocalStorageFileSystem.fs_$LI$().getSpace(this, java.io.FileSystem.SPACE_FREE);
            };
            File.prototype.getUsableSpace = function () {
                if (this.isInvalid()) {
                    return 0;
                }
                return java.io.LocalStorageFileSystem.fs_$LI$().getSpace(this, java.io.FileSystem.SPACE_USABLE);
            };
            File.createTempFile$java_lang_String$java_lang_String$java_io_File = function (prefix, suffix, directory) {
                if (prefix.length < 3)
                    throw new java.lang.IllegalArgumentException("Prefix string too short");
                if (suffix == null)
                    suffix = ".tmp";
                var tmpdir = (directory != null) ? directory : File.TempDirectory.location();
                var f;
                do {
                    f = File.TempDirectory.generateFile(prefix, suffix, tmpdir);
                } while (((java.io.LocalStorageFileSystem.fs_$LI$().getBooleanAttributes(f) & java.io.FileSystem.BA_EXISTS) !== 0));
                if (!java.io.LocalStorageFileSystem.fs_$LI$().createFileExclusively(f.getPath()))
                    throw new java.io.IOException("Unable to create temporary file");
                return f;
            };
            File.createTempFile = function (prefix, suffix, directory) {
                if (((typeof prefix === 'string') || prefix === null) && ((typeof suffix === 'string') || suffix === null) && ((directory != null && directory instanceof java.io.File) || directory === null)) {
                    return java.io.File.createTempFile$java_lang_String$java_lang_String$java_io_File(prefix, suffix, directory);
                }
                else if (((typeof prefix === 'string') || prefix === null) && ((typeof suffix === 'string') || suffix === null) && directory === undefined) {
                    return java.io.File.createTempFile$java_lang_String$java_lang_String(prefix, suffix);
                }
                else
                    throw new Error('invalid overload');
            };
            File.createTempFile$java_lang_String$java_lang_String = function (prefix, suffix) {
                return File.createTempFile$java_lang_String$java_lang_String$java_io_File(prefix, suffix, null);
            };
            File.prototype.compareTo = function (pathname) {
                return java.io.LocalStorageFileSystem.fs_$LI$().compare(this, pathname);
            };
            File.prototype.equals = function (obj) {
                if ((obj != null) && (obj != null && obj instanceof java.io.File)) {
                    return this.compareTo(obj) === 0;
                }
                return false;
            };
            File.prototype.hashCode = function () {
                return (function (o) { if (o.hashCode) {
                    return o.hashCode();
                }
                else {
                    return o.toString();
                } })(java.io.LocalStorageFileSystem.fs_$LI$());
            };
            File.prototype.toString = function () {
                return this.getPath();
            };
            return File;
        }());
        File.serialVersionUID = 301077366599181567;
        io.File = File;
        File["__class"] = "java.io.File";
        File["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
        (function (File) {
            var PathStatus;
            (function (PathStatus) {
                PathStatus[PathStatus["INVALID"] = 0] = "INVALID";
                PathStatus[PathStatus["CHECKED"] = 1] = "CHECKED";
            })(PathStatus = File.PathStatus || (File.PathStatus = {}));
            var TempDirectory = (function () {
                function TempDirectory() {
                }
                TempDirectory.tmpdir_$LI$ = function () { if (TempDirectory.tmpdir == null)
                    TempDirectory.tmpdir = new java.io.File(java.lang.System.getProperty("java.io.tmpdir")); return TempDirectory.tmpdir; };
                ;
                TempDirectory.location = function () {
                    return TempDirectory.tmpdir_$LI$();
                };
                TempDirectory.generateFile = function (prefix, suffix, dir) {
                    var n = Math.floor(Math.random()) * javaemul.internal.LongHelper.MAX_VALUE;
                    if (n === javaemul.internal.LongHelper.MIN_VALUE) {
                        n = 0;
                    }
                    else {
                        n = Math.abs(n);
                    }
                    prefix = (new java.io.File(prefix)).getName();
                    var name = prefix + ('' + (n)) + suffix;
                    var f = new java.io.File(dir, name);
                    if (!(function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(name, f.getName()) || f.isInvalid()) {
                        throw new java.io.IOException("Unable to create temporary file, " + f);
                    }
                    return f;
                };
                return TempDirectory;
            }());
            File.TempDirectory = TempDirectory;
            TempDirectory["__class"] = "java.io.File.TempDirectory";
        })(File = io.File || (io.File = {}));
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
java.io.File.TempDirectory.tmpdir_$LI$();
java.io.File.pathSeparator_$LI$();
java.io.File.pathSeparatorChar_$LI$();
java.io.File.separator_$LI$();
java.io.File.separatorChar_$LI$();
java.io.LocalStorageFileSystem.fs_$LI$();
java.io.FileSystem.__static_initialize();
