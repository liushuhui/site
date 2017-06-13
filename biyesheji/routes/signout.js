const common = require("../common")

exports.get = [
	common.isLogin(),
	cxt => {
		cxt.session.user = null
		cxt.status = 200
	}
]