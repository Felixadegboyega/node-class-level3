const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
	{
		firstname: {
			type: String,
			required: true,
			default: "Felix"
		},
		lastname: String,
		verified: {
			required: true,
			default: false,
			type: Boolean
		}
	}
)

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel;