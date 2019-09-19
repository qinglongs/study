/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 15:00:00
 * @LastEditTime: 2019-09-17 15:13:28
 * @LastEditors: Please set LastEditors
 */
/**
 * async 函数的实现原理，就是将Generator函数和自动执行器，包装在一个函数里面
 * 所有的async函数都可以写成下面的第二种形式，其中spawn函数就是自动执行器。
 */


async function fn(args) {
  //..
}

//  等同于：
function fn(args) {
  return spawn(function* () {
    //...
  })
}

/**
 * 下面给出的spawn函数的实现，基本就是前文自动执行器的翻版：
 * @method async方法实现原理
 * @param {function} genf Generator函数
 */
function spawn(genF) {
  return new Promise(function (resolve, reject) {
    const gen = genF();
    function step(nextF) {
      let next;
      try {
        next = nextF();
      } catch (e) {
        return reject(e);
      }
      if (next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.value)
        .then(
          function (v) {
            step(function () { return gen.next(v); });
          },
          function (e) {
            step(function () { return gen.throw(e); });
          });
    }
    step(function () { return gen.next(undefined); });
  });
}