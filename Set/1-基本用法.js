/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 09:55:41
 * @LastEditTime: 2019-09-18 10:22:14
 * @LastEditors: Please set LastEditors
 */

/**
 * 1.Set 类似于数组，但是成员都是唯一的，没有重复的值。
 * 2.Set本身是一个构造函数，用来生成Set数据结构
 * 3.下面代码通过add方法向Set结构加入成员，结果表明Set结构不会添加
 * 重复的值。 
 * 4.向Set加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。Set内部判断两个值是否不同
 * 使用的算法叫做 “Same-value-zero equality”，类似于精确相等运算符(===),主要区别时向Set加入值
 * 时认为NaN等于自身，而精确相等运算符认为NaN不等于自身。
 * 5.两个对象总是不相等的。
 */

const s = new Set();

[1, 2, 1, 3, 4, 4, 5, 3, 5, 7, 7].forEach(item => {
  s.add(item);
});

for (let i of s) {
  console.log(i);  // 1 2 3 4 5 6 7
}

/**
 * 4.Set函数可以接受一个数组(或者具有Iterable接口的其他数据结构)作为参数，用来初始化。
 */

//例1：
const set = new Set([1, 2, 3, 4, 3, 2, 1]);
console.log([...set]) //[1,2,3,4]

//例2：
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size);


//例3：
window.onload = function () {
  const set = new Set(document.querySelectorAll('div'));
  console.log(set.size); //100
  //上面代码等同于：
  const sets = new Set();
  document.querySelectorAll('div')
    .forEach(item => {
      sets.add(item);
    })
  console.log(sets.size) //100

}


//数组去重：
var arr = [1, 1, 1, 2, 3, 4, 4, 4, 5, 3, 3, 3, 5, 4, 4];
console.log([...new Set(arr)]);

//字符串去重：
var str = [...new Set('abbaaccc')];  //["a", "b", "c"]
console.log(str)