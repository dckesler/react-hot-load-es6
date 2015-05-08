import express from 'express';
import bodyParser from 'body-parser';

var app = express();
var port = 3001;

app.listen(port, function(){
  console.log("On ", port);
});
