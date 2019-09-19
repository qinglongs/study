/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 17:11:17
 * @LastEditTime: 2019-09-16 17:32:52
 * @LastEditors: Please set LastEditors
 */
/**
 * 1.class内部所有定义的方法都是不可枚举的。
 * 2.class创建的对象prototype指向直接指向类的本身，这与ES5是一致的。
 * 3.必须使用new调用。
 * 4.类不存在提升。
 */

 class Point {
   constructor(x,y){
     this.x = x;
     this.y = y;
   }

   toString(){

   }
 }
console.log(Point.prototype);
console.log( Object.keys(Point.prototype));  //[]
