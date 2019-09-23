/**
 * 原型链继承：子类的原型指向父类的实例。
 * 缺点：
 * 1.由于原型链继承共享实例属性的缺点，用于引用类型传值，引用副本实例属性的修改必然会引起其他
 * 副本实例属性的修改，所以不常用。
 * 2.不能向父类构造函数传递参数，很不灵活。
 */

function SuperType() {
  this.color = ['red', 'blue', 'green'];
}
function SubType() { }
SubType.prototype = new SuperType;

//创建第一个子实例：
let instance1 = new SubType();
instance1.color.push('yellow');
console.log(instance1.color); //[ 'red', 'blue', 'green', 'yellow' ]

//创建第二个子实例： 
let instance2 = new SubType();
console.log(instance2.color); //[ 'red', 'blue', 'green', 'yellow' ]

