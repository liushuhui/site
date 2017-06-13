const User = require("../models").User
const common = require("../common")

exports.post = [
	common.isExist(['name', 'email', 'password']),
	async cxt => {
		let body = _.pick(cxt.request.body, ['name', 'email', 'password'])

		await User.findOne({email: body.email})
			.exec()
			.then(user => {
				if (user) {
					throw {status: 403, msg: '邮箱已注册'}
				}
			})

		let user = await User.create(body)

		cxt.session.user = user
		cxt.status = 200
		cxt.body = user
	}
]