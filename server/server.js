const path 		= require('path');
const publicPath = path.join(__dirname,'../public/');
const express	= require('express');

var app = express();

app.use(express.static(publicPath));

app.listen(3000,()=>{
	console.log('Vipul MAngukiya');
})
console.log(__dirname+'../public/');
