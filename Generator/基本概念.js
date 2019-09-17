/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 15:48:29
 * @LastEditTime: 2019-09-17 17:36:02
 * @LastEditors: Please set LastEditors
 */
/**
 * Generator函数是ES6提供的一种异步编程解决方案，语法与传统函数不同，Geneator函数有多种
 * 理解角度。语法上，首先可以把他理解成：
 * 1.Generator函数是一个状态机，封装了多个内部状态。
 * 2.是一个对象生成函数，返回的遍历器对象，可以依次遍历Generator函数内部的每一个状态。
 */

//  例子：

/**
 * 下面代码定义了一个Generator函数，它内部有两个yield表达式(hello和world)，即该函数
 * 有三个状态：hello、world和return语句(结束执行)
 * 
 * 1.Generator函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号，不同的是，调用
 * Gentrator函数后，该函数并不会执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象
 */

function *helloWorldGenerator(){
  yield 'hello';
  yield 'world';
  return 'ending'; 
}

var hw = helloWorldGenerator();

console.log(hw.next());
console.log(hw.next());
console.log(hw.next());



/**
 * 总结：调用Generator函数，返回一个遍历器对象，代表Generator函数的内部指针。
 * 以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象
 * 。value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；done属性是
 * 一个布尔值，表示是否遍历结束。
 */