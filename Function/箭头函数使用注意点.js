/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 11:33:23
 * @LastEditTime: 2019-09-19 14:29:34
 * @LastEditors: Please set LastEditors
 */
/**
 * 1.函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
 * 2.不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
 * 3.不可以使用arguments对象，该对象在函数体内不存在，如果要用，可以用rest参数代替。
 * 4.不可以使用yield命令，因此箭头函数不能用作Generator函数。
 * **上面四点中，值得注意的是，普通函数中this对象的指向是可变的，但是在箭头函数中，它是固定的**
 * 
 * 
 * **箭头函数的this总是指向函数定义生效时所在的对象**
 * **普通函数是指向运行时所在的作用域**
 */

//例子1：
function foo() {
  setTimeout(() => {
    console.log('id：' + this.id)
  }, 100)
}

var id = 24;
foo.call({ id: 42 });

//例子2：

function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  setInterval(() => this.s1++, 1000);
  setInterval(function () {
    console.log(this); //这里this指向的window
    this.s2++;
  }, 1000)
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100); //3
setTimeout(() => console.log('s2: ', timer.s2), 3100); //0

/**
 * 上面代码中，Timer函数内部设置了两个定时器，分别使用了箭头函数和普通函数。
 * 前者的this绑定定义所在的作用域(即Timer函数)后者的this指向运行时所在的作用域(即全局对象)
 * 所以，3100毫秒之后，timer。s1被更新了3次，而timer。s2一次都没更新
 * 
 * 箭头函数可以让this指向固定化，这种特性很有利于封装回调函数。下面是一个例子，DOM事件
 * 的回调函数封装在一个对象里面
 */

var hanlder = {
  id: '123456',
  init: function () {
    document.addEventListener('click', event => this.doSomeThig(event.type), false);
  },
  doSomeThig: function (type) {
    console.log('Handling' + type + 'for' + this.id)
  }
}

/**
 * 上面代码的init方法中，使用了箭头函数，这导致这个箭头函数里面的this，总是指向hanlder对象
 * 否则，回调函数运行是，this.domSometThing这一行会报错，因为此时this指向document对象
 * 
 * this指向的固化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this
 * 导致内部的this就是外层代码块的this。正因为它没有this，所以也就不能用作构造函数。
 */

/**
 * **箭头函数转成ES5的代码如下**
 * 下面代码中，转换后的ES5版本清除的说明了，箭头函数里面根本没有自己的this，而是外层引用的this
 */
//ES6
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100)
}

//ES5
function foo() {
  var _this = this;
  setTimeout(function () {
    console.log('id:', _this.id);
  }, 100)
}


//例子 下面的代码有几个this

function foo() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      }
    }
  }
}

var f = foo.call({ id: 1 });
var t1 = f.call({ id: 2 })()(); // id: 1
var t2 = f().call({ id: 3 })(); // id: 1
var t3 = f()().call({ id: 4 }); // id: 1

/**
 * 上面代码中，只有一个this，就是函数foo的this，所以t1、t2、t3都输出同样的结果。
 * 因为所有的内层函数都是箭头函数，都没有自己的this，它们的this其实都是最外层foo的this
 * **除了this， arguments、super、new.target这三个变量都不存在**
 */

function foo() {
  setTimeout(() => {
    console.log('args：', arguments)
  }, 100)
}

foo(1, 2, 3, 4, 5, 6);  //args：[1,2,3,4,5,6]

/**
 * 上面代码中，箭头函数内部的变量arguments，其实是foo的arguments变量。
 * 
 * 另外，由于箭头函数没有自己的this，所以也不能用call()、apply()、bind()这些方法改变this指向
 */

//例子：

(function () {
  return [
    (() => this.x).bind({ x: 'inner' }) //['outer]
  ];
}).call({ x: 'outer' })

/**
 * 上面的例子，箭头函数没有自己的this，所以bind方法无效，内部的this指向外部的this
 */