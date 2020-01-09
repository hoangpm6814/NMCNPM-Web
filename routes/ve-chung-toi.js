var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('ve-chung-toi', { title: "Ve chung toi", user: req.user, session:req.session});
});

module.exports = router;