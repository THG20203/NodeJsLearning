/* in Node.js is used to import the File System (fs) module, which is a 
core Node.js module providing a lot of useful functionality to access 
and interact with the file system. */
const fs = require("fs");
/* another module - for networking capabilities */
const http = require("http");

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
    /* send back response to client - end method from res (tools dealing with res) */
    res.end("Hello from the server");
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

///////////////////////////////////////////////////////////////////
// How web really works
/* CLIENT (Browser) */ 
/* protocol = https */ 
/* domain name = google.com (nice name easy to memorise) */
/* resource = /maps */

/* Domain name google.com nneds to be converted to real address of the server, 
through a DNS (Domain Name Server) - special server - phone book of internet. 
This happens through ISP (internet Service Provider). */

/* https://216.58.211.206:443 */

/* https = protocol */
/* 216.58.211.206 = IP address */
/* :403 Port Number  - 443 for HTTPS, 80 for HTTP */

/* Once we have real address - TCP socket connection is established between
browser and server which are now finally connected. */
/* Make HTTP request to server - hyper text transfer protocol */
/* HTTP request is like a TCP connection - Communication protocol 
allows clients and web servers to communicate by sending request and response 
messages from client to server and back. */

/* HTTPS is encrypted */

/* The server */

// Front End vs Backend
/* Browser vs server */
/* Front end is in the web browser - final website visible to user. front end
HTML, CSS, JavaScript. Modern devs add React etc. */
/* Back end is server - everything invisible to user hence 'backend'. Server = 
computer connected to internet, stories files, and runs http server. 
http server = capable of understanding URL's, requests, delivering responses. */