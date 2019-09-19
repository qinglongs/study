/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 14:24:02
 * @LastEditTime: 2019-09-18 09:40:31
 * @LastEditors: Please set LastEditors
 */

// 1.async 表示函数内部有异步操作。
// 2.await 表示紧跟在后面的表达式需要等待结果。
// 3.await命令后面，可以是Promise对象和原始类型的值
// (数值、字符串和布尔值，但这时会立即resloved的Prmise对象 )。
// 4.async函数返回的是Prmise对象，我们可以用then方法指定下一步的操作。
// 5.async函数完全可以看作多个异步操作，包装成的一个Promise对象，而await
// 命令就是内部的then命令的语法糖。


function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await atimeout(ms); //后面跟一个Promise对象
  console.log(value);
}

// timeout的async写法:
async function atimeout(ms){
  await new Promise(resolve=>{
    setTimeout(resolve,ms);
  })
}

asyncPrint('hello world', 5000);


