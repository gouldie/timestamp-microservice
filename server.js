var express = require('express');
var app = express();

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/:time", function (request, response) {
  var isValidUnix = /^\d+$/.test(request.params.time) && new Date(Number(request.params.time)).getTime()
  var isValidString = Date.parse(request.params.time)
  
  if (isValidUnix || isValidString) {
    var dateObj = {}
    
    if (isValidUnix) {
      dateObj.unix = request.params.time
      dateObj.natural = new Date(Number(request.params.time)).toUTCString()
    } 
    else if (isValidString) {
      dateObj.unix = new Date(isValidString).getTime()
      dateObj.natural = new Date(isValidString).toUTCString()
    }
    
    response.send(dateObj)
  }
  response.send("Please enter a valid timestamp or date")
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
