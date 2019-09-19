/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 10:41:32
 * @LastEditTime: 2019-09-17 10:58:03
 * @LastEditors: Please set LastEditors
 */

 /**
  * async与generator的区别：async就是 Generator 函数的语法糖。
  * 
  * 1.内置执行器，generator必须靠执行器，async函数自带执行器。
  * 
  * 2.更好的语义：async 和 await比起*和yield，语义更清楚了，async表示函数里
  * 有异步操作，await表示紧跟在后面的表达式需要等待结果。
  * 
  * 3.更广的适用性：co模块约定，yield后面只能是Thunk函数或者Promise对象，
  * 而async函数的await后面可以是Promise对象和原始类型的值（数值，字符串，和布尔值）
  * 
  * 4.返回值是Promise，async函数的返回值是Promise对象，这比Generator函数的返
  * 回值时Iterator 方便很多，我们可以直接用then方法指定下一步操作。
  * 
  * 5.我们可以将async看作多个异步操作，包装成的一个Promise对象，而await命令就是内部then
  * 命令的语法糖。
  */

const readFile = function(fileName){
  return new Promise(function(resolve,reject){
    fs.readfile(fileName,function(error,data){
      if(error) return reject(error);
      resolve(data)
    })
  })
}
// Fenerator写法
const gen = function *(){
  const f1 = yield readFile('/etc/fstab');
  const f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
}

const asyncReadFile = async function(){
  const f1 = await readFile('/etc/fstab');
  const f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
}