const nodemailer = require("nodemailer")
const sendMail = async (emails) => {

	let transporter = nodemailer.createTransport({
		service: 'gmail',
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL,
			pass: process.env.MAIL_PASSWORD
		},
	});

	let info = await transporter.sendMail({
		from: process.env.EMAIL,
		to: emails,
		subject: "Hello ✔",
		html: `
			<div>
		<h3 style="font-weight: 500; color: blue;font-size: 2rem; text-align: center;">Node Class</h3>
		<p style="color: gray; text-align: center; margin:2em auto; max-width: 20rem;">I'm Felix Adegboyega, I'm a full
			stack developer
			currently
			an
			instructor at
			SQI College of ICT.</p>
	</div>
		`,
	});

	console.log(info);

}

module.exports = {sendMail}