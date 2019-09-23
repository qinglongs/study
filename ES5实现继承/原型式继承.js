/**
 * Object.create()方法创建一个新的对象，使用现有的对象来提供新创建对象的__proto__。
 */

//Object.create()例子：
const person = {
  isHuman: false,
  printIntrduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
  }
}

const me = Object.create(person);

me.name = 'Matthew';
me.isHuman = true;

me.printIntrduction();

//Object.create()实现原理：我觉得有点像工厂模式
function cloneObject(obj) {
  function F() { };
  F.prototype = obj;
  return new F;
};

//原型式继承原理：
let oldObj = { p: 1 };
let newObj = Object.create(oldObj);
// let newObj = cloneObject(oldObj);
oldObj.p = 2;
console.log('oldObj newObj', oldObj, newObj)

/**
 * 优点：兼容性好，最简单的对象继承。
 * 缺点：
 * 1.因为旧对象是实例对象的原型，多个对象共享被继承的的对象，存在篡改的可能。
 * 2.无法传参。
 */