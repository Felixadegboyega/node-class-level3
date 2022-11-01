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
			required: true,
			default: '634e68962548bbcc3619f32e'
		}
	}
)

const TodoModel = mongoose.model('Todo', todoSchema)

module.exports = TodoModel;