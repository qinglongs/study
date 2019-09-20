/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 16:28:27
 * @LastEditTime: 2019-08-22 17:47:55
 * @LastEditors: Please set LastEditors
 */
// 闭包

//闭包的作用域链包含着它自己的作用域，以及包含它的函数的作用域和全局作用域。
// 外部函数在调用后本应该被销毁，但是闭包的存在让我能在外部函数调用之后还能访问到外部函数的变量。

function func() {
  var a = 0;
  function closure() {
    a++
  }
  return closure;
}
// func()()


// 闭包内的this指向问题
var obj = {
  name: 'aaaa',
  sayName: function () {
    return function () {
      return this;  //window
    }
  },
  callback: function (callback) {
    callback(this.name);
  },
  defaultFunc: function () {
    console.log(this);
  }
}

var obj1 = { name: 'obj1' }

obj.sayName()()  //在这里，实际上是在全局作用域调用了闭包内的匿名函数，所以this指向window

obj.callback(function (val) {
  console.log(val);
  console.log(this);  //这里this也是指向window的
})

obj.defaultFunc()   //obj调用该函数，所以执行obj
obj.defaultFunc.apply(obj1)  //这里使用apply改变了这个方法的this执向 指向 obj1


// 除了闭包，在函数里面使用定时器，函数内的变量对象也不会被销毁

function timer() {
  var a = 0;
  var autoTime = setInterval(() => {
    console.log(a);
    a++;
    if (a > 10) {
      clearInterval(autoTime);
    }
  }, 1000)
  console.log('aaaa');  //这里的方法只执行一次
}
timer();


//闭包只能取得包含函数中任何变量的最后一个值

(function lastValue() {
  var arr = [];
  for (var i = 0; i < 100; i++) {
    arr[i] = function(){
      return i;
    }
  }
  console.log(arr[1]());  //所以这里打印出来是100
})()