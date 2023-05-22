const http = require('http');
const fs = require('fs');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
 
    response.statusCode = 200;
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            response.writeHead(404);
        } else {
            response.write(data);
        }

        response.end();
    })
};
 
const server = http.createServer(requestListener);
 
const port = 9000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});