const mongoose = require("mongoose")

const Schema = mongoose.Schema

let Course = new Schema({
	name: String,
	cover: String,
	url: String,
	createAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Course', Course)