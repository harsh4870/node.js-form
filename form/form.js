var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/form.html', function(req, res)
{
	res.sendFile( __dirname + "/" + "form.html");

})

app.post('/process_post', urlencodedParser, function(req, res)
{
	response ={
		first_name:req.query.first_name,
		last_name:req.query.last_name
		};
			   console.log(reponse);
			   res.end(JSON.stringify(response));
})


var server = app.listen(8080,function()
{
	var host = server.address().address
	var port =  server.address().port
	console.log("app listening http://%s:%s", host ,port);
})

