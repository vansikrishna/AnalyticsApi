var express = require('express'), 
            app = express(), 
            port = process.env.port || 3000,
            mongoose = require('mongoose'),
            events = require('./api/models/eventModel'),//created model loading here
            bodyParser = require('body-parser');

//mongoose instance connection url
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/analytics_db');

//body-parser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes setup
var routes = require('./api/routes/appRoute');
routes(app);

//middleware intercepts for reporting wrong routes
app.use(function(req, res){
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);
console.log('Restful api server started on port : '+port);