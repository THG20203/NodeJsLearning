// Node, V8, Libuv

/* Node architecture = few libraries node depends on to work properly */ 
/* node runtime dependencies 
- v8 runtime engine - node is a javascript runtime 
- libuv - 
event loop - responsible for simple tasks - execution callbacks,
thread pool - for more heavy work - file access or compression. */

// Processes, Threads and Thread Pool
/* Node on a computer - node process running on computer - program in 
execution. node access to process variable. 
Node.js process - runs in single thread. 

thread = a sequence of instructions. node runs in one thread, makes it easy to block
a node application.  */

/* Single thread - process
- initialise program,
- execute top level code,
- require modules,
- register event callbacks, 
- start event loop  

event loop = where hard work is done in the app. 
event loop is heart of architecture - some tasks = too expnasive to do in 
the event loop. 

thread pool - provided to node.js by livum library. thread pool - 
gives us 4 additional threads. 

thread pool:
handles heavy expansive tasks 
- file system Api's
- Crypotography
- Compression
- DNS Lookups
*/

// Node.js Event Loop 
/* Event Loop - in single thread.
Event Loop = all application code that is inside callback functions 
(non top level code). 
Node.js is built around callback functions. 
Event-driven architecture:
- Events are emitted
- Event loops picks them up 
- Callbacks are called */

/* Event loop start right away 
event loop has callback queue - 
event loop has many phases - each has callback queue. 
1st phase - expired timer callbacks (such as timeout callbacks)

2nd phase - I/O polling and callbacks - 
I/O = I/O stands for Input Output
I/O means stuff like networking and file access.

3rd phase = setImmediate callbacks - 
For web server / web socket. 
*/

/* Then - any pending timers or I/O tasks? yes or no, go back through 
or exit program */

