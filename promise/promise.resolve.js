/**
 * 有时需要将现有对象转为Promise对象，Promise.resolve方法就起到这个作用
 * 
 * 1.参数是一个Promise实例，那么Promise.resolve将不做任何修改、原封不动的返回这个实例。
 * 2.参数是一个thenbale对象，thenable对象指的是具有then方法的对象。Promsie.resolve方法会将
 * 这个对象转为Promsie对象，然后就立即执行thenable对象的then方法。
 * 3.参数不具有then方法的对象，或者根本就不是对象，则Promise.resolve方法返回一个新的Promsie对象，状态为resolved。
 * 4.不带任何参数，Promsie。resolve方法允许调用时不带参数，直接返回一个resolved状态的promise对象。
 * 如果需要得到一个promise对象，比较方便的方法就是直接调用Promise.resolve方法。
 */

Promise.resolve($.ajax({
  url: 'https://jsonplaceholder.typicode.com/todos/1',
  method: 'GET',
  fetchType: 'jsonp'
}))
  .then(val => console.log(val))


//等价于：
new Promise(resolve => resolve($.ajax({
  url: 'https://jsonplaceholder.typicode.com/todos/1',
  method: 'GET',
  fetchType: 'jsonp'
}))).then(val => console.log(val))



async function test() {
  return await new Promise((resolve) => {
    console.log('1')
    setTimeout(() => {
      console.log('4')
    })
    resolve('3')
  })
}
test().then(v => console.log(v));
console.log('2')


Promise.resolve('aaaa').then(data => console.log(data));

//等价于：
new Promise(resolve => {
  resolve('aaaa');
}).then(data => console.log(data));


//thenable对象 立即执行该对象内部的then方法,这是调用的then方法也会分配到微任务队列
const thenable = {
  then(resolve) {
    console.log('thenable') //2
  }
}
Promise.resolve(thenable)
setTimeout(() => {
  console.log('setTimeout')//3
})
console.log('out')//1
