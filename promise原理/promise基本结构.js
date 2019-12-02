new Promise((resolve,reject)=>{
  setTimeout(resolve,1000,'FULFILLED')
})

/**
 * 构造函数promise必须接受一个函数作为参数，我们称该函数为handle，handle又包含resolve和reject两个参数，它们是两个函数。
 */

 //定义一个判断一个变量是否为函数的方法：

 const isFunction = varible =>typeof varible === 'function';

 /**
  * 定义一个名为MyPromise的Class，它接受一个函数handle作为参数。
  */

  class MyPromise{
    constructor(handle){
      if(!isFunction(handle)){
        throw new Error('MyPromise must accept a function as a parameter')
      }
    }
  }