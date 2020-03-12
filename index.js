var express = require('express');
var app = express();
const cors = require('cors');
const logger = require('morgan');

app.use(
	cors({
		origin: '*',
		credentials: true
	})
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/api/form', function(req, res) {
	var nodemailer = require('nodemailer');
	var transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		secure: false, // secure:true for port 465, secure:false for port 587
		auth: {
			user: 'flurofast@gmail.com',
			pass: 'Flurofast123'
		}
	});
	var mailOptions = {
		from: req.body.email,
		to: 'flurofast@gmail.com',
		subject: req.body.subject,
		text: '<' + req.body.email + '> ' + req.body.name + ' sent ' + req.body.message
	};
	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
});
app.get('/', function(req, res) {
	//  res.sendFile(path.join(__dirname + '/client/build/index.html'));
	//  res.render('client/build/index.html');
	res.send({ res: 'ok' });
});
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page
	res.status(err.status || 500);
	res.send('error'); //this or res.status(err.status || 500).send('error')
});
app.listen(3030);
