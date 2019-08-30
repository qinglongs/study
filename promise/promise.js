/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 17:03:43
 * @LastEditTime: 2019-08-30 10:44:12
 * @LastEditors: Please set LastEditors
 */


/**
 * 1.promise有三个状态，pending（进行中） fulfilled（成功） rejected（失败）
 * 2.promise无法中途取消。
 * 3.promise构造函数接收一个函数作为参数，这个函数的两个参数分别是resolce和reject。它们是两个
 * 函数。
 * 4.resolve函数的作用是将promise对象的状态从‘未完成’变为‘成功’，在异步操作成功
 * 时调用，并将异步操作的结果作为参数传递回去。
 * 5.reject函数的作用是，将promise的状态从‘未完成’转成‘失败’，在异步操作失败时调用。
 * 6.prmise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
 */ 

//  基本用法：
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('执行完毕')
  }, 1000)
})


promise.then(
  (data) => console.log(data),  //参数一  resolveed状态返回的参数
  (error) => console.log(error) //参数二  rejected状态返回的参数
);

