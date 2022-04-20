const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-with,constent-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('api', api);
app.get('/', function(req, res) {
    res.send('Server is runnig')
});

app.listen(5000, function() {
    console.log('server is listenning');
});