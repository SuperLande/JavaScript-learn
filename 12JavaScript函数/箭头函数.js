// 使用箭头分割函数的参数与函数体
const sum = (x, y) => {return x + y};
let a;
a = sum(1,2);
console.log(a)
// 甚至更简洁
const sum2 = (x, y) => x + y;
console.log(sum2(2,2))
// 甚至更简洁
const sum3 = x => x*x+x;
console.log(sum3(1))
// 如果没有参数，箭头函数一个要把空圆括号写出来
const sum4 = () => 42;
console.log(sum4)