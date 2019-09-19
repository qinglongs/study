/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 09:49:34
 * @LastEditTime: 2019-09-17 09:58:28
 * @LastEditors: Please set LastEditors
 */
function Point(x,y){
  this.x = x;
  this.y = y;
}

Point.prototype = {
  constructor: Point,
  toString:function(){
    return `(${this.x},${this.y})`
  }
}

var point = new Point(2,3);

console.log(point);

class Cpoint extends Point {}

console.log(new Cpoint(5,6));


class Foo {

}

console.log(typeof Foo);  //function

console.log(Foo.prototype.constructor===Foo);  //true

// 上面代码表明，类的数据类型就是函数，类本身指向构造函数
// 使用的时候也是使用new命令跟构造函数的用法完全一致。、

