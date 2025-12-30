// require("./xyz.js");
const obj = require("./sum.js");
//Java script destructing
// const {x, calculate_sum} = require("./sum.js");
 
console.log("I am fine");

let sum = obj.calculate_sum(10,20);
console.log(sum);
console.log(obj.x);
// console.log(calculate_sum(10,20));
// console.log(x);