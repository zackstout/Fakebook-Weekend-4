
var express = require('express');
var app = express();
var port = 5050;

// Serve up static files
app.use(express.static('server/public'));

app.listen(port, function(){
    console.log('thx for listening on ', port);
});
