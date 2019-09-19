/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 15:27:45
 * @LastEditTime: 2019-09-18 18:01:01
 * @LastEditors: Please set LastEditors
 */
/**
 * Map结构原生提供三个遍历器生成函数和一个遍历方法
 * 
 * ---Map.prototype.keys() 返回键名的遍历器
 * ---Map.prototype.values()返回键值的遍历器
 * ---Map.prototype.entries()返回所有成员的遍历器
 * ---Map.prototype.forEach() 遍历Map的所有成员
 * 
 * **Map的遍历顺序就是插入顺序**
 */

const map = new Map([
  ['F', 'no'],
  ['T', 'yes']
]);

for (let key of map.keys()) {
  console.log(key); //F T
}

for (let value of map.values()) {
  console.log(value); // 'no' 'yes'
}

for (let item of map.entries()) {
  console.log(item); // ['F','no'] ['T','yes']
}

for (let [key, value] of map.entries()) {
  console.log(key, value);
}

/**
 * 上面最后一个例子，表示Map结构的默认遍历器接口(Symbol.iterator属性)，就是entries方法。
 */

console.log(map[Symbol.iterator] === map.entries) //true


/***
 * Map结构转为数组结构，比较快的方法是使用扩展运算符(...);
 */

const m = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
]);

[...m.keys()]; // [1,2,3]
[...m.values()]; // ['one','two','three']
[...map.entries()]; // [[1,'one'], [2, 'two'], [3, 'three']]
[...map] //[[1,'one'], [2, 'two'], [3, 'three']]


/**
 * **结合数组的map、filter方法，可以实现Map的遍历和过滤(Map本身没有map和filter方法)**
 */

const map0 = new Map([
  [1, 'a'],
  [2, 'b'],
  [3, 'c']
]);

const map1 = new Map(
  [...map0].filter(([k, v]) => k < 3)
)
console.log(map1) // Map { 1 => 'a', 2 => 'b' }
const map2 = new Map(
  [...map0].map(([k, v]) => [k * 2, '_' + v])
)
console.log(map2) //Map { 2 => '_a', 4 => '_b', 6 => '_c' }

/**
 * **Map还有一个forEach方法，与数组的forEach方法类似，也可以实现遍历**
 * **forEach方法还可以接受第二个参数，用来绑定this**
 */

const reporter = {
  report: function (key, value) {
    console.log("Key: %s, Value: %s", key, value)
  }
}

/**
 * @param {value} 当前遍历的键值，
 * @param {key} 当前遍历的键名
 * @param {map} 遍历的Map实例
 * @param {object} 绑定this
 */
map0.forEach(function (value, key, map) {
  this.report(key, value)
}, reporter)  //这里将对象reporter绑定到forEach方法内部

