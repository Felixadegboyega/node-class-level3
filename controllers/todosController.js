const TodoModel = require("../models/todoModel");

const addTodo = (req, res) => {
	const {name, user} = req.body;
	console.log({user, name})
	TodoModel.create({name, user}, (err, message) => {
		if (err) {
			console.log(err);
			console.log("There is error");
		} else {
			res.json(message);
		}
	})
}

const getTodos = (req, res) => {
	TodoModel.find((err, message) => {
		if (err) {
			res.send("There is an error");
			console.log(err);
		} else {
			res.json(message);
		}
	}).populate("user")
}

module.exports = {addTodo, getTodos}