const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
var hbs = require('hbs');
var fs = require('fs');

//handlebars setting
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//open public folder
app.use('/data', express.static('data'));
app.use('/public', express.static('public'));

//Rooting
app.get('/', (req, res) => {
    res.render('login.hbs', {
		title: "NEW OFDM",
		descript: "happy new year!"
	});
});
app.get('/cms', (req, res) => {
    res.render('login.hbs', {
		title: "NEW OFDM",
		descript: "happy new year!"
	});
});

app.get('/cms/menu', (req, res) => {
    res.render('menu.hbs', {
		title: "NEW OFDM",
		descript: "happy new year!"
	});
});


//app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.listen(port, function() {
    console.log('Hotel OFDM Server started. (port'+ port +') since:' + new Date());
});


