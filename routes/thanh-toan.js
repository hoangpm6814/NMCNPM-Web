var express = require('express');
var router = express.Router();
const cartController = require("../controllers/cartController");

/* GET home page. */
router.get('/', function(req, res, next) {
    
    res.render('thanh-toan', { title: 'Thanh toán', 
    user: req.user 
});
});

// router.post('/', isLoggedIn, function(req, res, next) {
//     cartController.postThanhToan(req, res, next);
// });
router.post('/', isLoggedIn, function(req, res, next) {
    //console.log("don hang array object: " + req.body.donHangArrayObject + "\n");
    //console.log("info user: " + req.body.infoUser + "\n");
    //res.render('thanh-toan', { title: 'Thanh toán', user: req.user });
    cartController.postThanhToan(req, res, next);
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("../users/dang-nhap");
    }
}

module.exports = router;