var express = require('express');

var app = express();
var mongojs = require('mongojs');

var db = mongojs('ChatDB', ['customer']);

var bodyParser = require('body-parser');

var randomToken = require('random-token');


app.use(express.static(__dirname +"/public"));
app.use(bodyParser.json());

app.post('/authentication',function(req,res){
   db.customer.findOne({ "user.name" : req.body.user.name },function(err, docs){
	 if(err || !docs){
		var record_not_found_json = {
				message : "I am sorry. The system failed to authenticate you.",
				token : "",
				type : "auth-fail"
			}
			res.json(record_not_found_json)
	 }else{
		  var record_found_json = {
				message : "Welcome "+req.body.user.name+", how may i help you?",
				token : randomToken(16),
				type : "auth-success"
			}
          res.json(record_found_json);
	 }   
   })
});
  
app.listen(3005);
console.log("listenning to port 3005");