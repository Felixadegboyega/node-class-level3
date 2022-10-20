const checkUser = (req, res, next) => {
	let {id} = req.query;
	if (id > 10) {
		res.send("Out please");
	} else {
		next();
	}
}

module.exports = {checkUser}