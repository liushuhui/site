global.Promise = require("bluebird")
global._ = require("lodash")

const Koa = require("koa")
const bodyparser = require("koa-bodyparser")
const session = require("koa-session")
const frouter = require("./frouter")

let app = new Koa()

app.use(async (cxt, next) => {
	try {
		await next()
	} catch(e) {
		console.error(e)
		cxt.status = e.status || 500
		cxt.body = e
	}
})

app.keys = ['biyesheji'];
app.use(session(app))
app.use(bodyparser())

app.use(frouter(app, {
	root: './routes',
	_: true
}, uri => '/api' + uri))

app.use(cxt => {
	let err = {status: 404, msg: '找不到路由'}
	throw err
})

app.listen(3000, () => {
	console.log('listening on 3000\n')
})