import http from "http";

const server = http.createServer((req, res) => {

    if (req.method === "GET") {
        res.end("GET request received");
    }

    else if (req.method === "POST") {
        res.end("POST request received");
    }

    else if (req.method === "DELETE") {
        res.end("DELETE request received");
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});