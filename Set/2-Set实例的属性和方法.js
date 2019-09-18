/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 10:22:37
 * @LastEditTime: 2019-09-18 10:37:17
 * @LastEditors: Please set LastEditors
 */
/**
 * Set结构有以下属性：
 * ---Set.prorotypr.constructor:构造函数，默认就是Set函数。
 * ---Set.prototype.size: 返回Set实例的成员总数。
 * 
 * Set实例的方法分为两大类：操作方法(**用于操作数据**)和遍历方法(**用于遍历成员**):
 * 
 * ---Set.prototype.add(value): 添加某个值，返回Set结构本身。
 * ---Set.prototype.delete(value): 删除某个值，返回一个布尔值，表示返回是否成功。
 * ---Set.prototype.has(value): 返回一个布尔值，表示该值是否为Set的成员
 * ---Set.prototype.clear(value): 清除所有成员，没有返回值。
 */

//实例：

const s = new Set();

s.add(1).add(2).add(2);

console.log(s.size); //size = 2 因为2被添加了2此

console.log(s.has(2)); //true

console.log(s.has(1)); //true

console.log(s.has(3)); //false

console.log(s.delete(2)); //true

console.log(s.has(2)); //false 因为2被删除了


/**
 * 下面代码是一个对比，看看判断是否包括一个键上面，Object结构和Set结构
 * 的写法不同
 */

//Object写法：

const properties = {
  'width': 1,
  'height': 1
}

if (properties[someName]) {
  //do something...
}

//Set写法：

const set = new Set();

set.add('width');
set.add('height');

if(set.has(someName)){
  // do something...
}
