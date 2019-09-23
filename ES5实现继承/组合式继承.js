/**
 * 原理：使用原型链将this和prototype声明的属性/方法继承至子类的prototype上，使用借用构造函数来继承
 * 父类通过this声明属性和方法至子类实例的属性上。
 */

 function fatherFn(...arr){
   this.some = '父类的this属性';
   this.params = arr;
 }

 fatherFn.prototype.fatherFnSome = '父类原型上面的属性或者方法';

 function sonFn(){
   fatherFn.call(this,'借用构造继承','第二次调用'); //借用构造函数模式
   this.objoro = '子类的this属性';
 }

 sonFn.prototype = new fatherFn('原型链继承','第一次调用'); //原型链继承模式
 sonFn.prototype.sonFnSome = '子类原型上面的属性和方法';
 const sonFnInstace = new sonFn();

 console.log('组合继承子类实例',sonFnInstace);


 /**
  * 优点：
  * 1.父类通过this声明属性/方法被子类实例共享的问题(原型链继承的问题)每次实例化子类将重新开始初始化
  * 父类通过this声明的属性，实例根据原型链查找规则，每次实例化对象都会。
  * 2.父类通过prototype声明的属性/方法无法继承的问题(借用构造函数的问题。
  * 
  * 缺点：
  * 1.两次调用父类函数(new fatherFn()和fatherFn.call(this,...arg)),造成一定的性能损耗。
  * 2.因调用两次父类，导致父类通过this声明的属性/方法，生成两份。
  * 3.原型链上下文丢失：子类和父类通过prototype声明的属性/方法都存在于子类的prototype上。
  */