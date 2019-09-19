/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 11:35:01
 * @LastEditTime: 2019-08-22 14:24:57
 * @LastEditors: Please set LastEditors
 */
// 利用堆栈实现数组reverse方法。

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var stack = new Stack();
function reverse(arr) {
  for (var i = arr.length - 1; i >=0; i--) {
    stack.push(arr[i]);
  }
  return stack.read();
}

console.log(reverse(arr));
