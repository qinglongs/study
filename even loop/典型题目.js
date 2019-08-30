/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 09:55:19
 * @LastEditTime: 2019-08-29 17:03:22
 * @LastEditors: Please set LastEditors
 */
// async function async1() {
//   console.log('async1 start'); //2
//   await async2();
//   console.log('async1 end');//4
// }

// async function async2() {
//   console.log('async2'); //3
// }

// console.log('script start');  //1

// setTimeout(function () {
//   console.log('setTimeout'); //7
// }, 0);

// async1();

// new Promise(function (resolve) {
//   console.log('promise1'); // 4
//   resolve();
// }).then(function () {
//   console.log('promise2');  //6
// });

// console.log('script end'); //5

// async function demo() {
//   let data = fetch('https://jsonplaceholder.typicode.com/todos/1', {
//     method: 'GET',
//     mode: 'cors'
//   })
//   return data.json();
// }

// demo().then((data) => console.log(data));

// console.log('script start'); //1
// new Promise((resolve, reject) => {

//   console.log('promise'); // 2

//   fetch('https://jsonplaceholder.typicode.com/todos/1', {
//     method: 'GET',
//     mode: 'cors'
//   }).then((data) => resolve(data.json()));

//   console.log('promise1'); //3

// }).then(data=>console.log(data)); //5

// console.log('script end'); //4

// async function async1() {
//   console.log('async1 start2'); //2
//   await async2();
//   console.log('async1 end6');//w1  //6
// }
// async function async2() {
//   console.log('async23'); //3
// }

// console.log('script start1');//1

// setTimeout(function() {
//   console.log('setTimeout8'); //h1 //8
// }, 0);

// async1();

// new Promise(function(resolve) {
//   console.log('promise14'); //4
//   resolve();
// }).then(function() {
//   console.log('promise27'); //w2 //7
// }); 

// console.log('script end5'); //5

new Promise((resolve) => {
  console.log("pro1")  // 1
  setTimeout(function () {
    new Promise((resolve) => {
      console.log("pro6")
      setTimeout(function () {
        console.log("pro10")
        resolve()
      }, 300)
    }).then(() => {
      console.log("pro7")
    })
    console.log("pro2")
    resolve()
  }, 300)
}).then(() => {
  console.log("pro3")
})

new Promise((resolve) => {
  console.log("pro4")
  .
  setTimeout(function () {
    console.log("pro8")
    resolve()
  }, 300)
}).then(() => {
  console.log("pro5")
})

setTimeout(function () {
  console.log("pro9")
}, 300)