const Koa = require('koa');
const Router = require('koa-router');
const fs = require("fs");
const path = require("path");

const app = new Koa();
const router = new Router();

const readFile = (path) => {
	return new Promise((resolve,reject)=> {
		fs.readFile(path,{encoding:"utf-8"},(err,content)=> {
			if(err) {
				reject(err);
			} else {
				resolve(content);
			}
		})
	})
};

router.get("/", async ctx => {
	const index = await readFile('./index.html');
	ctx.body = index;
});

app.use(router.routes());
app.listen(8080);
