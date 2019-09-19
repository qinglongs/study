/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 11:33:45
 * @LastEditTime: 2019-08-22 11:54:10
 * @LastEditors: Please set LastEditors
 */
 // 栈是后进先出没只允许在栈顶读取或者删除数据：
 function Stack() {
  this.space = [];
}
// 入栈：
Stack.prototype.push = function (val) {
  this.space.push(val)
}
// 出栈：
Stack.prototype.pop = function () {
  this.space.pop()
}
// 清空栈：
Stack.prototype.clear = function () {
  this.space = []
}
// 读取整个栈
Stack.prototype.read = function () {
  return this.space;
}
// 读取栈顶
Stack.prototype.readTop = function () {
  return this.space[space.length - 1];
}
