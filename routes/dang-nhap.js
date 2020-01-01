var express = require('express');
var router = express.Router();
var db = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/', function (req, res, next) {
    res.render('dang-nhap', { title: 'Đăng nhập', error: "" });
});

router.post('/', async(req, res, next) => {
    const usernameCandidate = req.body.username;
    const passwordCandidate = req.body.password;
    const findUser = db.findOne({ username: usernameCandidate });
    let user = await findUser.exec();
    if (user) {
        bcrypt.compare(passwordCandidate, user.password, (err, compareResult) => {
            if (compareResult == true) {
                // res.render('dang-nhap', { title: 'Đăng nhập', error: "Đăng nhập thành công" });
                res.redirect('/');
            } else {
                res.render('dang-nhap', { title: 'Đăng nhập', error: "Sai tên tài khoản hoặc mật khẩu" });
            }
        });
    } else {
        res.render('dang-nhap', { title: 'Đăng nhập', error: "Sai tên tài khoản hoặc mật khẩu không tìm thấy user" });
    }
});

// router.post('/', function (req, res, next) {
//     if (req.body.username && req.body.password) {
//         db.user.find({
//             username: req.body.username,
//             password: req.body.password
//         }).exec(function (err, result) {
//             if (err) {
//                 console.log("err");
//             }
//             else if (result) {
//                 console.log(result);
//                 if (result.length == 0) {
//                     res.render('./dang-nhap', { error: "Loi!" });
//                 } else {
//                     console.log(result);
//                     res.redirect('/');
//                 }
//             }
//         })
//     }
//     else {
//         res.render('./dang-nhap', { error: "Hãy điền đầy đủ thông tin!" });
//     }
// });

module.exports = router;