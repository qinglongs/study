/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 17:08:51
 * @LastEditTime: 2019-09-17 17:17:54
 * @LastEditors: Please set LastEditors
 */

/**
 * yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数
 * 该参数就会被当作上一个yield表达式的返回值。
 * *** 由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数时无效的 *****
 */

function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var b = foo(5);
b.next()   // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }

/**
 * 上面代码执行步骤：
 * 1.第一次调用next， yield 得到的值式6，这里x = 5
 * 2.第二次调用next，将上一次yield得到的值变成了12，所以 y = 24。
 * 3.第三次调用next，将上一次yield得到的值变成了13，所以 z = 13。
 * 4.最后return x+y+z  13+24+5 = 42
 */

/**
 * 通过next方法的参数，向Generator函数内部输入值的例子：
 */

function* dataConsumer() {
  console.log('Started');
  console.log(`1.${yield}`);
  console.log(`2.${yield}`);
}

let genObj = dataConsumer();

genObj.next();
genObj.next(1);
genObj.next(2);