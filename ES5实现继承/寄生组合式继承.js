/**
 * 原理：
 * 1.使用借用构造函数(call)来继承父类this声明的属性/方法。
 * 2.通过寄生式封装函数设置父类prototype为子类prototype的原型来继承父类的prototype声明的属性/方法。
 */

function fatherFn(...arr) {
  this.some = '父类的this属性';
  this.params = arr;
}

fatherFn.prototype.fatherFnSome = '父类原型对象的属性或者方法';

function sonFn() {
  fatherFn.call(this, '借用构造继承');
  this.obkoro1 = '子类的this属性';
}

function inheritPrototype(son, father) {
  const fatherFnPrototype = Object.create(father.prototype);
  son.prototype = fatherFnPrototype;
  son.prototype.constructor = son;
}

inheritPrototype(sonFn, fatherFn);
sonFn.prototype.sonFnSome = '子类原型的属性或者方法';

const sonFnInstance = new sonFn();
console.log('寄生组合式继承子类实例', sonFnInstance);