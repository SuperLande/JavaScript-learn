//这个嵌套函数，嵌套了一个square的函数，自定义了一个操作方式
function hypotenuse(a, b) {
    // 定义了一个名为square的函数，它会自乘然后返回值
    function square(x) { 
        return x*x
    };
    return Math.sqrt(square(a) + square(b));
    // sqrt平方根
};
let b;
b = hypotenuse(1,2);
console.log(b)
