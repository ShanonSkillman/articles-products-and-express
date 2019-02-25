class Articles {
    constructor() {
      this.articles = [];
      this.idNum = 1;
      this.initArticles();
    }
    initArticles() {
      this.articles.push({
        id: this.idNum,
        name: "Man jumps off wamiea canyon",
        desc: "Pwned",
        author: "Boof",
      })
      this.idNum++;
      this.articles.push({
        id: this.idNum,
        name: "Wichita",
        desc: "Mose cereal killarz in da Crunchy.",
        author: "Mr kitty",
      })
      this.idNum++;
      this.articles.push({
        id: this.idNum,
        name: "Noodle Land",
        desc: "HOME Of DA SpAGHETTI WESTERZNRAZ ALCLAPS",
        author: "Shanon",
      })
      this.idNum++;
    }
    getAllArticles() {
      return this.articles.slice();
    }
    getArticleById(id) {
      this.articles.forEach( (article) => {
        if (article.id === id) {
          return article;
        }
      });
    }
    createArticle(title, author, desc) {
      const newArticle = {id: this.idNum, title: title, author: author, desc: desc};
      this.articles.push(newArticle)
      this.idNum++;
      return newArticle;
    }
    deleteArticleById(id) {
      this.articles.slice().forEach( (article, idx) => {
        if (article.id === id) {
          this.articles.splice(0, 1);
        }
      })
    }
  }

  module.exports = new Articles();