var mongoose = require('mongoose');
var UsersSchema = new mongoose.Schema({
    username: {
		type: String,
		default: "no_id"
	},
	email: {
		type: String,
		default: "a@gmail.com"
	},
	password: {
		type:  String,
		default: "0"
	},
	authen: {
		type:  String,
		default: "0"
	}
});
// var Users = new mongoose.model('users', UsersSchema);
// exports.user = Users;
module.exports = mongoose.model('users', UsersSchema, 'users');
