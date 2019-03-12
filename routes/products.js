const express = require('express');
const router = express.Router();
const db = require('../db/products');
const knex = require('../database');

router.get('/', function (req, res) {
    knex.select('*').from('products')
        .then((products) => {
            console.log(products);
            res.render('products', { products })
        });
    // const products = db.getAllProducts();
    // const data = { products: products }
    // res.render('products', data);
})

router.post('/', function (req, res) {
    let data = req.body;
    knex('products').insert({
        name: data.name,
        price: data.price,
        inventory: data.inventory
    }).then(() => {
        res.redirect('products')
    })
    // const data = req.body;
    // const newProduct = db.createProduct(data.name, data.price, data.inventory);
    // res.json(newProduct);
});

// router.delete('/:name', (req, res) => {
//     let name = req.body.name;
//     console.log("name", name)
//     db.deleteProductsById();
// })
module.exports = router