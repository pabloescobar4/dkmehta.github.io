const mongoose = require('mongoose');

const connect = () => {
	return mongoose.connect("mongodb+srv://dkmehta:dkmehta@cluster0.4ef31.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

module.exports = connect