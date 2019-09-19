/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 15:37:09
 * @LastEditTime: 2019-08-22 17:05:24
 * @LastEditors: Please set LastEditors
 */

function func(num, obj, obj1) {
  num = 10000;
  obj.name = 'aaaa';
  obj1 = { name: 'cccc' }  //这里相当于给obj1重新复制，给obj1分配了一个
}

var num = 1;
obj = { name: 'hahha' }
obj1 = { name: 'llll' }

func(num, obj, obj1);

// console.log(num);  //1
// console.log(obj);  // {name:'aaaa'}
// console.log(obj1); //{name:'llll'}  
