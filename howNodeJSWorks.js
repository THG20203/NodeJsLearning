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