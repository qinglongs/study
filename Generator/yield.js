/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 15:23:48
 * @LastEditTime: 2019-08-30 15:35:56
 * @LastEditors: Please set LastEditors
 */
/**
 *yield表达式就是暂停标志 
 *遍历器next方法的运行逻辑如下：
 * 1.遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，
 * 作为返回的对象的value属性值。
 * 2.下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
 * 3.如果调用next方法没有遇到yield表达式，就一直运行到函数结束，直到return语句为止，
 * 并将return 语句后面的表达式作为返回对象的value属性值
 * 3.如果没有遇到return语句，则返回对象的value属性值为undefined。
 * 4.yield后面的表达式，只有当调用next方法，内部指针指向该语句时才会执行，相当于为javascript提供了惰性求值的语法功能。
 */

function* gen() {
  yield 123 + 456;
}

//  函数gen中 yield后面的表达式不会立即求值，只会在next方法将指针移到
//  这一句时，才会求值。