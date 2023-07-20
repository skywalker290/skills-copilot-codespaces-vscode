// create web server
// Import required modules
const http = require('http');

// Define the hostname and port number for the server
const hostname = '127.0.0.1'; // Change this to your desired hostname or IP address
const port = 3000; // Change this to your desired port number

// Create the web server using the 'http' module
const server = http.createServer((req, res) => {
  // Handle incoming requests here
  res.statusCode = 200; // Status code for successful response
  res.setHeader('Content-Type', 'text/plain'); // Set the content type of the response
  res.end('Hello, World!'); // Response body, you can customize this message
});

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
