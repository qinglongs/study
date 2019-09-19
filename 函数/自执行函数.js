/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 17:59:49
 * @LastEditTime: 2019-08-23 11:45:59
 * @LastEditors: Please set LastEditors
 */

// 立即调用的函数表达式

// 在javascript里，任何function在执行的时候都会创建一个执行上下文，因为function声明的变量和function
// 有可能只在该function内部，这个上下文，在调用function的时候，提供了一种简单的方式来创建自有变量或私有子function

function makeCounter() {
  var i = 0;  //自有变量
  function childFunc() { //私有子function
    console.log(++i);
  }
  return childFunc;
}

var counter = makeCounter();

counter();
counter();
counter();

// 在这里，counter和counter1是两个不同的实例，所以他们内部的变量对象没有任何关系。
var counter1 = makeCounter();

counter1();
counter1();
counter1();

window.onload = function () {
  var div = document.getElementsByTagName('div');
  for (var i = 0; i < div.length; i++) {
    (function(num){
      div[i].onclick = function(){
        console.log(num);
      }
    })(i)
  }
}


