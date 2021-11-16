  class Store {

    constructor(name) {
        this.name = name;
        this.shoppers = [];
        // Original -> Shopper Shopper Shopper Mall
        // Gubber -> Shopper Mall
    }

    subscirbe(observer) {
      this.shoppers.push(observer);
    }

    sale(discount) {
      this.shoppers.forEach(observer => observer.notify(this.name, discount));
    }

}

module.exports = Store;