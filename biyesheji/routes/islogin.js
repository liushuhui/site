exports.get = cxt => {
	let user = cxt.session.user
	if (!user) {
		throw {status: 401, msg: '登录已过期'}
	}

	cxt.status = 200
	cxt.body = user
}