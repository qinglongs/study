/**
 * Promsie.reac方法同样是将多个Promise实例，包装成一个新的Promise实例
 * 
 */

const promises = [1, 2, 3, 4, 5, 6].map(item => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000 * item, 'promise' + item);
  });
})

Promise.race(promises)
  .then((val) => console.log(val))

/**
 * 上面代码中，只要由一个实例率先改变状态，p的状态就跟着改变。那个率先改变Promise实例的
 * 返回值，就传给p的回调函数
 * 
 * Promise.race方法的参数与Promise.all方法一样，如果不是Promise实例，就会先调用Promise.resolve方法
 * ，将参数转为Promise实例，再进一步处理。
 */

//例子：再指定时间内没有获得结果，就将Promise的状态改编为reject，否则变为resolve

const p = Promise.race([
  fetch('https://jsonplaceholder.typicode.com/todos/1', {
    mode: 'cors'
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => reject('fail'), 1000);
  })
])

p
  .then(val => console.log(val))
  .catch(error => console.log(error));