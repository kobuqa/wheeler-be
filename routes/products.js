const express = require('express')

const { getProducts, createProduct } = require('../controllers/products')

const router = express.Router()

router.get('/products', getProducts);
router.post('/products', createProduct);

module.exports = router