/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 14:40:12
 * @LastEditTime: 2019-09-19 14:54:15
 * @LastEditors: Please set LastEditors
 */
/**
 * 箭头函数内部，还可以使用箭头函数，下面是一个es5语法的多重嵌套函数
 */

function insert(value) {
  return {
    into: function (array) {
      return {
        after: function (afterValue) {
          array.splice(array.indexOf(afterValue) + 1, 0, value);
          console.log(array)
        }
      }
    }
  }
}

insert(2).into([1, 3]).after(1); //[1, 2, 3]

//使用箭头函数改写：

let insert = (value) => ({
  into: (array) => ({
    after: (afterValue) => {
      array.splice(array.indexOf(afterValue) + 1, 0, value)
      console.log(array)
    }
  })
})

insert(2).into([1, 3]).after(1); //[1, 2, 3]

/**
 * 下面是一个部署管道机制的例子，即前一个函数的输出是后一个函数的输入
 */

const pipeLine = (...funcs) =>
  val => funcs.reduce((a, b) => b(a), val)

const plus1 = a => a + 1;
const mult2 = a => a * 2;
const addthenMult = pipeLine(plus1, nult2)

const plus1 = a => a + 1;
const mult2 = a => a * 2;

