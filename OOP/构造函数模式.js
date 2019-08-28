/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 10:13:52
 * @LastEditTime: 2019-08-28 10:34:29
 * @LastEditors: Please set LastEditors
 */
function Obj() {
  this.name = 'aaa';
  this.box = 'ccc';
  this.sayName = function () {
    console.log(this.name);
  }
}


var a = new Obj();
var b = new Obj();
console.log(a.sayName === b.sayName);  //false 不是同一个指针

/**
 *缺点: 每实例化一个对象，都会创建一个新的对象，其内部的方法和属性都不是指向同一个指针。
 *解决方法：将对象内部的方法声明在外部，然后内部引用，但是这样又没有封装性可言了。
 */
