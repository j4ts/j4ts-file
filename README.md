## Java File API for the Web

This is a [JSweet](http://www.jsweet.org) implementation of the Java File API using a LocalStorage implementation (LSFS)

This project allows the programmer to access an emulation of a file system implemented on the top of the LocalStorage WEB API. It can access the content using the Java File API, read and write new files within the browser, and import or export files to a regular file system.

## How does it work

The LocalStorage File System creates a directory/file structure in the browser's LocalStorage. It reads and writes file content by encoding and decoding binary data to Base64 strings. 

The file system can be imported from a JavaScript image file created with the [lsfs-sync](https://github.com/cincheo/lsfs-sync) utility.

Currently, there is no export feature, but it could be implemented on demand.

## License

Open Source Apache 2.