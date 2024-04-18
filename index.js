/* in Node.js is used to import the File System (fs) module, which is a 
core Node.js module providing a lot of useful functionality to access 
and interact with the file system. */
const fs = require("fs");
/* another module - for networking capabilities */
const http = require("http");
const url = require("url");

///////////////////////////////////////////////////////////////////////////////
// FILES

/* BLOCKING, SYNCHRONOUS WAY */

/* READING FILES */
/* takes two arguments, first path of file we're reading, also 
the character in coding */
/* reading data from file, returning it to us, save it in textIn variable */
/* const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

/* WRITE TO FILES */
/* first write out variable then output it. */
/* const textOut = `This is what we know about the avocado: ${textIn}. Created on ${Date.now()}`;
/* path to file and second what we want to write into that file */
/* fs.writeFileSync("./txt/output.txt", textOut); */
/* console.log("File written"); */

/* NON BLOCKING, ASYNCHRONOUS WAY */
/* reading file */
/* again, pass in path to file, file encoding = second argument 
pass in call back function as second argument. */
/* fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
    if (err) return console.log("ERROR");

    /* now going to read the content of read this txt */
    // fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => { 
       // console.log(data2);
        // fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
            //console.log(data3);
            /* second argument = what to write to the file. */
            /* \n is used as a newline character to add a line break in a string */
            /* in writeFile is no data to be read, so just an error argument */
            //fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", err => {
               // console.log("Your file has been written");
           // });
       // });
  //  });
// });
/* node js start reading file in the background, will not block code,
will move on to the next line of code. */
// console.log("will read file");

/////////////////////////////////////////////////////////////////////////////
// SERVER
/* 1). need to create server */
/* 2). need to start the server */

/* using method on http object (http module - just like we did with fs module) */
/* create server will accept a callback function - will be fired off each time 
new request hits our server. */
/* two important variables request and response */
const server = http.createServer((req, res) => {
    console.log(req.url); /* /favicon.ico and / -> callback happens twice */

    /* all we need is a big if/else statement */
    const pathName = req.url;

    if(pathName === "/" || pathName === "/overview") {
        /* send back response to client - end method from res (tools dealing with res) */
        res.end("This is the overview"); 
    } else if (pathName === "/product") {
        res.end("This is the product"); 
    } else if (pathName === "/api") {
        /* for now placeholder res.end */
        res.end("API");
   } else {
        /* adding in status code 404 */
        res.writeHead(404, {
            /* header we want to send - piece of info about response we are sending back */
            "Content-type": "text/html",
            /* made up header */
            "my-own-header": "Hello-world"
        });
        /* for any other cases - page not found. Cause got Content type html can now send <h1> */
        res.end("<h1>Page not found</h1>");
    }
});

/* listen method accept serveral arguments - port (sub address on host), host specified 
next - (don't need to, will default to local host, but going to do it anyway) */
/* first argument - port */
/* second argument - specifying host */
/* third argument - callback function for when server starts */
server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to requests on Port 8000");
})

/* http://127.0.0.1:8000/ put this into URL bar of chrome to check it worked. */

