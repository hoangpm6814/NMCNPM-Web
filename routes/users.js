var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
var passport = require('../passport/passport');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/dang-ki', function(req, res, next) {

    res.render('dang-ki', {
        title: "Đăng kí",
        error: "",
        session:req.session
    });
});

router.post('/dang-ki', function(req, res, next) {
    userController.register(req, res, next);
});
router.get('/dang-nhap', (req, res, next) => {
    res.render('dang-nhap', { title: 'Đăng nhập', error: "",session:req.session });
});

router.post('/dang-nhap', passport.authenticate('local', {
    failureRedirect: '/users/dang-nhap',
    successRedirect: '/',
    failureMessage: 'Sai username hoặc password',
    successMessage: 'Đăng nhập thành công'
}));
router.get('/thong-tin', function(req, res, next) {
    res.render('thong-tin', { title: 'Thông tin người dùng', user: req.user,session:req.session });
});
router.get("/dang-xuat", (req, res) => {
    req.logout();
    res.redirect("/");
});


module.exports = router;