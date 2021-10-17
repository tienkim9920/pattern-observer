var Store = require('./Store');
var Shopper = require('./Shopper');
var Mall = require('./Mall');

var original = new Store("Original Things");
var gubber = new Store("Gubber Fubber");

var wdj = new Shopper("WDJ");
var mike = new Shopper("Mike");
var pete = new Shopper("Pete");
var sam = new Shopper("Sam");

var originalMall = new Mall();

console.log("15")
original.subscirbe(wdj);
original.subscirbe(sam);
original.subscirbe(pete);

console.log("20")
original.subscirbe(originalMall);

console.log("23")
gubber.subscirbe(mike);
gubber.subscirbe(originalMall);

gubber.sale(.1);
original.sale(99);

console.log(originalMall.sales);
