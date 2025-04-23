// Import the http module for creating the server
const http = require('http');
// Import the fs module for reading files
const fs = require('fs').promises;
const path = require('path');

// Define the port on which the server will listen
const port = 3000;

// Function to read a file and handle potential errors
async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath); // No especificar 'utf8' para archivos binarios como imágenes
        return data;
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return null;
    }
}

// Create the HTTP server
const server = http.createServer(async (req, res) => {
    // Determine the requested URL path
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html'; // Serve index.html by default for the root path
    }

    // Determine the content type based on the file extension
    let contentType = 'text/html';
    const extname = path.extname(filePath);
    switch (extname) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
        case '.jpeg':
            contentType = 'image/jpg';
            break;
        // Agrega más casos para otros tipos de imágenes si es necesario (gif, etc.)
    }

    // Read the requested file
    const fileContent = await readFile(filePath);

    if (fileContent) {
        // Set the content type in the response header
        res.writeHead(200, { 'Content-Type': contentType });
        // Send the content of the file to the client
        res.end(fileContent);
    } else {
        // If the file is not found, send a 404 response
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

// Start the server and listen on the defined port
server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});