/**
 * Promise基本结构 
 */
new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'aaaaa')
}).then(res => console.log(res)); //aaaaa

/**
 * 构造函数Promise必须接受一个函数作为参数，我们称该函数为handle
 * handle又包含resolve和reject两个参数，他们是两个函数
*/

//定义一个函数是否为函数的方法：

const isFunction = variable => typeof variable === 'function';

//首先，我们定义一个名为MyPromise的Class，它接受一个函数handle作为参数

class MyPromise {
    constructor(handle) {
        if (!isFunction(handle)) {
            throw new Error('MyPromise must accept a function as a parameter');
        }
    }
}

/**
 * Promsie 状态和值
 * Promise对象存在以下三种状态：
 * Pending(进行中)
 * Fulfilled(已成功)
 * Rejected(已失败)
 * **状态只能由pending变为Fulfilled变为rejected，且状态改变之后不会再发生变化，会一直保存这个状态**
 * **Promise的值是指状态改变时传递给回调函数的值**
 * 上文中的handle函数包含resolve和reject两个参数，他们是两个函数，他们是两个函数，可以用于改变Promise的
 * 状态和传入Promise的值
 */

//例子：

new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'FULFILLED');
})

/**
 * 这里resolve传入的"FULFILLED"就是Promise的值
 * 
 * resolve和reject
 * resolve:将Promise对象的状态从Pending(进行中)变为Fulifilled(已成功)
 * reject:将Promise对象的状态从Pending(进行中)变为Rejected(已失败)。
 * resolve和reject都可以传入任意类型的值作为实参，表示Promise对象成功(fulfilled)和失败(rejected)的值
 */

//设置Promise对象的三种状态：

const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
    constructor(handle) {
        if (!isFunction(handle)) {
            throw new Error('MyPromise must accept a function as a parameter');
        }
        //添加状态：
        this._status = PENDING;

        //Promsie状态改变时需要传递的值:
        this._value = undefined;

        //执行handle
        try {
            handle(this._resolve.bind(this), this._reject.bind(this))
        } catch (error) {
            this._reject(err);
        };
    }
    //添加resolve执行的函数
    _resolve(val) {
        if (this._status !== PENDING) return;
        this._status = FULFILLED;
        this._value = val;
    }

    //添加reject时执行的函数：
    _reject(err) {
        if (this._status !== PENDING) return;
        this._status = REJECTED;
        this._value = err;
    }
}

/**
 * Promsie的then方法
 * peromise.then(onFulfilled,onRejected)
 * **参数可选：onFulfilled或者onRejected都是可选参数**
 * 如果onFulfilled或onRejected不是函数，其必须被忽略。
 * onFulfilled特性：
 * 1.当promise状态变为成功时必须调用，其第一个参数为promise成功状态传入的值(resolve传入的值)。
 * 2.在promsie状态改变前其不可被调用。
 * 3.其调用次数不可超过一次。
 *
 * onRejected特性：
 * 1.当peomsie状态变为失败时调用，其第一个参数为promise失败状态传入的值(reject执行时传入值)。
 * 2.在promise状态改变前其不可被调用。
 * 3.其调用次数不可以超过一次。
 * 
 * **多次调用**
 * then方法必须返回一个新的promise对象
 * promise2 = promise.then(onFulfilled,onRejected);
 * 因此，promise支持链式调用
 * peomsie1.then(onFulfilled,onRejected).then(onFulfilled1,onRejected1);
 * 
 * **这里涉及Promise的执行规则，包括"值的传递"和"错误捕获"机制**
 * 1.如果onFulfilled或者onRejected返回一个值x，则运行下面的Promise解决过程[[Resolve]](promise2, x):
 * a.若x不为promise，则使x直接作为新返回的Promise对象的值，即新的onFulfilled或者onRejected函数的参数。
 * b.若x为Promise，这时后一个回调函数，就会等待该Promise对象(即x)的状态发生变化，才会被调用，并且新的Promise状态和x的
 * 状态相同。
 */

//例子：链式调用then方法

let promsie1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
})

let promsie2 = promsie1.then(res => {
    return '这里返回一个值'
})

promsie2.then(res => {
    console.log(res); //1秒后打印出： 这里返回一个值
})



let promsie3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
})

let promsie4 = promsie3.then(res => {
    return new Promise(resolve => {
        setTimeout(resolve, 2000, '这里返回一个promise');
    })
})

promsie4.then(res => { console.log(res) }); //这里会等待peomise3的状态改变后再输出peomise3的值。



/**
 * 如果onFulfilled或者onRejected抛出一个异常e，则peomsie1必须为失败(Rejected),并返回
 * 失败的值e,例如：
 */

let promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'success');
})

let promise1 = promise.then(res => {
    throw new Error('这里抛出一个异常');
})

