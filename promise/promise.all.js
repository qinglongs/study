/**
 * Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例
 */

/**
 * 例子：
 */

const p1 = new Promise((resolve, rejcet) => {
  //do something......
})

const p2 = new Promise((resolve, rejcet) => {
  //do something......
})

const p3 = new Promise((resolve, rejcet) => {
  //do something......
})

const p = Promise.all([p1, p2, p3]);

/**
 * 上面代码中，Promise.all方法接受一个数组作为参数，p1,p2,p3都是promise实例，如果不是
 * 就会先调用Promsie。resolve方法，将参数转为Promise实例，再进一步处理
 * Priomise.all方法的参数可以不是数组，但必须具有Iterator接口，且返回的每个成员都是Promise实例
 * 
 * p的状态由p1,p2,p3决定，分成两种情况：
 * 1.只有p1,p2,p3的状态都变成fulfilled,p的状态才会变成fulfilled,此时，p1,p2,p3的返回值组成一个数组，传递
 * 给p的回调函数。
 * 2.只要p1,p2,p3之中有一个被rejected,p的状态就变成rejected，此时第一个被reject的实例的返回值
 * 会传递给p的回调函数。
 */

//例子： Promise.all

const promises = [1, 2, 3, 4, 5, 6].map(item => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000 * item, 'promise' + item);
  });
})

Promise.all(promises)
  .then((val) => console.log(val))