const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    fs.writeFile(__dirname + "/header01.json", JSON.stringify(req.headers), error=>{
        if(error) {return console.log(error);
        res.end(error);}
        console.log("HttpHeader");
        res.end("Httpheader");
    });
});
server.listen(3000);