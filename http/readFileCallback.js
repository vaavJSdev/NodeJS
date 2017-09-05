const fs = require("fs");
const path = require("path");
const pathAsync = path.join(__dirname,"archivo.txt");

const readFile = function(path) {
	fs.readFile(path,{encoding:"utf-8"},(err,content)=> {
		if(err) {
			console.log(err);
			} else {
			console.log(content);
		}
	})
};

readFile(pathAsync);
