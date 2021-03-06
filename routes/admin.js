const path = require('path')

const express = require('express')
const rootDir = require('../util/path')

//const app = express()
const router = express.Router()

const products = []

router.get('/add-product', (req,res,next) => {
    //res.sendFile(!~~)
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formCSS: true,
        activeAddProduct: true
    })
})

router.post('/add-product', (req,res,next) => {
    products.push({title: req.body.title})
    res.redirect('/');
})
exports.routes = router;
exports.products = products;