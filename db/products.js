class Products {
    constructor() {
        this.articles = [];
        this.idNum = 1;
        this.initProducts();
    }
    initProducts() {
        this.products.push({
            id: this.idNum,
            name: "Technics SL- 1210MK2 Professional Turntable",
            price: "$2,193",
            inventory: "5",
        })
        this.idNum++;
        this.products.push({
            id: this.idNum,
            name: "JukeBox Hero",
            price: "$8,995",
            inventory: "3",
        })
        this.idNum++;
        this.products.push({
            id: this.idNum,
            name: "The Complete Album Collection Vol. One",
            price: "$199",
            inventory: "9",
        })
        this.idNum++;
    }
    getAllProducts() {
        return this.products.slice();
    }
    getProductById(id) {
        this.products.forEach((products) => {
            if (product.id === id) {
                return product
            }
        });
    }
    createProduct(name, price, inventory) {
        const newProduct = { id: this.idNum, name: name, price: price, inventory: inventory };
        this.products.push(newProduct)
        this.idNum++;
        return newProduct;
    }
    deleteProductsById(id) {
        this.products.slice().forEach((product, idx) => {
            if (product.id === id) {
                this.products.splice(0, 1);
            }
        });
    }
}

module.exports = new Products();