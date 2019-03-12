const express = require('express')
const hbs = require('express-handlebars');
const bodyParser = require('body-parser')
const articles = require('./routes/articles')
const products = require('./routes/products')
const app = express();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.engine('hbs', hbs({
    defaultLayout: 'home',
    extname: '.hbs'
}))
app.set('view engine', 'hbs');

app.use('/articles', articles)
app.use('/products', products)

app.get('/', (req, res) => {
    res.render("homebase")
})

app.listen(8080, () => {
    console.log("app listening on port 8080")
});

