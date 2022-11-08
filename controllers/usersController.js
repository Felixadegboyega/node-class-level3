const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const register = (request, response) => {
	const {firstname, lastname, password} = request.body
	UserModel.create({firstname, lastname, password}, (err, res) => {
		if (err) {
			console.log(err);
			console.log("There is an error");
			response.send(err);
		} else {
			console.log("Saved");
			response.send(res);
		}
	})
	// students.push({firstname, lastname});
	// response.redirect('/students');
}

const login = (request, response) => {
	const {_id, password} = request.body;
	UserModel.findOne({_id}, async (err, message) => {
		if (err) {
			response.send(err);
		} else {
			const validPassword = await bcrypt.compare(password, message.password);
			response.send(validPassword);
		}
	})
}


const getUsers = (request, response) => {
	UserModel.find((err, res) => {
		console.log(res);
		response.send(JSON.stringify(res));
	})
}

module.exports = {register, login, getUsers}
