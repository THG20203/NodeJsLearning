const hello = "Hello World";
console.log(hello);

/* in Node.js is used to import the File System (fs) module, which is a 
core Node.js module providing a lot of useful functionality to access 
and interact with the file system. */
const fs = require("fs");

/* READING FILES */
/* takes two arguments, first path of file we're reading, also 
the character in coding */
/* reading data from file, returning it to us, save it in textIn variable */
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

/* WRITE TO FILES */

