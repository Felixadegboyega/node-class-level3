const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const register = (request, response) => {
	const {firstname, lastname, password, email} = request.body
	UserModel.create({firstname, lastname, password, email}, (err, res) => {
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
	const {email, password} = request.body;
	UserModel.findOne({email}).select('+password').exec(async (err, message) => {
		if (err) {
			response.send(err);
		} else if (message) {
			const validPassword = await bcrypt.compare(password, message.password);
			if (validPassword) {
				const token = jwt.sign({_id: message._id}, process.env.JWT_SECRET, {expiresIn: 60});
				response.json({token, message: "Token generated"});
			} else {
				response.send({status: false, message: "Invalid password"});
			}
		} else {
			response.send({status: false, message: "Email does not exist"});
		}
	});
}

const fetchProfile = (req, res) => {
	UserModel.findById(req.user._id, (err, data) => {
		res.json({status: true, message: "User Profile fetched", data})
	})
}

const getUsers = (request, response) => {
	UserModel.find((err, res) => {
		console.log(res);
		response.send(JSON.stringify(res));
	})
}

module.exports = {register, login, getUsers, fetchProfile}
