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
