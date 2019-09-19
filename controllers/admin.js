const Product = require('../models/product');

exports.getAddProduct = (req, res, next)=>{
    res.render('admin/add-product', {
        pageTitle: 'Add Product' ,
        path:'/admin/add-product' });
};
exports.postAddProduct = (req, res, next)=>{
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imgurl = req.body.imgurl;
    const product = new Product(title, imgurl, description, price);
    product.save();
    res.redirect('/shop/products'); 
};


exports.getAllProducts = (req, res, next)=>{ 
    Product.fetchAll(products=>{
        res.render('admin/products', { 
            pageTitle: 'Admin Products', 
            prods: products,
            path:'/admin/products' 
        }); 
    });
};