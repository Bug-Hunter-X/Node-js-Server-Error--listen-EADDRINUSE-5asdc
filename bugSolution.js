const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

function startServer() {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

function retryStartServer(){
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, retrying in 1 second...`);
      setTimeout(startServer, 1000);
    } else {
      console.error(err);
    }
  });
}

retryStartServer();
startServer();