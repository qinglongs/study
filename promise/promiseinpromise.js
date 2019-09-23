
// const p1 = new Promise((resolve, reject) => {
//   console.log('p1');

//   fetch('https://jsonplaceholder.typicode.com/todos/1', {
//     method: 'GET',
//     mode: 'cors'
//   })
//     .then(data => {
//       console.log('fetchthen')
//       setTimeout(() => {
//         console.log('settimeout1')
//         resolve(data.json())
//       })
//     })
// })

// const p2 = new Promise((resolve, reject) => {
//   console.log('p2')
//   // console.log('settimout2')
//   resolve(p1);
// })

// p2.then(data => data).then(data => console.log(data));


new Promise((resolve, reject) => {
  console.log('promise1');//1
  resolve(new Promise((reslove, reject) => {
    console.log('promise2')//2
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
      method: 'GET',
      mode: 'cors'
    })
      .then(data => {
        console.log('fetchthen1')//3
        setTimeout(() => {
          console.log('settimeout1')//4
          reslove(data.json())
        })
      })
  }));
}).then(data => { console.log('then2') });//5
