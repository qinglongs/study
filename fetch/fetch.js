/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 10:44:28
 * @LastEditTime: 2019-08-30 10:50:47
 * @LastEditors: Please set LastEditors
 */

fetch('https://jsonplaceholder.typicode.com/todos/1', {
  method: 'GET',
  mode: 'cors'
}).then(data => console.log(data))

// 当接收到一个错误的http状态码时，从fetch()返回的promise不会被标记为reject，
// 但是会将resolve的返回值的ok设置未false，仅当网络故障或请求被阻止时，才会标记未reject