class Mall {

    constructor() {
      this.stores = [];
    }

    notify(storeName, discount){
      this.stores.push({storeName, discount});
    }

}

module.exports = Mall;