const Course = require("../models").Course
const common = require("../common")

exports.get = async cxt => {
	let query = cxt.query

	let limit = parseInt(query.limit) || 10
	let page = parseInt(query.page)
	let cols, courses

	if (page) {
		cols = await Promise.all([
			Course
				.find({})
				.sort({'createAt': -1})
				.limit(limit)
				.skip((page -1) * limit)
				.exec()
				.then(coll => coll || []),
			Course.count({}).exec()
		])

		courses = {
			total: cols[1],
			page: page,
			data: cols[0]
		}
	} else {
		courses = await Course.find({}).exec()
	}


	cxt.status = 200
	cxt.body = courses
}

exports.post = [
	common.isLogin(),
	common.isExist(['name', 'cover', 'url']),
	async cxt => {
		let body = _.pick(cxt.request.body, ['name', 'cover', 'url'])

		let course = await Course.create(body)
		cxt.status = 200
		cxt.body = course
	}
]

exports.delete = [
	common.isLogin(),
	(cxt, next) => {
		let id = cxt.params.id
		if (id) return next()
		throw {status: 400, msg: 'url缺失教师id'}
	},
	cxt => {
		let id = cxt.params.id
		Course.remove({_id: id}).exec()
		cxt.status = 204
	}
]