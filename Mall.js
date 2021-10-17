class Mall {

    constructor() {
      this.sales = [];
    }

    notify(storeName, discount){
      this.sales.push({storeName, discount});
      console.log(this.sales)
    }

}

module.exports = Mall;