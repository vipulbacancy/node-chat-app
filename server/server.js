const path 			= require('path');
const http 			= require('http');
const express		= require('express');
const socketIO		= require('socket.io');

const publicPath 	= path.join(__dirname,'../public/');
const port 			= process.env.PORT || 3000;

var app 	= express();
var server 	= http.createServer(app); 
var io 		= socketIO(server); 

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
	console.log('NEw USer Connected');
	socket.on('disconnect',()=> {
		console.log('USer was disconnected ');
	});
});

server.listen(port,()=>{
	console.log(`Running Server at ${port}`);
})
console.log(__dirname+'../public/');
