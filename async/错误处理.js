/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 14:22:10
 * @LastEditTime: 2019-09-17 18:02:53
 * @LastEditors: Please set LastEditors
 */

/**
 * 如果await后面的异步操作出错，那么等同于async函数返回的Promise
 * 对象被reject
 * 
 * 下面代码中，async函数f执行后，await后面的Promise对象会抛出一个错误对象
 * 导致catch方法的回调函数被调用，它的参数就是抛出的错误对象。
 */
async function f() {
  await new Promise((resolve, reject) => {
    throw new Error('error')
  })
}

f()
  .then(v => console.log(v))
  .catch(e => console.log(e))

/**
 * 防止出错的方法，也是将其放在try...catch代码块中
 */

async function tryf() {
  try {
    await new Promise((resolve, reject) => {
      throw new Error('tryf出错了')
    })
  } catch (e) {
    console.log(e)
  }
  return await 'tryf成功'
}

tryf()
  .then(v => console.log(v))
  .catch(e => console.log(e));

  /**
   * 如果有多个await命令，可以统一放在try...catch结构中
   */

   async function main(){
     try{
       const val1 = await firstStep();
       const val2 = await secondStep(val1);
       const val3 = await thirdStep(val1,val2);
       console.log('Final:',val3);
     }catch(e){
       console.log(e);
     }
   }