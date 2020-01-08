var express = require('express');
var router = express.Router();
const products=require("../models/product");
var Cart = require('../models/cart');
const cartController = require("../controllers/cartController");
/* GET home page. */

router.get('/',async function(req, res, next) 
{
    cartController.gotoCheckout(req,res,next);
});


router.get('/add/:id/:quantity', async function(req, res, next) {
   
    cartController.addProductToCart(req,res,next);
});
  
  
router.get('/remove/:id', function(req, res, next) {
    cartController.removeProduct(req,res,next);
});

router.post('/thanh-toan', isLoggedIn, function(req, res, next) {
    cartController.postThanhToan(req, res, next);
});

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("../users/dang-nhap");
    }
}


module.exports = router;