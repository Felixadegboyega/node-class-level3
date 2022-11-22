let users = [];

const addUser = (user) => {
	users.push(user);
}

const removeUser = (user) => {
	const exUs = users.indexOf(user)
	console.log(exUs);
	// console.log(user.socketId);
	// const exUser = users.find(each => each.socketId == user.socketId);
	// // console.log(index);
	// users = users.filter((each, i) => each.socketId !== user.socketId);
}

module.exports = {users, removeUser, addUser}
