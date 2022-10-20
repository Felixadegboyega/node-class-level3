const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
dotenv.config();
const mongoose = require('mongoose');
const {register, getUsers} = require('./controllers/usersController');
const {checkUser} = require('./middlewares/userMiddleware');

mongoose.connect(process.env.URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then((res) => {
		console.log("Connection Successful");
	}).catch(err => {
		console.log(err);
	})

app.set('view engine', 'ejs');
// app.use('/student', )

const students = [
	{
		firstname: "Felix",
		school: "KWASU",
		lastname: "Adegboyega",
		id: 1
	},
	{
		firstname: "Victoria",
		school: "UNILORIN",
		id: 2,
		lastname: "Temitope"
	},
	{
		firstname: "Adeyinka",
		school: "LAUTECH",
		id: 3,
		lastname: "Abiola"
	}
]

app.get("/", (request, response) => {
	const student = {
		firstname: "Felix",
		dept: "Software Engineering",
		school: "SQI"
	}
	const mySchool = {
		name: "Soft Quest Incoporated",
		address: "Opposite Yoaco filling Station"
	}
	const score = 60;

	response.render("pages/home", {
		student, mySchool, score, students
	});
})

app.get("/about", (request, response) => {
	response.render("pages/about");
})

app.get("/students", checkUser, (request, response) => {
	const {id} = request.query;
	response.render("pages/students", {id, students});
})

// app.get("/students/update", checkUser, (request, response) => {
// 	const {id} = request.query;
// 	response.render("pages/students", {id, students});
// })

app.get("/new-user", (request, response) => {
	response.render("pages/new-user");
})

app.get("/get-users", getUsers)

app.post("/new-user", register)

app.get("/contact", (request, response) => {
	response.render("pages/contact");
})

app.get("/home", (request, response) => {
	response.sendFile(__dirname + '/index.html');
})

app.listen("3200", () => {
	console.log("server is running at port 3200");
})