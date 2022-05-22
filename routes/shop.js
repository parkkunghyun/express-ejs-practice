const path = ('path')
const express =require('express')
const rootDir = require('../util/path')
const adminData = require('./admin')

const router = express.Router();

router.get('/', (req,res,next) => {
    const products = adminData.products
//entry point -> EJS로 데이터를 전송하는 역할을 하는 함수가 render() 함수이다.
    res.render('shop',{
        //"shop"은 shop.ejs인가봄!!!
        prods: products,
        pagetitle: 'Shop',
        path: '/shop'

    })
})

module.exports = router