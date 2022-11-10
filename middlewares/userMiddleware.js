require("dotenv").config();
const jwt = require("jsonwebtoken");

const checkUser = (req, res, next) => {
	const {authorization} = req.headers;
	jwt.verify(authorization.split(" ")[1], process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			res.json({status: false, message: "Invalid Token"});
		} else {
			req.user = {_id: decoded._id};
			next();
		}
	})
	// let {id} = req.query;
	// if (id > 10) {
	// 	res.send("Out please");
	// } else {
	// 	next();
	// }
}

module.exports = {checkUser}