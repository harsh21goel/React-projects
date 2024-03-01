let express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');
let connection = require('../connection/app.connection');
let routes = require('../routes/app.route');

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);
app.listen('4300');
console.log('Server is listeneing at the port 4300...');