var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var async = require('async');

// router.get('', (req, res, next) => {
//     const id = req.query.productId;
//     if (id != null) {
//         let prod = Product.findById(id, (err, data) => {
//             if (err) res.sendStatus(404);
//             res.render('mot-san-pham', { title: 'Sản phẩm - ' + data.name, sp: data });
//         })
//     }
// });

router.get('', async (req, res, next) => {
    const id = req.query.productId;
    if (id != null) {
        let displayProd, rela;
        const productFind = Product.findById(id);
        displayProd = await productFind.exec();
        // const relaProductFind = Product.find({ category: displayProd.category }).limit(4);
        const relaProductFind = Product.find({ category: displayProd.category, _id: { $ne: displayProd.id } }).limit(4);
        rela = await relaProductFind.exec();
        res.render('mot-san-pham', { title: 'Sản phẩm - ' + displayProd.name, sp: displayProd, relaProducts: rela, user: req.user });
    }
});

/* GET home page. */
// router.get('/', function (req, res, next) {
//     res.render('mot-san-pham', { title: 'Ớt chuông', user: req.user });
// });

// router.get('/ot-chuong', function (req, res, next) {

//     const otChuong = product.findOne({ name: 'Ớt chuông' }, function (err, callback) {
//         if (err) throw err;
//         res.render('mot-san-pham', {
//             title: "Sản phẩm - " + callback.name,
//             sp: callback
//         });
//     });
// });
// router.get('/dau-tay', function (req, res, next) {

//     const otChuong = product.findOne({ name: 'Dâu tây' }, function (err, callback) {
//         if (err) throw err;
//         res.render('mot-san-pham', {
//             title: "Sản phẩm - " + callback.name,
//             sp: callback
//         });
//     });
// });
// router.get('/dau-co-ve', function (req, res, next) {

//     const otChuong = product.findOne({ name: 'Đậu cô ve' }, function (err, callback) {
//         if (err) throw err;
//         res.render('mot-san-pham', {
//             title: "Sản phẩm - " + callback.name,
//             sp: callback
//         });
//     });
// });
// router.get('/bap-cai-tim', function (req, res, next) {

//     const otChuong = product.findOne({ name: 'Bắp cải tím' }, function (err, callback) {
//         if (err) throw err;
//         res.render('mot-san-pham', {
//             title: "Sản phẩm - " + callback.name,
//             sp: callback
//         });
//     });
// });
// router.get('/ca-chua', function (req, res, next) {

//     const otChuong = product.findOne({ name: 'Cà chua' }, function (err, callback) {
//         if (err) throw err;
//         res.render('mot-san-pham', {
//             title: "Sản phẩm - " + callback.name,
//             sp: callback
//         });
//     });
// });
// router.get('/bong-cai', function (req, res, next) {

//     const otChuong = product.findOne({ name: 'Bông cải' }, function (err, callback) {
//         if (err) throw err;
//         res.render('mot-san-pham', {
//             title: "Sản phẩm - " + callback.name,
//             sp: callback
//         });
//     });
// });
// router.get('/ca-rot', function (req, res, next) {

//     const otChuong = product.findOne({ name: 'Cà rốt' }, function (err, callback) {
//         if (err) throw err;
//         res.render('mot-san-pham', {
//             title: "Sản phẩm - " + callback.name,
//             sp: callback
//         });
//     });
// });
// router.get('/nuoc-trai-cay', function (req, res, next) {

//     const otChuong = product.findOne({ name: 'Nước trái cây' }, function (err, callback) {
//         if (err) throw err;
//         res.render('mot-san-pham', {
//             title: "Sản phẩm - " + callback.name,
//             sp: callback
//         });
//     });
// });
// router.get('/hanh-tay', function (req, res, next) {

//     const otChuong = product.findOne({ name: 'Hành tây' }, function (err, callback) {
//         if (err) throw err;
//         res.render('mot-san-pham', {
//             title: "Sản phẩm - " + callback.name,
//             sp: callback
//         });
//     });
// });
// router.get('/tao', function (req, res, next) {

//     const otChuong = product.findOne({ name: 'Táo' }, function (err, callback) {
//         if (err) throw err;
//         res.render('mot-san-pham', {
//             title: "Sản phẩm - " + callback.name,
//             sp: callback
//         });
//     });
// });
// router.get('/toi', function (req, res, next) {

//     const otChuong = product.findOne({ name: 'Tỏi' }, function (err, callback) {
//         if (err) throw err;
//         res.render('mot-san-pham', {
//             title: "Sản phẩm - " + callback.name,
//             sp: callback
//         });
//     });
// });
// router.get('/ot', function (req, res, next) {

//     const otChuong = product.findOne({ name: 'Ớt' }, function (err, callback) {
//         if (err) throw err;
//         res.render('mot-san-pham', {
//             title: "Sản phẩm - " + callback.name,
//             sp: callback
//         });
//     });
// });
module.exports = router;