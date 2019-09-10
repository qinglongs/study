/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-10 14:45:17
 * @LastEditTime: 2019-09-10 16:54:17
 * @LastEditors: Please set LastEditors
 */

/**
 * 发布订阅模式实现思路：
 * 1.创建一个对象。
 * 2.在该对象上创建一个缓存列表(调度中心)。
 * 3.on方法渠道arguments里第一个当作event，根据event值去执行对应缓存列表中的函数
 * (发布者发布时间到调度中心，调度中心处理代码)
 * 4.off方法可以根据event值取消订阅(取消订阅)。
 * 5.once方法只监听一次，调用完毕后删除缓存数据(订阅一次)。 
 */

//  实现on和 emit方法：

// 公众号对象：
let eventEmitter = {}

// 缓存列表，存放event及fn
eventEmitter.list = {}

// 订阅
eventEmitter.on = function (event, fn) {
  let _this = this;
  // 如果对象中没有对应的event值，也就是说明没有订阅过，就给event创建个缓存列表。
  // 如果对象中有对应的event值，吧fn添加到对应的event缓存列表里。
  (_this.list[event] || (_this.list[event] = [])).push(fn);
  return _this;
}

// 发布
eventEmitter.emit = function () {
  var _this = this;
  // 第一个参数是对应的event值，直接用数组的shift方法取出。
  let event = [].shift.call(arguments);  //arguments是函数内部的固有属性
  const fns = _this.list[event];
  
  // 如果缓存列表里没有fn就返回false
  if (!fns || fns.length === 0) {
    return false;
  }
  // 遍历event值对应的缓存列表，依次执行fn
  // arguments已经被shift一次，只剩下第二个参数
  fns.forEach(fn => {
    fn.apply(_this, arguments)
  });
  return this;
}

// 用户1订阅了：
function user1 (content) {
  console.log('用户1订阅了:', content);
};

// 用户2订阅了：
function user2 (content) {
  console.log('用户2订阅了:', content);
};

// 订阅
eventEmitter.on('article', user1);
eventEmitter.on('article', user2);

eventEmitter.emit('article', 'Javascript 发布-订阅模式');

// console.log(eventEmitter);