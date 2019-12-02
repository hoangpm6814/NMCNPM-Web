var express = require('express');
var router = express.Router();
var product = require('../models/product');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('mot-san-pham', { title: 'Ớt chuông' });
});
router.get('/ot-chuong', function (req, res, next) {

    const otChuong = product.findOne({ name: 'Ớt chuông' }, function (err, callback) {
        if (err) throw err;
        res.render('mot-san-pham', {
            title: "Sản phẩm - " + callback.name,
            sp: callback
        });
    });
});
router.get('/dau-tay', function (req, res, next) {

    const otChuong = product.findOne({ name: 'Dâu tây' }, function (err, callback) {
        if (err) throw err;
        res.render('mot-san-pham', {
            title: "Sản phẩm - " + callback.name,
            sp: callback
        });
    });
});
router.get('/dau-co-ve', function (req, res, next) {

    const otChuong = product.findOne({ name: 'Đậu cô ve' }, function (err, callback) {
        if (err) throw err;
        res.render('mot-san-pham', {
            title: "Sản phẩm - " + callback.name,
            sp: callback
        });
    });
});
router.get('/bap-cai-tim', function (req, res, next) {

    const otChuong = product.findOne({ name: 'Bắp cải tím' }, function (err, callback) {
        if (err) throw err;
        res.render('mot-san-pham', {
            title: "Sản phẩm - " + callback.name,
            sp: callback
        });
    });
});
router.get('/ca-chua', function (req, res, next) {

    const otChuong = product.findOne({ name: 'Cà chua' }, function (err, callback) {
        if (err) throw err;
        res.render('mot-san-pham', {
            title: "Sản phẩm - " + callback.name,
            sp: callback
        });
    });
});
router.get('/bong-cai', function (req, res, next) {

    const otChuong = product.findOne({ name: 'Bông cải' }, function (err, callback) {
        if (err) throw err;
        res.render('mot-san-pham', {
            title: "Sản phẩm - " + callback.name,
            sp: callback
        });
    });
});
router.get('/ca-rot', function (req, res, next) {

    const otChuong = product.findOne({ name: 'Cà rốt' }, function (err, callback) {
        if (err) throw err;
        res.render('mot-san-pham', {
            title: "Sản phẩm - " + callback.name,
            sp: callback
        });
    });
});
router.get('/nuoc-trai-cay', function (req, res, next) {

    const otChuong = product.findOne({ name: 'Nước trái cây' }, function (err, callback) {
        if (err) throw err;
        res.render('mot-san-pham', {
            title: "Sản phẩm - " + callback.name,
            sp: callback
        });
    });
});
router.get('/hanh-tay', function (req, res, next) {

    const otChuong = product.findOne({ name: 'Hành tây' }, function (err, callback) {
        if (err) throw err;
        res.render('mot-san-pham', {
            title: "Sản phẩm - " + callback.name,
            sp: callback
        });
    });
});
router.get('/tao', function (req, res, next) {

    const otChuong = product.findOne({ name: 'Táo' }, function (err, callback) {
        if (err) throw err;
        res.render('mot-san-pham', {
            title: "Sản phẩm - " + callback.name,
            sp: callback
        });
    });
});
router.get('/toi', function (req, res, next) {

    const otChuong = product.findOne({ name: 'Tỏi' }, function (err, callback) {
        if (err) throw err;
        res.render('mot-san-pham', {
            title: "Sản phẩm - " + callback.name,
            sp: callback
        });
    });
});
router.get('/ot', function (req, res, next) {

    const otChuong = product.findOne({ name: 'Ớt' }, function (err, callback) {
        if (err) throw err;
        res.render('mot-san-pham', {
            title: "Sản phẩm - " + callback.name,
            sp: callback
        });
    });
});
module.exports = router;