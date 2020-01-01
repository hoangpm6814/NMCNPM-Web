var express = require('express');
var router = express.Router();
var Product = require('../models/product');


/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Rau - Rau sạch cho mọi nhà', user: req.user });
    Product.find((err, callback) => {
        res.render('index', { title: 'Rau - Rau sạch cho mọi nhà', products: callback, user: req.user });
    }).limit(8)
});

router.get("/dang-xuat", (req, res) => {
    req.logout();
    res.redirect("/");
});

module.exports = router;