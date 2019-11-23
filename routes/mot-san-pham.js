var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('mot-san-pham', { title: 'Ớt chuông' });
});

module.exports = router;