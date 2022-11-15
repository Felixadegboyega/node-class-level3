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
		email: {
			required: true,
			unique: true,
			type: String
		},
		profileImagePath: String,
		password: {
			type: String,
			required: true,
			select: false
		}
	}
)

userSchema.pre("save", async function (next) {
	let {password, email} = this;
	const salt = await bcrypt.genSalt(10);
	const hashed = await bcrypt.hash(password, salt);
	this.password = hashed;
	this.email = email.toLowerCase();
	next();
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel;