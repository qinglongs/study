/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 16:02:10
 * @LastEditTime: 2019-09-17 17:41:12
 * @LastEditors: Please set LastEditors
 */


/**
 * 由于Genetrator函数返回的遍历器对象，只有调用next方法才会执行下一个内部状态，
 * 所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志。
 * 
 * 遍历器对象next方法运行逻辑如下：
 * 
 * 1.遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的
 * 对象的value属性值。
 * 2.下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
 * 3.如果没有再遇到新的yield表达式，就一直运行到函数结束，直到遇到return语句为止，并将return语句后面的表达式的值
 * 作为返回的对象的value属性值。
 * 4.如果该函数没有return语句，则返回的对象的value属性值为undefined。
 * 5.yield表达式只能用在Generator函数里面，用在其他函数内部会报错。
 * 6.yield表达式如果要用在另一个表达式之中，必须放在圆括号里面。
 * 7.yield表达式用在赋值表达式右边或用过函数参数，可以不加括号。
 * 
 * **需要注意的是，yield表达式后面的表达式，只有当调用next方法，内部指针指向该语句时才会执行，等于为javascript提供了手动的惰性求值**
 */

// 例子：

function* gen() {
  yield 123 + 456;
}
let g = gen();
console.log(g.next()); //{ value: 579, done: false }
console.log(g.next()); //{ value: undefined, done: true }


// 例子1：

var arr = [1, [2, 3], 4, [5, 6]];

// let flat = function* (a) {
//   a.forEach(function (item) {  //这里会报错，因为在foreach函数的回调里面使用了yield关键字。
//     if (typeof item !== 'unmber') {
//       yield * flat(item);
//     } else {
//       yield item;
//     }
//   })
// } 


let flat = function* (a) {
  var len = a.length;
  for (let i = 0; i < len; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);  //这里使用了yield*关键字，作用是在Generator函数内部调用其他的Generator函数，需要加*号
    } else {
      yield item;
    }
  }
}

var f = flat(arr);

console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());


// for (var f of flat(arr)) {
//   console.log(f);
// }

