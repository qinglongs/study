/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 15:50:52
 * @LastEditTime: 2019-09-19 17:50:32
 * @LastEditors: Please set LastEditors
 */
/**
 * Map转为数组
 */ 

const map = new Map([
  [1, 'a'],
  [2, 'b'],
  [3, 'c']
])

console.log([...map])

/**
 * 将数组转为Map
 * **将数组传入Map构造函数，就可以转为Map**
 */

new Map([
  [true, 7],
  [{ foo: 3 }, ['abc']]
])

/**
 * Map转为对象
 * **如果所有Map的键都是字符串，它可以无损的转为对象**
 */

function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k, v] of strMap) {
    obj[JSON.stringify(k)] = v
  }
  return obj;
}

const myMap = new Map([
  [{ a: 1 }, true],
  [{ b: 1 }, false]
])

console.log(strMapToObj(myMap));

/**
 * 对象转为Map
 */

function objToMap(obj) {
  let map = new Map();
  for (let k of Object.keys(obj)) {
    map.set(k, obj[k]);
  }
  return map;
}

console.log(objToMap({yes: true, no: false})) //Map { 'yes' => true, 'no' => false }

