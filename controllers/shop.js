const Product = require('../models/product');

exports.getAllProducts = (req, res, next)=>{ 
    Product.fetchAll(products=>{
        res.render('shop/products', { pageTitle: 'Shop', 
        prods: products,
        path:'/shop/products' }); 
    });
};

exports.getIndex = (req, res, next) =>{
    Product.fetchAll(products=>{
        res.render('shop/', { 
            pageTitle: 'Shop', 
            prods: products,
            path:'/shop' 
        });
    });
};

exports.getCart = (req, res, next) =>{ 
    res.render('shop/cart', { 
        pageTitle: 'Cart',
        path:'/shop/cart' 
    }); 
};

exports.getCheckout = (req, res, next) =>{ 
    res.render('shop/checkout', { 
        pageTitle: 'Checkout',
        path:'/shop/checkout' 
    }); 
};
