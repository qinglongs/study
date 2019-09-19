/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 10:34:55
 * @LastEditTime: 2019-08-28 14:18:25
 * @LastEditors: Please set LastEditors
 */

function Proto() {
  this.name = 'a';
}

console.log(Proto.prototype);

Proto.prototype = {
  constructor:Proto,
  a: 1,
  sayName: function () {
    console.log(this.name);
  }
}

var protoObj = new Proto();

var protoObj1 = new Proto();
protoObj1.a = 2;
console.log(protoObj.a); //1
console.log(protoObj1.a); //2

delete protoObj1.a;
console.log(protoObj1.a); //1 删除实例的属性

