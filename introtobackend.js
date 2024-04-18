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
/* HTTP Server bridge between Front End and Backend. 
Simple server = static server, but if want to create dynamic web application 
that talks to databases - we use server capable of running dynamic applications.
This is called dynamic server. */
/* When building Dynamic apps, often use database. */

/* We'll use Node.js and MongoDB?? In this course */

// Static vs Dynamic vs Api

/* Static */
/* Developer uploads ready to use files onto web server - HTML, CSS, JavaScript */
/* No backend code, no application running */
/* JavaScript is not dynamic in the sense of being generated on servers. */

/* Dynamic */
/* rebuilt each time request for the server comes in. Server side rendering. */
/* Web Application = Dynamic website + Functionality */

/* API's */
/* building phase of website moved from backend to the frontend. 
In backend database, get data, json then into front end where templates are 
created and the website is built. */