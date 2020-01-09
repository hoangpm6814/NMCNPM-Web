var modelOrder = require('../models/order');

exports.thongKeDoanhThu = async function(req, res, next) {

    modelOrder.find({}).exec(function(err, order) {
        res.render('thong-ke-doanh-thu', { 
            title: 'Thống kê doanh thu',
            orderData: order,
            user: req.user,
            session: req.session
        });
    });
    
}