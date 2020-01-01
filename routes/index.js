var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Rau - Rau sạch cho mọi nhà', user: req.user });
});

router.get("/dang-xuat", (req, res) => {
    req.logout();
    res.redirect("/");
});

module.exports = router;