class Articles {
    constructor() {
        this.articles = [];
        this.idNum = 1;
        this.initArticles();
        this.success = false;
    }
    initArticles() {
        this.articles.push({
            id: this.idNum,
            title: "The Legend",
            body: "Jim Morrison's epic plunge into greatness & the end",
            author: "Al Roker",
        })
        this.idNum++;
        this.articles.push({
            id: this.idNum,
            title: "Freak Out",
            body: "How the band CHIC brought down the house at Studio 54",
            author: "Jack Nicholson",
        })
        this.idNum++;
        this.articles.push({
            id: this.idNum,
            title: "Straight From the Underground",
            body: "NWA's fast and furious ride",
            author: "Pharrell Williams",
        })
        this.idNum++;
    }
    getAllArticles() {
        return this.articles.slice();
    }
    getArticleById(id) {
        this.articles.forEach((article) => {
            if (articles.id === id) {
                return articles;
            }
        });
    }
    createArticle(title, author, body) {
        const newArticle = { id: this.idNum, title: title, author: author, body: body };
        this.articles.push(newArticle)
        this.idNum++;
        return newArticle;
    }
    editArticle(title, newTitle, body, author, urlTitle) {
        this.success = false;
        this.articles.forEach(article => {
            console.log(article)
            if (article.title === title) {
                article.title = newTitle;
                article.author = author;
                article.body = body;
                article.urlTitle = urlTitle;
                console.log("dsadsa", title)
                this.success = true;
                return this.success;
            } else {
                console.log("dfaffffffa")
                return this.success;
            }
        });
    }
    deleteArticleByTitle(title) {
        this.articles.slice().forEach((article, idx) => {
            if (article.title === title) {
                this.articles.splice(idx, 1);
            }
        });
    }
}

module.exports = new Articles();