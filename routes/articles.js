const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('articles')
})

router.post('/', function (req, res) {
    console.log(req.body)
})
module.exports = router