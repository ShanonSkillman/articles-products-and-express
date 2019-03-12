const express = require('express');
const router = express.Router();
const db = require('../db/articles');
const knex = require('../database');

router.get('/', function (req, res) {
    // knex.select('*').from('articles')
    //     .then((articles) => {
    //         console.log(articles);
    //         res.render('articles', { articles })
    // });
    const articles = db.getAllArticles();
    const data = { articles: articles };
    res.render('articles', data);
})

router.post('/', function (req, res) {
    let data = req.body;
    knex('articles').insert({
        title: data.title,
        author: data.author,
        desc: data.desc
    }).then(() => {
        res.redirect('articles')
    })
    // const data = req.body;
    // const newArticle = db.createArticle(data.title, data.author, data.desc);
    // console.log(newArticle)
    // res.json(newArticle);
});

router.put('/:title', (req, res) => {
    let title = req.body.title;
    let newTitle = req.body.newTitle;
    let body = req.body.body;
    let author = req.body.author;
    let urlTitle = req.body.urlTitle;

    console.log("articleTitle = ", title)
    console.log("newTitle = ", newTitle)
    console.log("body", body)
    db.editArticle(title, newTitle, body, author, urlTitle)

    console.log("success is", db.success);
    if (db.success === true) {
        res.send("You have edited " + title);
    } else if (db.success === false) {
        res.send("fuck off");
    }
})

router.delete('/:title', (req, res) => {
    let title = req.body.title;
    console.log("title", title)
    db.deleteArticleByTitle();
})
module.exports = router