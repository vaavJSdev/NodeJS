const fs = require("fs");
const path = require("path");

const enrutador = (name) => {
	return path.join(__dirname,name);
}

const rutaSyncrona = enrutador("sincronia.txt");

const rutaAsyncrona = enrutador("asincronia.txt");

const creadorSyncrono =  (url,data) => {
	fs.writeFileSync(url, data, {encoding:"utf-8"});
	console.log("Archivo creado");
};

creadorSyncrono(rutaSyncrona,"Hola que hace");

const creadorAsyncrono = (url,data) => {
	fs.writeFile(url,data,{encoding:"utf-8"}, (err)=> {
		if(err) console.log("No se pudo crear el archivo");
			console.log("Archivo creado");
	})
};

const creadorPromesado = (url,data)=> {
	return new Promise((resolve,reject) => {
		fs.writeFile(url,data,{encoding:"utf-8"}, (err)=> {
		if(err) {
				reject(err)
			} else {
				resolve("Archivo Creado");
			}
		})
	}) 
};

(async () => {
	try {
		let async = await creadorPromesado(rutaAsyncrona,"Buena Buenaw");
		console.log(async);
	} catch(err) {
		console.log(err);
	}
})();
