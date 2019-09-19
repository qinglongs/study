/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 10:53:00
 * @LastEditTime: 2019-09-19 11:20:03
 * @LastEditors: Please set LastEditors
 */
/**
 * **参数作用域**
 * **一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。**
 * 下面代码中，参数y的默认值等于变量x。调用函数f时，参数形成一个单独的作用域。在这个作用域里面，默认值变量x执行第一个参数x，而不是全局变量x，所以输出时20
 */
var x = 1;
function f(x, y = x) {
  console.log(y);
}

f(20) //20


var x = 1;
function foo(x = x) {
  //error  相当于let x = x;由于暂时性死区的原因，这行代码会报错‘x未定义’
}

//例子：
/**
 * 下面代码中，函数调用时，参数y=x形成一个单独的作用域。在这个作用域里面，变量x
 * 本身没有定义，所以指向外层的全局变量，所以指向外层的全局变量x。函数调用时，函数体内的局部
 * 变量x影响不到默认值变量x
 */
var x = 1;

function f(y = x) {
  let x = 2;
  console.log(y);
}
f(); //1

// 此时，全局变量x不存在，就会报错
// {
//   function f(y = b) { //b is not defined
//     let x = 2;
//     console.log(y)
//   }
//   f()
// }

/**
 * 下面代码中，参数x=x形成一个单独作用域。实际执行的是 let x =x,
 * **由于暂时性死区的原因，这行代码会报错 x未定义**
 */

{
  var e = 1;
  function foo(x = x) {
    console.log(x)
  }
  foo()
}
/***
 * 如果参数的默认值是一个函数，该函数的作用域也会遵守这个规则
 * 下面代码中，函数bar的参数func默认值是一个匿名函数，返回值为变量foo。函数参数形成的单独
 * 作用域里面，并没有定义foo，所以foo指向外层的全局变量foo，因此输出outer
 */

let v = 'outer';

function bar(func = () => v) {
  let v = 'inner';
  console.log(func())
}

bar() //outer

/**
 * 下面代码中，匿名函数里面的foo指向函数外层，但是函数外层并没有声明变量foo，所以就报错了
 */

//如果写成这样就会报错：
function bar(func = () => y) {
  let y = 'inner';
  console.log(func);
}

bar() // y is not defined

//更加复杂的例子
/**
 * 下面代码中，函数foo的参数形成一个单独作用域。这个作用域里面，首先声明了变量m，
 * 然后声明了变量y，y的值是一个匿名函数，这个匿名函数内部的变量x，指向同一个作用域的
 * 第一个参数m。函数foo内部又声明了一个内部变量x，该变量与第一个参数m由于不是同一个作用域，所以不是同一个
 * 变量，因此执行y后，内部变量x和全局变量x都没变。
 */

var m = 1;
function foo(m, y = function () { m = 2; }) {
  var m = 3;
  y();
  console.log(m);
}

foo();

/**
 * 如果将var e = 3 的var去掉，函数foo的内部变量x就指向第一个参数x，与匿名函数内部的
 * x是一致的，最后输出的就是2，而外层的全局变量x依然不受影响
 * **作用域链的影响**
 */

function foo(e, y = function () { e = 2 }) {
  e = 3;
  y();
  console.log(e); //2
}


