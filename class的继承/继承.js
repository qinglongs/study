/**
 * Class可以通过extends关键字来实现继承，这比ES5通过原型链实现继承，要清晰和方便很多
 * 原理和寄生组合继承一致
 */

class Point {

}

class ColorPoint extends Point {

}


function ES5Object(){
  this.name='aaa';
  this.age='123';
}

function ES5ChildObject(){

}

ES5ChildObject.prototype = new ES5Object();

const es5obj = new ES5ChildObject();

console.log(es5obj.name);
console.log(es5obj.age);