require('babel-register')({
    presets: ["react"],
    extensions: [".es6", ".es", ".jsx"]
});

var express = require('express');
var app = express();
var session = require('express-session');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var routes = require("./routes/routes");


app.set('views', __dirname+'/views');
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'mysecret', resave: false, saveUninitialized: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit : '50mb'}));
app.use(cookieParser());

app.use("/", routes);

require("./routes/match.jsx").bind(app);

//404 handler
app.use("*", function(req, res){
    res.status(404);
    res.sendFile(path.resolve(__dirname+'/views/error/error.html'));
});

app.listen(8080, function () {
    console.log('Listening on localhost:8080');
});