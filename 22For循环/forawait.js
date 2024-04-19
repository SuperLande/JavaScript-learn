// 从异步可迭代流中读取数据块并打印
let stream = [1,2,3,4]
async function printStream(stream) {
    for await (let chunk of stream) {
        console.log(chunk);
    }
}