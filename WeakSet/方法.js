/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 14:13:57
 * @LastEditTime: 2019-09-18 14:27:05
 * @LastEditors: Please set LastEditors
 */


/**
 * WeakSet结构有以下三个方法：
 * ---WeakSet.prototype.add(value):向WeakSet添加一个新成员。
 * ---WeakSet.prototype.delete(value):清除一个指定成员。
 * ---WeakSet.prototype.has(value):返回一个布尔值，表示某个值是否在WeakSet实例之中。
 * **WeakSet没有size属性，没有办法遍历它的成员**
 */

//例子：
const ws = new WeakSet();

const obj = {};
const foo = {};

window.onload = function () {
  ws.add(window);
  ws.add(obj);

  ws.has(window); //true
  ws.has(foo); //false

  ws.delete(window);
  ws.has(window) //false
}


/**
 * WeakSet用处：
 * **储存一个DOM节点，而不用担心这些节点从文档移除时，会引发内存泄漏**
 * **下面是WeakSet的另外一个例子**
 */

const foos = new WeakSet();

class Foo {
  constructor() {
    foos.add(this)
  }
  method() {
    if (!foos.has(this)) {
      throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！')
    }
  }
}

const newFoo = new Foo();

newFoo.method()



