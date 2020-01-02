var Product = require('../models/product');
var Category = require('../models/category');
const singleProductController = async(req, res, next) => {
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
}
module.exports.singleProduct = singleProductController;

const allProductController = async(req, res, next) => {
    const category = req.query.category;
    if (category == null) {
        Product.find((err, callback) => {
            if (err)
                res.sendStatus(404);
            res.render('san-pham', { title: 'Sản phẩm - Tất cả', products: callback, user: req.user });
        })
    }
}
module.exports.allProduct = allProductController;

module.exports.homepageFeatureProduct = async(req, res, next) => {
    const FeatureProduct = await Product.find({}).limit(8);
    res.render('index', { title: 'Rau - Rau sạch cho mọi nhà', products: FeatureProduct, user: req.user });
}

