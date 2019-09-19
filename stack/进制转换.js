/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 11:57:37
 * @LastEditTime: 2019-08-22 14:28:34
 * @LastEditors: Please set LastEditors
 */

//  将一个十进制的数转换成二进制的数


function transform(num) {
  var newStack = new Stack();
  var temp = num;
  if (temp === 0) {
    return 0;
  }
  while (temp) {
    newStack.push(temp % 2);
    temp = parseInt(temp / 2, 10);
  }

  return newStack.read().reverse().join('');
}

console.log(transform(10))