/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 15:28:52
 * @LastEditTime: 2019-09-17 15:42:13
 * @LastEditors: Please set LastEditors
 */

const urls = ['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2', 'https://jsonplaceholder.typicode.com/todos/3', 'https://jsonplaceholder.typicode.com/todos/4'];

async function fetchUrl() {
  for (let url of urls) {
    const response = await fetch(url, {
      method: 'get',
      mode: 'cors'
    });
    console.log(response);
  }
}

fetchUrl();