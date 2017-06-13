const mongoose = require("mongoose")

const Schema = mongoose.Schema

let User = new Schema({
	name: String,
	email: String,
	password: String,
	createAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('user', User)