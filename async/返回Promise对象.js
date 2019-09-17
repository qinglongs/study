/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 11:18:16
 * @LastEditTime: 2019-09-17 18:19:39
 * @LastEditors: Please set LastEditors
 */
/**
 * async返回一个Promise对象：
 * 1.async函数内部的return语句返回的值，会成为then方法回调函数的参数。
 * 2.async函数内部抛出错误，会导致返回的Promise对象变为reject状态，抛出的错误会被
 * catch方法回调函数接收到
 */

async function foo() {
  return 'hello,word'
}

foo().then(res => console.log(res));  //hello,word

async function bar() {
  throw new Error('error');
}

bar()
  .then(v => console.log(v))
  .catch(e => console.log(e));



  