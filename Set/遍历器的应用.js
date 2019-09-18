/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 11:13:56
 * @LastEditTime: 2019-09-18 11:21:58
 * @LastEditors: Please set LastEditors
 */
/**
 * 扩展运算符(...)内部使用for...of循环，所以也可以用于Set结构value
 */

//例子：

let set = new Set(['red', 'green', 'blue']);
let arr = [...set]; // ['red','green','blue'];

/**
 * 扩展运算符和Set结构相结合，就可以去除数组的重复成员
 */

let arrs = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arrs)];  //[3,5,2]

/**
 * 数组的filter和map也可以间接用于Set了
 */

let s = new Set([1, 2, 3]);
s = new Set([...s].map(x => x * 2)); //[2,4,6]
console.log(s); //Set { 2, 4, 6 }

s = new Set([...s].filter(x => x % 2 === 0));
console.log(s); //Set { 2, 4, 6 }

