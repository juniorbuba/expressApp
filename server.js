var express = require('express');
var config = require('./server/config');
app = express();
app = config(app);
app.set('port', process.env.PORT || 6000);
app.set('views', __dirname + '/views');

app.get('/', function(req,res){
    res.send('Hello World!');
});

app.listen(app.get('port'), function(){
    console.log(`Server is running on port: ` + app.get('port'));
});