const Teacher = require("../models").Teacher
const common = require("../common")

exports.get = async cxt => {
	let query = cxt.query

	let limit = parseInt(query.limit) || 10
	let page = parseInt(query.page)
	let cols, teachers

	if (page) {
		cols = await Promise.all([
			Teacher
				.find({})
				.sort({'createAt': -1})
				.limit(limit)
				.skip((page -1) * limit)
				.exec()
				.then(coll => coll || []),
			Teacher.count({}).exec()
		])
		teachers = {
			total: cols[1],
			page: page,
			data: cols[0]
		}
	} else {
		teachers = await Teacher.find({}).exec()
	}


	cxt.status = 200
	cxt.body = teachers
}

exports.post = [
	common.isLogin(),
	common.isExist(['name', 'profile', 'avatar', 'project', 'style']),
	async cxt => {
		let body = _.pick(cxt.request.body, ['name', 'profile', 'avatar', 'project', 'style'])

		let teacher = await Teacher.create(body)
		cxt.status = 200
		cxt.body = teacher
	}
]

exports.delete = [
	common.isLogin(),
	(cxt, next) => {
		let id = cxt.params.id
		if (id) return next()
		throw {status: 400, msg: 'url缺失教师id'}
	},
	async cxt => {
		let id = cxt.params.id
		await Teacher.remove({_id: id})
		cxt.status = 204
	}
]