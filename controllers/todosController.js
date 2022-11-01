const TodoModel = require("../models/todoModel");

const addTodo = (req, res) => {
	const {todoName} = req.body;
	console.log({todoName})
	TodoModel.create({name: todoName}, (err, message) => {
		if (err) {
			console.log(err);
			res.send(err);
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

const showNewTodoPage = (req, res) => {
	res.render("pages/add-todo");
}

const deleteTodo = (req, res) => {
	let {id} = req.body;
	TodoModel.findByIdAndUpdate(id, {phone: "09000000000"}, (err, message) => {

	})
}

module.exports = {addTodo, getTodos, showNewTodoPage}