promise1.then(res => {
    console.log(error);
}, err => {
    console.log(err);
})

/**
 * 如果 onFulfilled不是函数且promise1状态为成功(Fulfilled),promise2必须变成成功，并返回promise成功的值，例如：
 */

let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'success');
})

let promise2 = promise1.then('这里的onFulfilled本来是一个函数，但现在不是');
promise2.then(res => {
    console.log(res) //success
}, err => {
    console.log(err);
})


/**
 * 
 * 如果 onRejected不是函数，且promise1状态为失败(Rejected),promise2必须变为失败(Rejected)并返回promise1失败的值，例如：
 */

let promise1 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'fail')
})

let promise2 = promise1.then(res => res, '这里onRejected本来是一个函数，但现在不是')
promise2.then(res => {
    console.log(res);
}, err => {
    console.log(err); //fail
})

/**
 * 根据上面的规则，我们来完善MyPromise
 * 修改constructor:增加执行队列
 * 由于then方法支持多次调用，我们可以维护两个数组，将每次then方法注册时的回调函数添加到数组中，等待执行：
 */


class MyPromise {
    constructor(handle) {
        if (!isFunction(handle)) {
            throw new Error('MyPromise must accept a function as a parameter');
        }
        //添加状态：
        this._status = PENDING;

        //Promsie状态改变时需要传递的值:
        this._value = undefined;

        //添加成功回调函数队列：
        this._fulfilledQueues = [];

        //添加失败回调函数队列：
        this._rejectedQueues = [];

        //执行handle
        try {
            handle(this._resolve.bind(this), this._reject.bind(this))
        } catch (error) {
            this._reject(err);
        };
    }
    //添加resolve执行的函数
    _resolve(val) {
        if (this._status !== PENDING) return;
        this._status = FULFILLED;
        this._value = val;
    }

    //添加reject时执行的函数：
    _reject(err) {
        if (this._status !== PENDING) return;
        this._status = REJECTED;
        this._value = err;
    }
    /**
     * @method promise then方法
     * @param {*} onFulfilled 状态为成功时的回调。 
     * @param {*} onRejected  状态为失败时的回调。
     */
    then(onFulfilled, onRejected) {
        const { _value, _status } = this;
        switch (_status) {
            //当状态为pending时，将then方法回调函数加入执行队列等待执行。
            case PENDING:
                this._fulfilledQueues.push(onFulfilled);
                this._rejectedQueues.push(onRejected);
                break;
            //当状态已经改变时，立即调用对应的回调函数
            case FULFILLED:
                onFulfilled(_value);
                break;
            case REJECTED:
                onRejected(_value);
                break;
        }
        //返回一个新的promsie对象：
        return new MyPromise((onFulfilledNext, onRejectedNext) => {

        })
    }
}

/**
         * 那返回的新的Promise对象什么时候改变状态？改变为那种状态呢？
         * 根据上文中的then方法的规则，我们知道返回的新的Promsie对象的状态依赖于当前then方法回调函数执行的情况及
         * 返回值，例如 then的参数是否为一个函数、回调函数执行是否出错，是否为Promise对象。
         * 
         */

// 添加then方法
function then(onFulfilled, onRejected) {
    const { _value, _status } = this
    // 返回一个新的Promise对象
    return new MyPromise((onFulfilledNext, onRejectedNext) => {
        // 封装一个成功时执行的函数
        let fulfilled = value => {
            try {
                if (!isFunction(onFulfilled)) {
                    onFulfilledNext(value)
                } else {
                    let res = onFulfilled(value);
                    if (res instanceof MyPromise) {
                        // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
                        res.then(onFulfilledNext, onRejectedNext)
                    } else {
                        //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                        onFulfilledNext(res)
                    }
                }
            } catch (err) {
                // 如果函数执行出错，新的Promise对象的状态为失败
                onRejectedNext(err)
            }
        }
        // 封装一个失败时执行的函数
        let rejected = error => {
            try {
                if (!isFunction(onRejected)) {
                    onRejectedNext(error)
                } else {
                    let res = onRejected(error);
                    if (res instanceof MyPromise) {
                        // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
                        res.then(onFulfilledNext, onRejectedNext)
                    } else {
                        //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                        onFulfilledNext(res)
                    }
                }
            } catch (err) {
                // 如果函数执行出错，新的Promise对象的状态为失败
                onRejectedNext(err)
            }
        }
        switch (_status) {
            // 当状态为pending时，将then方法回调函数加入执行队列等待执行
            case PENDING:
                this._fulfilledQueues.push(fulfilled)
                this._rejectedQueues.push(rejected)
                break
            // 当状态已经改变时，立即执行对应的回调函数
            case FULFILLED:
                fulfilled(_value)
                break
            case REJECTED:
                rejected(_value)
                break
        }
    })
}