const mongoose = require("mongoose")

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

let Message = new Schema({
	fromUser: ObjectId,
	toUser: ObjectId,
	content: String,
	createAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Message', Message)