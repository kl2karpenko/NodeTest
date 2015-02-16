var http = require('http'),
    url = require('url'),
    server = new http.Server(function(req,res) {
        console.log(req.method, req.url);
        console.log(url.parse(req.url));


        res.end();
    });

server.listen(12,'127.0.0.1');
