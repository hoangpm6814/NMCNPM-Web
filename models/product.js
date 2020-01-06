var mongoose = require('mongoose');
var product = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    rate: { type: Number, required: false },
    rateCount: { type: Number, required: false },
    img: { type: String, required: false },
    price: { type: Number, required: true },
    sold: { type: Number, required: false },
    available: { type: Number, required: false },
    category: { type: String, required: false },
    qrcode: {type: String, required: false}
});

module.exports = mongoose.model('product', product, 'product');