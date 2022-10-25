const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		date: {
			required: true,
			type: Date,
			default: Date.now()
		},
		user: {
			ref: "User",
			type: mongoose.Schema.Types.ObjectId,
			required: true
		}
	}
)

const TodoModel = mongoose.model('Todo', todoSchema)

module.exports = TodoModel;