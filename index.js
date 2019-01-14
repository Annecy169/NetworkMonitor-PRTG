var express = require('express')
var cors = require('cors');
var moment = require("moment");

var setdate;
var port = 8000;
var app = express()
app.use(cors());

app.get('/', function(req, res, next) {
    var date = new Date()
    setdate = moment(date, 'YYYY-MM-DD HH:mm:ss');
    res.send("Set Successful");
    res.end();
});
 
app.get('/check', function(req, res, next) {
    var checkdate = moment(new Date(), 'YYYY-MM-DD HH:mm:ss');
    var duration = moment.duration(checkdate.diff(setdate));
    res.send(duration.asMinutes().toString());
    res.end();
});

app.listen(port)