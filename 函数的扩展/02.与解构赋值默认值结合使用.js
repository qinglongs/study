/**
 * 参数默认值可以与解构赋值的默认值，结合起来使用
 */

function foo({ x, y = 5 }) {
    console.log(x, y);
}

foo({}); //undefined 5

foo({ x: 1 }) // 1 5

foo({ x: 1, y: 2 }) // 1 2

foo() //TyppError:cannot read property 'x' of undefined

/**
 * 上面代码只使用了对象的解构赋值默认值，没有使用函数参数的默认值。
 * 只有当函数foo的参数是一个对象时，变量x和y才会通过解构赋值生成。如果
 * 函数foo调用时没提供参数，变量x和y就不会生成，从而报错。通过提供函数
 * 参数的默认值，就可以避免这种情况
 */

function foo({ x, y = 5 } = {}) {
    console.log(x, y);
}

foo() //undefined 5

/**
 * 上面代码指定，如果没有提供参数，函数foo的参数默认为一个空对象
 */

/**
 * 下面是另一个解构赋值默认值的例子
 */

function fetch(url, { body = '', method = 'GET', header = {} }) {
    console.log(method);
}

fetch('http://example.com', {}); // GET

fetch('http://example.com'); //报错

/**
 * 上面代码中，如果函数fetch的第二个参数是一个对象，就可以为它的三个属性
 * 设置默认值。这种写法不能省略第二个参数，如果结合函数的默认值，就可以省略
 * 第二个参数。
 * 这时，就出现了双重默认值
 */


function fetch(url, { body = '', method = 'GET', header = {} } = {}) {
    console.log(method);
}

fetch('http://example.com'); //GET

/**
 * 上面代码中，函数fetch没有第二个参数时，函数参数的默认值就会生效，然后才是解构赋值
 * 的默认值生效，变量method才会取到默认值GET。
 */

/**
 * 作为练习，请问下面两种写法有什么区别
 */

//写法一

function m1({ x = 0, y = 0 } = {}) {
    return [x, y];
}

function m2({ x, y } = { x: 0, y: 0 }) {
    return [x, y]
}

/**
 * 上面两种写法都对函数的参数设定了默认值，区别是写法一函数参数的默认值
 * 是空对象，但是设置了对象解构赋值的默认值；写法二函数参数的默认值是一个有具体
 * 属性的对象，但是没有设置对象解构赋值的默认值。
 */

//函数没有参数的情况
m1()   //[0,0];
m2()   //[0,0]


//x 和 y 都有的情况
m1({ x: 3, y: 8 }) // [3,8]
m2({ x: 3, y: 8 }) // [3,8]

//x 有值，y无值得情况
m1({ x: 3 }) // [0,0]
m2({ x: 3 }) // [3,undefined]

//x和y都无值的情况
m1({ z: 3 }) // [0,0]
m2({ z: 3 }) // [undefined,undefined]