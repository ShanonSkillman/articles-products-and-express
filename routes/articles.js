const express = require('express');
const router = express.Router();
const db = require('../db/articles');

router.get('/', function (req, res) {
  const articles = db.getAllArticles();
  const data = { articles: articles };
  res.render('articles', data);
})

router.post('/', function (req, res) {
  const data = req.body;
  const newArticle = db.createArticle(data.title, data.author, data.desc);
  res.json(newArticle);
})

module.exports = router