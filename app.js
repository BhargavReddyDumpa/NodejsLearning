// require("./xyz.js");
<<<<<<< Updated upstream
const obj = require("./sum.js");
=======
const {calculate_Multiplication, calculate_sum, calculate_sub} = require("./calculate");
// const obj1 = require("./calculate/multiply.js")
>>>>>>> Stashed changes
//Java script destructing
// const {x, calculate_sum} = require("./sum.js");
 
console.log("I am fine");

let sum = obj.calculate_sum(10,20);
console.log(sum);
console.log(obj.x);
// console.log(calculate_sum(10,20));
<<<<<<< Updated upstream
// console.log(x);
=======
// console.log(x);

// console.log(module.exports);

console.log(calculate_sum(10,20));

console.log(calculate_sub(30,20));
>>>>>>> Stashed changes
