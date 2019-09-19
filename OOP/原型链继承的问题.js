/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 14:34:08
 * @LastEditTime: 2019-08-28 15:17:05
 * @LastEditors: Please set LastEditors
 */
function Big(){
  this.color = {red:'red',blue:'blue',black:'black'}
}

function Small(){

}

Small.prototype = new Big();  //在这里将Big实例化赋值给Small的 prototype 等于就是将new Big()对象内的属性和方法变成了Small的共享属性和方法。

var obj = new Small();
var obj1 = new Small();
var big = new Big();


obj.color.red = 'blue';  //

console.log(big.color);  //{red: "red", blue: "blue", black: "black"}