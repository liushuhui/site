const mongoose = require("mongoose")

const Schema = mongoose.Schema

let Teacher = new Schema({
	name: String,
	profile: String,
	avatar: String,
	project: [
		{
			name: String,
			introduce: String
		}
	],
	style: String,
	createAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Teacher', Teacher)