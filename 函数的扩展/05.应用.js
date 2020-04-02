/**
 * 利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误
 */

function thorwIfMissing() {
    throw new Error('missing parameter');
}

function foo(mustBeProvided = thorwIfMissing()) {
    return mustBeProvided;
}

foo() //Error:Missing parameter

/**
 * 上面代码的foo函数，如果调用的时候还没有参数，就会调用默认值throwIfMissing函数
 * 从而抛出一个错误
 * 
 * 从上面代码还可以看到，参数mustBeProvided的默认值等于throwIfMissing函数的运行结果
 * 这表明参数的默认值不是在定义时执行，而是在运行时执行，如果参数已经赋值，默认值中的
 * 函数就不会执行
 * 
 * 另外，可以将参数默认值设为undefined,表明这个参数是可以省略的
 */

function foo(optional = undefined) {/**... */ };



