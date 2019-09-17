/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 09:59:07
 * @LastEditTime: 2019-09-17 10:32:28
 * @LastEditors: Please set LastEditors
 */

//  1.类的方法都是定义在类的prototype上面的。
// class Point {
//   constructor() {

//   }
//   toString() {

//   }
//   toValue() {

//   }
// }

// 等同于
class Point {

}
Point.prototype = {
  constructor() {
    return Point
  },
  toString() {

  },
  toValue() {

  }
}

let point = new Point;

console.log(Point === Point.prototype.constructor);
Object.getPrototypeOf(point).a = function(){
  console.log('123')
}
point.a()