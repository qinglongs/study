/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 14:54:27
 * @LastEditTime: 2019-08-22 15:17:05
 * @LastEditors: Please set LastEditors
 */
console.time();
var a = [];
for (var i = 0; i < 10000000; i++) {
  a.push(i);
}
console.log(a);
console.timeEnd()

console.time();
var b = [];
for (var i = 0; i < 10000000; i++) {
  Array.prototype.push.apply(b, [i]);
}
console.log(b);
console.timeEnd()