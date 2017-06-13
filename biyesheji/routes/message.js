const Message = require("../models").Message
const User = require("../models").User
const common = require("../common")

exports.post = [
	common.isLogin(),
	common.isExist(['content']),
	async cxt => {
		let body = _.pick(cxt.request.body, ['toUser', 'content'])

		body.fromUser = cxt.session.user._id

		let msg = await Message.create(body)

		cxt.status = 200
		cxt.body = msg
	}
]


exports.get = async cxt => {
	let query = cxt.query

	let limit = parseInt(query.limit) || 10
	let page = parseInt(query.page) || 1

	let cols = await Promise.all([
		Message.count(),
		getMsg({page, limit}),
	])

	cxt.status = 200
	cxt.body = {
		total: cols[0],
		page: page,
		data: cols[1]
	}
}


function getMsg({page, limit}) {
	return Message.find({})
		.sort()
		.limit(limit)
		.skip((page - 1) * limit)
		.exec()
		.then(cols => {
			if (!cols) return []

			let promise_arr = []

			cols = cols.map(item => item.toObject())

			cols.forEach(item => {
				let from_promise = User
									.findById(item.fromUser)
									.select('_id name')
									.exec()
									.then(user => item.fromUser = user)

				promise_arr.push(from_promise)

				if (item.toUser) {
					let to_promise = User
										.findById(item.toUser)
										.select('_id name')
										.exec()
										.then(user => item.toUser = user)

					promise_arr.push(to_promise)
				}
			})

			return Promise.all(promise_arr).then(() => cols)
		})
}