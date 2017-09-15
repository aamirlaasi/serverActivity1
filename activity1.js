var http = require('http');

function handleRequest(req,res) {
	res.end("hello" + req.url);
}

var server = http.createServer(handleRequest);

console.log(typeof server);

var PORT = 7000;

server.listen(PORT, function() {
	console.log("You da man");
});

function handleRequest(req,res) {
	res.end("hello" + req.url);
}

var server2 = http.createServer(handleRequest);

console.log(typeof server2);

var PORT2 = 7500;

server.listen(PORT2, function() {
	console.log("You suck");
});




