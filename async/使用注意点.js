/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 14:37:37
 * @LastEditTime: 2019-09-17 18:26:48
 * @LastEditors: Please set LastEditors
 */
/**
 * 1.await命令后面的Promise对象，运行结果有可能是rejected，所以最好把
 * await命令放在try...catch代码块中
 */

//  例：

async function myFunction(){
  try{
    await somethingThatReturnsAPromise();
  }catch(e){
    console.log(e)
  }
}

// 另一种写法：
async function myFunction(){
  await somethingThatReturnsAPromise()
  .catch(e=>console.log(e))
}

//多个await同时触发：
/**
 * 2.多个await命令后面的异步操作，如果不存在继发关系，最好让他们同时触发。
 * 下面代码中，getFoo,和getBar是两个独立的异步操作（即不互相依赖），被写成继发
 * 关系。这些比较耗时，因为只有getFoo完成以后，才会执行getBar，完全可以让他们同时触发。
 */
async function afucntion(){
  let foo = await getFoo();
  let bar = await getBar()
}

// 写法1：

async function afunction(){
  let [foo,bar] = await Promise.all([getFoo(),getBar()]);
}

/**
 * 3.await命令只能用在async函数之中，如果用在普通函数，就会报错。
 * 4.不能再forEach中使用async函数，正确的方法是在for循环中使用。
 */