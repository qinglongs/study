/**
 * 有时需要将现有对象转为Promise对象，Promise.resolve方法就起到这个作用
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