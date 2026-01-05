const http = require("node:http");

const server = http.createServer(function (req, res){
    //reply to them with a hello world
    if(req.url === "/getsecretdata"){
        res.end("This is secreat data you are watching");
    }
    res.end("Hello");
});
server.listen(4000);

