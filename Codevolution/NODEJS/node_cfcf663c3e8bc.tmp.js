const http = require("node:http");

const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Home Page");
    } else if (req.url === "/slow-page"){
        let j = 0;
        for (let i = 0; i < 60000000; i++){
            j++;
        }
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(`Slow Page ${j}`);
    }
});

server.listen(8000, () => console.log("Server is running on port 8000"));