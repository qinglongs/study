
/**
 * ----then
 * Promise实例具有then方法，也就是说，then方法时定义在原型对象Promise.prototype上的。
 * **它的作用是为Promise实例添加状态改变时的回调函数**
 * then方法返回的是一个新的Promise实例。因此可以采用链式写法，即then方法后面再调用另一个then方法。
 */

/**
 * ---catch 用于指定发生错误时的回调函数
 */



//catch例子：

const promise = new Promise((resolve, reject) => {
  throw Error('test');
  resolve('aaa');
});

promise.catch((error) => console.log(error))

/**
 * Promise在resolve语句后面，再抛出错误，不会被捕获，等于没有抛出。
 * 因为Promsie的状态一旦改变，就永久保持该状态，不会再变了
 * 
 * Promise对象的错误具有"冒泡性质"，会一直向后传递，直到被捕获为止，也就是说
 * **错误总会被下一个catch语句捕获**
 */

/**
 * 跟传统的try...catch代码块不同的是，如果没有使用catch方法指定错误处理的回调函数，Promsie
 * 对象抛出的错误不会传递到外层代码，即不会有任何反应：
 */

const someAsyncThing = function () {
  return new Promise((resolve, reject) => {
    resolve(x + 2) //这里x没有声明，所以会报错。
  })
}

someAsyncThing().then(function () {
  console.log('everything is great!');
})

setTimeout(console.log, 2000, 123);

// Uncaught (in promise) ReferenceError: x is not defined
// 123

/**
 * 上面代码中，someAsyncThing函数产生的Promise对象，内部有语法错误。浏览器运行到这一行，
 * 会打印出错误提示 Uncaught (in promise) ReferenceError: x is not defined，但是不会退出进程
 * 终止脚本执行，2秒之后还是会输出123.这就是说，Promise的内部错误不会影响到Promise外部的代码，通俗的说
 * 就是
 * **Promise会吃掉错误**
 */

 