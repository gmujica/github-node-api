const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();

const api = require('./routes/api');

app.use(bodyParser.json());
dotenv.config();
app.use(cors());
app.use(morgan('tiny'));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api', api);
app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});