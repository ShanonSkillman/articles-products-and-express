class Articles {
    constructor() {
        this.articles = [];
        this.idNum = 1;
        this.initArticles();
    }
    initArticles() {
        this.articles.push({
            id: this.idNum,
            name: "The Legend",
            desc: "Jim Morrison's epic plunge into greatness & the end",
            author: "Al Roker",
        })
        this.idNum++;
        this.articles.push({
            id: this.idNum,
            name: "Freak Out",
            desc: "How the band CHIC brought down the house at Studio 54",
            author: "Jack Nicholson",
        })
        this.idNum++;
        this.articles.push({
            id: this.idNum,
            name: "Straight From the Underground",
            desc: "NWA's fast and furious ride",
            author: "Pharrell Williams",
        })
        this.idNum++;
    }
    getAllArticles() {
        return this.articles.slice();
    }
    getArticleById(id) {
        this.articles.forEach((article) => {
            if (article.id === id) {
                return article;
            }
        });
    }
    createArticle(title, author, desc) {
        const newArticle = { id: this.idNum, title: title, author: author, desc: desc };
        this.articles.push(newArticle)
        this.idNum++;
        return newArticle;
    }
    deleteArticleById(id) {
        this.articles.slice().forEach((article, idx) => {
            if (article.id === id) {
                this.articles.splice(0, 1);
            }
        });
    }
}

module.exports = new Articles();