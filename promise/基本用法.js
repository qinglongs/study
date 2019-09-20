/**
 * ES6规定，Promise对象是一个构造函数，用来生成Promise实例
 * Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。
 * 它们是两个函数，由javascript引擎提供，不用自己部署
 * 
 * ---resolve函数的作用是，将Promise对象的状态从"未完成"变成"成功"(pending->resolved)，在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。
 * ---reject 函数的作用是，将Peomise对象的状态从"未完成"变成"失败"(pending->rejected)，在异步操作失败时调用，并将异步操作抛出的错误，作为参数传递出去。
 */

//例子：

const promsie = new Promise(function (resolve, reject) {
  var a = Math.random() * 2;
  if (a > 1) {
    resolve(true);
  } else {
    reject('error')
  }
})

promsie
  .then(v => console.log(v))
  .catch(e => console.log(e))

//Promise的一个简单的例子：
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  })
}

timeout(1000).then(v => console.log(v));  //done


/**
 * **Promise新建后就会立即执行**
 */

let promise1 = new Promise((resolve, reject) => {
  console.log('Promise1'); //1
  setTimeout(() => {
    console.log('setTimeout5'); //5
  })
  resolve();
})

promise1.then(() => {
  console.log('resolved3')
}) //3

console.log('HI2'); //2

/**
 * 整个代码块执行，遇到promise1，立即执行输出Promise，遇到setTimeout将其加入宏任务队列，reolve方法执行，promis1.then方法加入微任务队列
 * 遇到console.log 输出HI，此时宏任务已经执行完毕，执行所有的微任务输出reolve，第一次循环结束，执行宏任务输出setTimeout
。 */

//例子，异步加载图片：

function loadImageAsync(url) {
  return new Promsie(function (resolve, reject) {
    const image = new Image();
    image.onload = function () {
      resolve(image);
    }
    image.onerror = function () {
      reject(new Error('Could not load iamge at' + url))
    }
    image.src = url;
  })
}

/**
 * 上面代码中使用Promise包装了一个图片加载的异步操作。如果加载成功，就调用reovle方法，否则就调用reject方法
 */

//Promsie实现Ajax操作的例子：

const getJSON = function (url) {
  const promise = new Promise(function (resolve, reject) {
    const handler = function () {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.setRequestHeader("Accept", "application/json");
    client.send();
  });
  return promise;
}

getJSON("/post.json")
  .then(function (json) {
    console0.log(json);
  })
  .catch(function (error) {
    console.log(error);
  })

/**
 * 上面代码中，getJSON是对XMLhttpRequest对象的封装，用于发出一个针对JSON数据的HTTP请求
 * 并返回一个Promise对象。需要注意的是，在getJSON内部，resolve和reject函数调用的时候，都带有参数。
 * 如果调用resolve和reject函数时带有参数，那么它们的参数回备传递给回调函数。reject函数的参数通常是
 * Error对象的实例，表示抛出的错误；resolve函数参数除了正常值以外，还可能是另一个Prmoise的实例
 */

const p1 = new Promsie((resolve, reject) => {
  setTimeout(reject, 3000, new Error('fail'));
})

const p2 = new Promsie((resolve, reject) => {
  //do something......
  setTimeout(resolve, 1000, p1);
})

/**
 * 上面代码中，p1和p2都是Promsie的实例，但是p2的reolve方法将p1作为参数，即一个异步操作的结果
 * 是另一个异步操作
 *
 * 注意，这时p1的状态就会传递给p2，也就是说p1的状态决定了p2的状态。如果p1的状态是pending
 * 那么p2的回调函数就会等待p1的状态改变；如果p1的状态已经是resolve或者rejected，那么p2的回调
 * 函数会立即执行。
 */