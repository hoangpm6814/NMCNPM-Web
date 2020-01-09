var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    //user: { type: Schema.Types.ObjectId, ref: 'user' },
    cart: [{ type: Object, required: true }],
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true }
    // Nhung truong ma cho nguoi dung nhap vao khi dien thong tin thanh toan
},{collection:'order'});

module.exports = mongoose.model('order', schema);