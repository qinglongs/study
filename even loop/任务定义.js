/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 17:37:42
 * @LastEditTime: 2019-08-28 17:43:56
 * @LastEditors: Please set LastEditors
 */
// 宏任务： 包括整体代码 script,setTimeout,setInterval

// 微任务：Promise,process.nextTick;

setTimeout(()=>{
  console.log('setTimeout');
})

new Promise(function(resovle){
  console.log('porimse');
  resovle('porimseend')
})
.then((data)=>{console.log(data)})

console.log('console');