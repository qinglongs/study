/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 15:10:53
 * @LastEditTime: 2019-08-30 15:24:11
 * @LastEditors: Please set LastEditors
 */
function* hellowordGenerator() {
  yield {s:'hello'};
  yield {b:'world'};
  return {c:'ending'};
}

var hw = hellowordGenerator();
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())


/**
 * 调用 Generator 函数，返回一个遍历器对象，代表Generator 函数的内部指针
 * 每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象
 * val属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；
 * done属性是一个布尔值，表示遍历是否结束
 */

