/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 16:41:49
 * @LastEditTime: 2019-08-22 17:05:15
 * @LastEditors: Please set LastEditors
 */

var a = { name: 'aaa', sayName: function () { console.log(this.name) } };

var b = { name: 'bbb' };

// a.sayName.bind(b)    //bind不会主动执行

// a.sayName.apply(b);  //参数数组表示

// a.sayName.call(b);   //参数用逗号隔开的形式