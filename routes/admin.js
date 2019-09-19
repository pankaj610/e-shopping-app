const path = require('path');
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');
// const rootDir = require('../util/path');
 
router.get('/add-product', adminController.getAddProduct);
router.post('/add-product', adminController.postAddProduct);
router.get('/products', adminController.getAllProducts);

module.exports = router;
