/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 15:13:49
 * @LastEditTime: 2019-09-17 15:21:27
 * @LastEditors: Please set LastEditors
 */
/**
 * 我们通过一个例子，来看async函数与Promise、Generator函数的比较。
 * 
 * 假定某个DOM元素上面，部署了一系列的动画，前一个动画结束，才能开始后一个。
 * 如果当中有一个动画出错，就不再往下执行，返回上一个成功执行的动画的返回值
 */

//  Prmoise:

function chainAnimationsPromise(elem, aniamtions) {
  //变量ret用来保存上一个动画的返回值。
  let ret = null;

  //新建一个空的Promise

  let p = Promise.resovle();

  // 使用then方法，添加所有动画：
  for (let anim of aniamtions) {
    p = p.then(function (val) {
      ret = val;
      return anim(elem);
    });
  }

  //返回一个部署了错误捕捉机制的Promise

  return p.catch(function (e) {

  }).then(function () {
    return ret;
  })
}