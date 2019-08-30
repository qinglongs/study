/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 17:21:41
 * @LastEditTime: 2019-08-29 17:25:01
 * @LastEditors: Please set LastEditors
 */
const ajax = function (url) {
  const promise = new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      mode: 'cors'
    }).then(data => { resolve(data.json()) });
  })
  return promise;
}

ajax('https://jsonplaceholder.typicode.com/todos/1').then(data=>console.log(data))