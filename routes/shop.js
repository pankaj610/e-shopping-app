const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path'); 
const shopController = require('../controllers/shop');
router.get('/', shopController.getIndex);
router.get('/products', shopController.getAllProducts);
router.get('/cart', shopController.getCart);
router.get('/checkout', shopController.getCheckout);


module.exports = router;