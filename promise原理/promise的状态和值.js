/**
 * **Promise有以下三种状态：**
 * Pending(进行中)
 * Fulfilled(已成功)
 * Rejected(已失败)
 * 状态只能由Pending变为Fulfilled或由Pending变为Rejected，且状态改变后不会发生变化，会一致保持这个状态。
 * 
 * 
 * **Promise的值是指状态改变时传递给回调函数的值**
 * handle函数包括resolve和reject两个参数，它们时两个函数，可以用于改变Promise的状态和传入Promise的值
 */

//这里resolve传入'FULFILLED'就是Promise的值
new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'FULFILLED');
})

/**
 * 定义三个常量，用于标记Promise对象的三种状态：
 */

const isFunction = val => typeof val === 'function';

const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

/***
 * 再为MyPromise添加状态和值,并添加状态改变时的执行逻辑:
 */

class MyPromise {
  constructor(handle) {
    if (!isFunction(handle)) {
      throw new Error('MyPromise must accept a function as a parameter')
    }

    //添加状态：
    this._status = PENDING;
    //promsie的值
    this._value = undefined;

    try {
      handle(this._resolve.bind(this), this._reject.bind(this));
    } catch (err) {
      this._reject(err);
    }
  }

  _resolve(val) {
    if (this._status !== PENDING) return;
    this._status = FULFILLED;
    this._value = val;
  }

  _reject(err) {
    if (this._status !== PENDING) return;
    this._status = REJECTED;
    this.value = err;
  }
}

/**
 * 以上代码就实现了Promise的状态和值的改变
 */