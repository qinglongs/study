/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 11:53:00
 * @LastEditTime: 2019-08-28 15:17:07
 * @LastEditors: Please set LastEditors
 */

function Parent() {
  this.name = 'parent';
}

Parent.prototype = {
  constructor: Parent,
  sayName: function () {
    console.log(this.name);
  }
}

function Child() {
  this.name = 'child';
}

Child.prototype = new Parent();  //等于是 Child.prototype.__proto__ === Parent.prototype 实现了继承

// Child.prototype.__proto__ -> Parent.prototype -> Parent.prototype.__proto__ -> Object.prototype  

console.log(Child.prototype.__proto__ === Parent.prototype && Parent.prototype.__proto__ === Object.prototype)  //true

var test = new Child();

console.log(test.name);

// 将一个构造函数实例化出来的对象赋值给另外一个构造函数的原型，相当于将这个实例化的对象的所有属性和方法都拿给了这个构造函数的原型对象。