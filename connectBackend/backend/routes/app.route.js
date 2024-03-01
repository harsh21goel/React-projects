let express = require('express');
let router = express.Router();
let controller = require('../controller/app.controller');
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: true,
}))

router.post('/', controller.createUser);

module.exports = router;