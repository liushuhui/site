const mongoose = require("mongoose")
mongoose.Promise = require("bluebird")

mongoose.connect('mongodb://localhost:27017/tushu')

module.exports = {
	User: require("./user"),
	Teacher: require("./teacher"),
	Course: require("./course"),
	Message: require("./message")
	
}