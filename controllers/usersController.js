const UserModel = require("../models/userModel");

const register = (request, response) => {
	const {firstname, lastname} = request.body
	UserModel.create({firstname, lastname}, (err, res) => {
		if (err) {
			console.log(err);
			console.log("There is an error");
		} else {
			console.log("Saved");
		}
	})
	students.push({firstname, lastname});
	response.redirect('/students');
}

const login = (req, res) => {

}

const getUsers = (request, response) => {
	UserModel.find((err, res) => {
		console.log(res);
		response.send(JSON.stringify(res));
	})
}

module.exports = {register, login, getUsers}
