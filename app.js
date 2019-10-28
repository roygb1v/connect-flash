const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const session = require('express-session');
const flash = require('connect-flash');

app.use(session({
	secret:'happy dog',
	saveUninitialized: true,
	resave: true
}));

app.use(flash());

app.get('/', (req, res) => {
  req.flash('message', 'This is a message from the "/" endpoint');
  res.redirect('/contact');
});

app.get('/contact', (req, res) => {
	res.send(req.flash('message'));
})

app.listen(port, () => {
	console.log('Server is up and listening on', port);
})
