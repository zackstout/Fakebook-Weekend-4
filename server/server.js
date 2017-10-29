
var express = require('express');
var app = express();
var port = process.env.PORT || 5050;
var router = require('./routes/images_router.js');
var bodyParser = require('body-parser');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // for parsing application/json
app.use('/images', router);

app.listen(port, function(){
    console.log('thx for listening on ', port);
});
