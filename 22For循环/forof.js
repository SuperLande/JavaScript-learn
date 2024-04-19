let data = [1,2,3,4,5,6,7,8,9];
let sum = 0;
// element of data，轮流取data中的值填入element
for(let element of data){
    sum += element;
}
console.log(sum)