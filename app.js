const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
var hbs = require('hbs');
var fs = require('fs');
var path = require('path');

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

app.get('/cms/read', (req, res) => {
	fs.readFile(__dirname + '/data/test.txt', 'utf8', function(err, data) {
		console.log(data);
		res.render('login.hbs', {
			title: data,
			descript: "happy new year!"
		});
 
	})
	
});

app.get('/cms/add', (req, res) => {
	fs.appendFile (__dirname + '/data/test.txt', ',add text', function(err) {
		res.render('login.hbs', {
			title: "APPEND TEXT",
			descript: "happy new year!"
		});
 
	})
	
});

app.get('/cms/write', (req, res) => {
	fs.appendFile (__dirname + '/data/test2.txt', 'new text', function(err) {
		res.render('login.hbs', {
			title: "WRITE NEW FILE",
			descript: "happy new year!"
		});
 
	})
	
});


//app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.listen(port, function() {
    console.log('Hotel OFDM Server started. (port'+ port +') since:' + new Date());
});


