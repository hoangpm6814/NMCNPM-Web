var express = require('express');
var router = express.Router();
const thongKeDoanhThuController = require("../controllers/thongKeDoanhThuController");

router.get('/', thongKeDoanhThuController.thongKeDoanhThu);

function isAdmin(req, res, next) {
    if (req.isAuthenticated() && req.user.authen == "1") {
        next();
    } else {
        res.redirect("../users/dang-nhap");
    }
}

module.exports = router;