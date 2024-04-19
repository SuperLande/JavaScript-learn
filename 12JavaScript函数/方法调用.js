let calculator = {//对象字面量
    operand1: 1,
    operande2: 1,
    add () {  // 对这个函数使用了方法简写语法
        this.result = this.operand1 + this.operande2;
    }
};
calculator.add();//方法调用，计算1+1
console.log(calculator.result)