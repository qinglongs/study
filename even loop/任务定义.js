/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 17:37:42
 * @LastEditTime: 2019-08-29 17:03:24
 * @LastEditors: Please set LastEditors
 */
// 宏任务： 包括整体代码 script,setTimeout,setInterval

// 微任务：Promise,process.nextTick;

setTimeout(()=>{
  console.log('4');//4
})

new Promise(function(resovle){
  console.log('1'); //1
  resovle('porimseend')
})
.then((data)=>{console.log('3')})//3

console.log('2');//2

/**
 * 1.这段代码作为宏任务，进入主线程
 * 2.先遇到setTimeOut 将其注册回调后，分发到宏队列Event Queue。
 * 3.遇到 Promise new Promise立即执行，then函数分发到微任务 Event Queue.
 * 4.遇到 console.log()立即执行。
 * 5.整体代码script作为第一个宏任务结束，检测微任务，发现.then在微任务Even Queue内，执行。
 * 6.第一轮循环结束，开始第二轮，检测Event Queue，发现宏任务 Even Queue中 setTimeout回调函数，立即执行。
 * 7.结束
 */

/**
 * 1.整体代码模块开始执行。
 * 2.进入执行栈，检测任务是同步还是异步
 * 3.如果是同步任务就直接压入栈执行，如果是异步则进入异步执行模块执行。
 * 4.同步任务执行完毕，当执行
 */
