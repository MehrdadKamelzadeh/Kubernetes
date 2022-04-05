const http = require('http');
const os = require("os");

const hostname = os.hostname();

const server = http.createServer((req, res) => {
    res.end(`Program V1 ${hostname}`);
});

server.listen(3000, () => {
    console.log(`Server running ...`); 
});