/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 09:49:34
 * @LastEditTime: 2019-09-17 09:53:14
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