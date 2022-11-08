const mongoose = require("mongoose")
const bcrypt = require('bcrypt');

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
		},
		profileImagePath: String,
		password: {
			type: String,
			required: true
		}
	}
)

userSchema.pre("save", async function (next) {
	let {password} = this;
	const salt = await bcrypt.genSalt(10);
	const hashed = await bcrypt.hash(password, salt);
	this.password = hashed;
	next();
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel;