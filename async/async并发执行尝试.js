/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 15:33:29
 * @LastEditTime: 2019-09-17 15:39:56
 * @LastEditors: Please set LastEditors
 */
const urls = ['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2', 'https://jsonplaceholder.typicode.com/todos/3', 'https://jsonplaceholder.typicode.com/todos/4'];


async function LoginOrder(urls) {
  const textPromises = urls.map(url => {
    const response = fetch(url, {
      mode: 'cors'
    });
    return response;
  })
  for (let textPromise of textPromises) {
    console.log(await textPromise)
  }
}
LoginOrder(urls);