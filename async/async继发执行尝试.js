/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 15:28:52
 * @LastEditTime: 2019-09-17 18:06:56
 * @LastEditors: Please set LastEditors
 */

const urls = ['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2', 'https://jsonplaceholder.typicode.com/todos/3', 'https://jsonplaceholder.typicode.com/todos/4'];

async function fetchUrl() {
  for (let i = 0; i < urls.length; i++) {
    const response = await fetch(urls[i], {
      method: 'get',
      mode: 'cors'
    });
    console.log(response);
  }
}

fetchUrl();