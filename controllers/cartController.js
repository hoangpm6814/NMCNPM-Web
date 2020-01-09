var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Category = require('../models/category');
var Cart = require("../models/cart");



var modelOrder = require('../models/order');


const gotoCheckout = async (req, res, next) => {
    var itemcart = new Object();
    let cart = req.session.cart;

    itemcart.items = {};
    if (cart.items) {

        for (var key in cart.items) {
            let product = await Product.findById(cart.items[key].id);
            itemcart.items[cart.items[key].id] = {};
            itemcart.items[cart.items[key].id].item = product;
            itemcart.items[cart.items[key].id].quantity = cart.items[key].quantity;
            itemcart.items[cart.items[key].id].price = cart.items[key].price;

        }

        itemcart.totalItems = cart.totalItems;
        itemcart.totalPrice = cart.totalPrice;
    }
    console.log(itemcart);
    res.render('gio-hang', { title: 'Giỏ hàng', user: req.user, session: req.session, itemcart: itemcart });
}

module.exports.gotoCheckout = gotoCheckout;

const addProductToCart = async (req, res, next) => {
    var productId = req.params.id;
    let quantity = req.params.quantity;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    var product = await Product.findById(productId);

    cart.add(product, productId, quantity);
    req.session.cart = cart;

    res.redirect('/san-pham');
}

module.exports.addProductToCart = addProductToCart;

const removeProduct = async (req, res, next) => {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.remove(productId);
    req.session.cart = cart;
    res.redirect('/gio-hang');
}

module.exports.removeProduct = removeProduct;

module.exports.postThanhToan = async function (req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/gio-hang');
    }
    var cart = new Cart(req.session.cart);
    
    var donHangArrayObject = req.body.donHangArrayObject;
    var infoUser = req.body.infoUser;

    var listMonHang = donHangArrayObject.split(";");
    var carts = [];
    var item = "";
    for (chiTietMonHang of listMonHang) {
        item = chiTietMonHang.split("|");
        carts.push({ tenSanPham: item[0], donGia: item[1], soLuong: item[2] });
    }

    var itemInfoUser = infoUser.split("|");

    modelOrder.collection.insertOne({
        cart: carts,
        name: itemInfoUser[0],
        email: itemInfoUser[1],
        address: itemInfoUser[2],
        phone: itemInfoUser[3]
    });

    //res.render('index', { title: 'Trang chủ', resultOrder: true });
    res.redirect('/');

    // orderr.save(function (err, result) {
    //     req.session.cart = null; // Sau khi thanh toan de trong gio hang (trong session)
    //     res.redirect('/');
    // });
}