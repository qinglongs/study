

/**
 * 事件循环中的异步队列有两种:marco(宏任务)队列和micro(微任务)队列。
 * **宏任务队列可以有多个，微任务队列只有一个**
 * 1.常见的marco-task：setTimeout、setInterval、setImmediate、script(整体代码)
 * 2.常见的micro-task：process.nextTick、new Promise().then(回调)
 */

/**
 * 当某个宏任务执行完成后，会查看是否有微任务队列，如果有，先执行微任务队列中的所有任务，如果没有，
 * 会读取宏任务队列中排在最前的任务，执行宏任务的过程中，如果遇到微任务，依次加入微任务队列。栈空后，再次
 * 读取微任务队列里的任务
 */

//例子
Promise.resolve().then(() => {
  console.log('Promise1') //1
  setTimeout(() => {
    console.log('setTimeout4');//4
    Promise.resolve().then(() => {
      console.log('Promise5')//5
    })
  })
})
setTimeout(() => {
  console.log('setTimeout2') //2
  Promise.resolve().then(() => {
    console.log('Promise3') //3
  })
}, 0)

/**
 *    1. 一开始执行栈的同步任务执行完毕，会查看是否有微任务队列，上题中存在(有且只有一个)，然后执行微任务队列所有任务输出Promise1
 * 同时会生成一个宏任务setTimeout2
 *    2.然后去查看宏任务队列，宏任务setTimeout在setTimout2之前，先执行setTimeout1，输出setTimeout1。
 *    3.在执行宏任务setTimeout1时会生成微任务Promise2，放入微任务队列中，接着先去清空微任务队列中的所有任务。
 * 输出Promise2
 *    4.清空完微任务中的所有任务后，就会去宏任务队列取一个，这回执行的时setTimeout2;
 */


//宏任务->微任务->宏任务->微任务......