/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 11:41:53
 * @LastEditTime: 2019-09-18 14:13:46
 * @LastEditors: Please set LastEditors
 */
/**
 * WeakSet是一个构造函数，可以使用new命令，创建WeakSet数据结构
 * 
 * 作为构造函数，WeakSet可以接受一个数组或者类似数组的对象作为参数，(实际上，任何具有Iterable
 * 接口的对象，都可以作为WeakSet的参数。)该数组的所有成员，都会自动成为WeakSet实例对象的成员
 */

 let a = [[1,2,3],[0,1,2,3,4]]
 const ws = new WeakSet(a); //WeakSet数组的成员只能是对象。

 console.log(ws);