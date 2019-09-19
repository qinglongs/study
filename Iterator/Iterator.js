/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 11:49:54
 * @LastEditTime: 2019-09-10 11:41:51
 * @LastEditors: Please set LastEditors
 */

/**
 * 过程：
 * 1.创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上
 * 就是一个指针对象。
 * 2.第一次调用指针对象的next()方法，可以将指针指向数据结构的第一个成员。
 * 3.第二次调用指针对象的next()方法，指针就指向数据结构的第二个成员。
 * 4.不断调用指针对象的next()方法，直到它指向数据结构的结束位置。
 * 5.每一次调用next()，都会返回数据结构的当前成员的信息。就是返回一个包含value和done
 * 两个属性的的对象。其中，value属性是当前成员的值，done是一个布尔值，表示遍历是否结束。
 */

 //  模拟的一个遍历器
function makeIterator(array){
  var nextIndex = 0;
  return{
    next:()=>{
      return nextIndex<array.length
      ?
      {value:array[nextIndex++],done:false}
      :
      {value:undefined,done:true}
    }
  }
}

var i = makeIterator([1,2,3,4,5])

console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());




