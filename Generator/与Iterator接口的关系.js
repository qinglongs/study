/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 16:20:56
 * @LastEditTime: 2019-09-17 17:08:57
 * @LastEditors: Please set LastEditors
 */

/**
 * 由于Generator函数就是遍历器生成函数，因此可以把Generator赋值给对象的
 * Symbol.iterator属性，从而使得该对象具有Iterator接口。
 * 
 * 下面代码中，Generator函数赋值给Symbol.iterator属性，从而使得myIterable对象具有了
 * Iterator接口，可以被...运算符遍历了
 */

var myIterable = {};

myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

console.log([...myIterable]);  // [1,2,3];

/**
 * Generator函数执行后，返回一个遍历器对象。该对象本身也具有Symbol.iterator属性，执行后返回自身。
 */

function* ggen() {
  //some code
}

var g = ggen();

console.log(g[Symbol.iterator]() === g)


