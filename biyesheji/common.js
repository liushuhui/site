exports.isExist = arr => (cxt, next) => {
	let body = cxt.request.body
	arr.forEach(item => {
		if (!body[item]) {
			throw {status: 400, msg: `${item}参数不存在`}
		}
	})

	return next()
}

exports.isLogin = () => (cxt, next) => {
	let user = cxt.session.user
	if(!user) {
		throw {status: 401, msg: "当前未登录"}
	}
	return next()
}