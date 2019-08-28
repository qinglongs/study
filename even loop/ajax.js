/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 11:45:55
 * @LastEditTime: 2019-08-28 17:09:34
 * @LastEditors: Please set LastEditors
 */
$.ajax({
  type: "get",
  url: "https://jsonplaceholder.typicode.com/todos/1",
  dataType: "jsonp",
  success: function (response) {
    console.log(response)
  }
});

console.log('aaaa');

/**
 * 执行步骤：
 * 1.ajax进入event Table，注册回调函数success。
 * 2.执行console.log('aaaa')
 * 3.ajax事件完成，回调函数success进入event queue。
 * 4.主线程从event queue 读取回调函数success执行。 
 */
