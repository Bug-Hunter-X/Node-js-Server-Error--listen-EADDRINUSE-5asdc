# Node.js Server Error: listen EADDRINUSE
This repository demonstrates a common error in Node.js server development: the `listen EADDRINUSE` error. This error occurs when you try to start a server on a port that is already being used by another process.

## Bug Description
The `bug.js` file contains a simple HTTP server that attempts to listen on port 8080. If another process (e.g., another Node.js server or a different application) is already using this port, the server will fail to start and throw the `listen EADDRINUSE` error.

## Solution
The `bugSolution.js` file demonstrates how to handle this error gracefully. It attempts to start the server on the specified port. If the port is already in use, it waits for a short period and then retries.  This retry mechanism ensures the server eventually starts if the port becomes available.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js`.  If the port is free this will start successfully. Otherwise you'll see the error. 
3. Run `node bugSolution.js`. This should successfully start the server after a short delay even if the port was in use initially.

## How to Solve
- **Check for other processes using the port:** Use tools like `netstat` (Linux/macOS) or `netstat -a -b` (Windows) to identify processes using the specified port.  If another process is using it, either stop the process or choose a different port.
- **Implement retry logic (as shown in `bugSolution.js`):**  This allows your server to gracefully handle the error and retry after a delay.
- **Use a port scanner:** To efficiently find a free port, consider using a port scanner library.