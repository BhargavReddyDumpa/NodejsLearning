function calculate_sum(x,y)
{
    return x+y;
}

var x = "hello world";
module.exports = {
    x: x,
    calculate_sum: calculate_sum,
};
console.log(module.exports);
