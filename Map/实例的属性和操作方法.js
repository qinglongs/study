/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 15:10:20
 * @LastEditTime: 2019-09-18 15:27:24
 * @LastEditors: Please set LastEditors
 */
/**
 * Map结构的属性和操作方法：
 * 
 * ---size属性： **size属性放回Map结构的成员总数**
 * ---Map.prototype.set(key,value) set方法设置键名为key对应键值为value，然后返回整个Map结构，如果key有值，则键值会被更新，否则就新生成该键
 * 
 */

const map = new Map();
map.set('foo', true);
map.set('bar', false);

map.size //2


const m = new Map();

m.set('edition', 6) //键是字符串
m.set(262, 'standard') //键是数值
m.set(undefined, 'nah') //键是undefined

/**
 * **set方法返回的是当前的Map对象，因此可以采用链式写法**
 */

let nmap = new Map()
nmap
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

/**
 * ---Map.prototype.get(key) get方法读取key对应的键值，如果找不到key，返回undefined
 */
const m = new Map();
const hello = function () { console.log('hello') };
m.set(hello, 'hello ES6');
m.get(hello) //hello ES6

/**
 * ---has方法返回一个布尔值，表示某个键是否在当前Map对象之中
 */

const mmap = new Map();

mmap.set('edition', 6);
mmap.set(262, 'standard');
mmap.set(undefined, 'nah');

mmap.has('edition') //true
mmap.has('hahaha') //false

/**
 * ---Map.prototype.delete(key) delete方法删除某个键，返回true。如果删除失败，返回false
 */

const mm = new Map();

mm.set(undefined, 'nah');
mm.set('bar', undefined);

map.size //2

m.has(undefined); //true
m.delete(undefined) //true
m.has(undefined) //false

/**
 * Map.prototype.clear()  clear方法清除所有成员，没有返回值
 */

let map = new Map([
  ['foo', true],
  ['bar', false]
]);

map.size //2
map.clear()
map.size //0
