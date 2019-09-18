/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 10:47:30
 * @LastEditTime: 2019-09-18 11:13:39
 * @LastEditors: Please set LastEditors
 */
/**
 * Set结构实例有四个遍历方法，可以用于遍历成员：
 * 
 * **Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用Set保存一个回聊函数列表，调用的时候就能保证按照添加顺序调用**
 * 
 * ---Set.prototype.keys():返回键名的遍历器。
 * ---Set.prototype.values():返回键值的遍历器。
 * ---Set.protptype.ebtries()：返回键值对的遍历器。
 * ---Set.prototype.forEach():使用回调函数遍历每个成员。
 */


/**
 * **keys(),values(),entries()这几个方法返回的都是遍历器对象** 
 * 1.由于Set没有键名，只有键值(或者说键名和键值是同一个值)，所以keys方法
 * 和values方法的行为完全一致。
 * 
 * 2.下面代码中entries方法返回的遍历器，同时也包括键名和键值，所以每次输出一个数组，他们的两个
 * 成员完全相等
 */

//例子：

let set = new Set(['red', 'blue', 'green']);

for (let item of set.keys()) {
  console.log(item); //red blue green
}

for (let item of set.values()) {
  console.log(item); //red blue green
}

for (let item of set.entries()) {
  console.log(item); // ['red','red'] ['green','green'] ['blue','blue']
}


/**
 * **Set结构的实例默认可遍历，他的默认遍历生成函数就是values方法**
 * 
 * 这样可以省略values方法，直接用for...of循环遍历Set。+ 
 */

console.log(Set.prototype[Symbol.iterator] === Set.prototype.values) //true

let sset = new Set(['red', 'green', 'blue']);

for (let x of sset) {
  console.log(x); //red green blue
}

/**
 * Set结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值
 * 
 * 下面代码说明，forEach方法的参数就是一个处理函数。该函数的参数与数组的forEach一致
 *  **依次为键值、键名、集合本身**
 * 需要注意的是Set结构的键名就是键值，因此第一个参数与第二个参数的值永远都是一样的
 * 
 * **forEach方法还可以有第二个参数，表示绑定处理函数内部的this对象**
 */

let ssset = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//  ssset.forEach((value,key)=>console.log(key+':'+value));

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 1, 3, 1];

new Set([1,2,3,4,5,6]).forEach((value, key) => console.log(value, key));