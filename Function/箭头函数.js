/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 11:21:00
 * @LastEditTime: 2019-09-19 11:32:56
 * @LastEditors: Please set LastEditors
 */
/**
 * ES6允许使"箭头"=>定义函数
 */

var f = v => v;

//等同于

var f = function (v) {
  return v;
}

/**
 * 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分
 */

var f = () => 5

//等同于：
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;

//等同于
var sum = function (num1, num2) {
  return num1 + num2
}

/**
 * 如果箭头函数的代码部分多于一条语句，就要使用大括号将他们括起来，并使用return语句返回
 */

var sum = (num1, num2) => { return num1 + num2 };

/**
 * 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外部加上括号，否则会报错
 */

/**
 * **let getTempItem = id =>{id:id,name:'temp'}; //报错**
 */

let getTempItem = id => ({ id: id, name: 'temp' });  //不报错

/**
 * **箭头函数的一个用处就是简化回调函数**
 */

//正常函数写法：

[1, 2, 3].map(function (item) {
  return item + 1;
})

[1, 2, 3].map(item => item + 1)

/**
 * 下面是rest参数与箭头函数结合的例子
 */

 const numbers = (...nums) =>nums;

 numbers(1,2,3,4,5,6,7,8,9); //[1,2,3,4,5,6,7,8,9]