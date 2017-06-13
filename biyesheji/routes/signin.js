const User = require("../models").User
const common = require("../common")

exports.post = [
	common.isExist(['email', 'password']),
	async cxt => {
		let body = _.pick(cxt.request.body, ['email', 'password'])

		let user = await User.findOne({email: body.email})
						.exec()
						.then(user => {
							if (!user) {
								throw {status: 404, msg: '邮箱未注册'}
							}
							if (user.password !== body.password) {
								throw {status: 403, msg: '密码错误'}
							}

							return user
						})

		cxt.session.user = user
		cxt.status = 200
		cxt.body = user
	}
]