/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 09:45:32
 * @LastEditTime: 2019-09-19 10:53:10
 * @LastEditors: Please set LastEditors
 */
/**
 * ES6之前，不能为函数的参数指定默认值，只能采用变通的方法。
 * 下面代码检查函数log的参数y有没有赋值，如果没有，则指定默认值为world。
 * **这种写法的缺点在于，如果参数y赋值了，但对应的布尔值为false，则该赋值不起作用。**
 * **就像下面代码的最后一行，参数y等于空字符串，结果被改为默认值**
 * 
 */

function log(x, y) {
  y = y || 'world'
  console.log(x, y);
}

log('hello'); //hello world
log('hello', 'Function'); //hello Function
log('hello', '');  //hello world


/**
 * 为了避免上面这种情况，通常要先判断以下参数y是否被赋值，如果没有，再等于默认值
 */
function newLog(x, y) {
  if (typeof y === 'undefined') {
    y = 'world'
  }
  console.log(x, y);
}

newLog('Hello') // Hello World
newLog('Hello', 'China') // Hello China
newLog('Hello', '') // Hello

/**
 * 1.ES6允许为函数的参数设置默认值，即直接写在参数定义的后面
 * 2.参数变量是默认声明的，所以不能用let或者const再次声明。
 * 3.使用参数默认值时，不能有重名参数。
 * 4.参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值时惰性求值的。
 */

function eslog(x, y = 'world') {
  //let x  =1; //error 这里会报错
  //const x = 2 //error 这里也会报错
  console.log(x, y);
}

eslog('Hello') // Hello World
eslog('Hello', 'China') // Hello China
eslog('Hello', '') // Hello

function foo(x, x, y) {
  //不会报错
}

// function foo(x,x,y=1){
//   //会报错
// }


/**
 * 下面代码中，参数p的默认值时x+1.这时，每次调用函数foo，都会计算x+1，而不是默认p等于100
 */

let x = 99;

function test(p = x + 1) {
  console.log(p)
}

test(); //每次调用此方法都会重新计算x+1
test();
test();

/**
 * 下面代码，只使用了对象的结构赋值默认值，没有使用函数参数的默认值。只有当函数foo的参数
 * 是一个对象时，变量x和y才会通过解构赋值生成。如果函数foo调用时没提供参数，变量x和y就不会
 * 生成，从而报错
 * **通过提供函数参数的默认值，可以避免这种状况**
 * **通常情况下，定义了默认值的参数，应该时函数的为参数**
 */

function fooo({ x, y = 5 }) {
  console.log(x, y);
}

fooo({}); //undefined 5
fooo({ x: 1 }); //1 5
fooo({ x: 1, y: 2 }); //1 2
fooo() //error //Cannot destructure property `x` of 'undefined' or 'null'.

  /**
   * 制定了函数的默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，
   * 指定了默认值后，length属性将失真
   * **如果设置的默认值的参数不是尾参数，那么length属性也不再计入后面的参数了**
   */

  (function (a) { }).length //1
  (function (a, b) { }).length //2
  (function (a, b, c = 1) { }).length //2

