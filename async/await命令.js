/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 11:32:26
 * @LastEditTime: 2019-09-18 09:55:04
 * @LastEditors: Please set LastEditors
 */
/**
 * 正常情况下，await命令后面是一个Prmise对象，返回该对象的结果，如果不是
 * Promise对象，就直接返回对应的值
 */

async function foo() {
  return await 123 //await 可以去掉,因为await后面跟的不是Promise对象
}

foo().then(res => console.log(res));  //123

/**
 * 上面代码中，await命令的参数是123，这时等同于return 123
 * 
 * 另外一种情况，await命令后面是一个thenable对象（即定义then方法的对象）
 * 那么await会将其等同于Promise对象
 * 
 * 1.这个例子，await命令后面不是一个Promise对象，而是一个Sleep对象的实例。
 * 这个实例不是Promise对象，但是因为其定义了then方法，await会将其视为Promise处理。
 */

class Sleep {
  constructor(timeout) {
    this.timeout = timeout;
  }
  then(resolve, reject) {
    const startTime = Date.now();
    setTimeout(
      () => resolve(Date.now() - startTime),
      this.timeout
    );
  }
}

(async () => {
  const sleepTime = await new Sleep(5000);  //这里，async将sleep类当成了Promise对象处理，所以调用了该对象内部的then方法。
  console.log(sleepTime)
})()


/**
 * async实现程序休眠效果
 */

async function sleep(interval) {
  return await new Promise(resolve => {
    setTimeout(resolve, interval);
  })
}

async function one2FiveInAsync() {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
    await sleep(1000);
  }
}

one2FiveInAsync();

/**
 * await命令后面的Promise对象如果变成reject状态，则reject的参数会被catch
 * 方法的回调函数接收到
 * 
 * 1.await前面没有return，reject方法的参数依然传入了catch方法的回调函数，在这里加上return效果是一样的。
 * 
 */

async function f() {
  await Promise.reject('出错了')
}

f()
  .then(res => console.log(res))
  .catch(err => console.log(err));

/**
 * 2.任何一个await语句后面的Promise对象变为reject状态，那么整个async函数都会中断执行。
 * 3.下面代码中，第二个await语句是不会执行的，因为第一个await语句状态变成了reject。
 */

async function rejectf() {
  await Promise.reject('rejectf出错了')
  await Promise.resolve('hello promise'); //不会执行
}

rejectf()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

/**
 * 我们希望即使前一个异步操作失败，也不要中断后面的异步操作，这时可以
 * 将第一个await放在try...catch结构里面，不管这个异步操作是否成功，第二个
 * await都会执行
 */

//  方法1：
async function tryf() {
  try {
    await Promise.reject('tryf出错了')
  } catch (e) {

  }
  return await Promise.resolve('就算前一步出错，我也能执行');
}

tryf().then(res => console.log(res))

//  方法2：

async function catchf() {
  await Promise.reject('catchf出错了')
    .catch(e => console.log(e));
  return await Promise.resolve('hello world');
}

catchf().then(v => console.log(v));