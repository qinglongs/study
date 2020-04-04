/**
 * 由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了
 */


//ES5写法

function f(x, y, z) {
    //.....
}
var args = [0, 1, 2];

//ES6写法

function f(x, y, z) {
    //...
}

let args = [0, 1, 2];

f(...args);

/**
 * 下面是扩展运算符取代apply方法的一个实际的例子，应用Math.max方法，简化求出
 * 一个数组的最大元素写法
 */

//ES5写法
Math.max.apply(null, [14, 3, 77]);

//ES6 的写法
Math.max(...[14, 3, 77]);

//等同于
Math.max(14, 3, 77);

/**
 * 上面函数中，由于javascript不提供求数组最大元素的函数，所以只能用Math.max
 * 函数，将数组转为一个参数序列，然后求最大值。有了扩展运算符以后，就可以直接用
 * Math.max了
 */

/**
 * 另一个例子是通过push函数，将一个数组添加到另一个数组的尾部
 * 
 */

// ES5 写法

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];

Array.prototype.push.apply(arr1, arr2);


//ES6写法
let arr1 = [0, 1, 2];
let arra2 = [3, 4, 5];

arr1.push(...arr2);

/**
 * 上面代码的ES5写法中，push方法的参数不能是数组，所以只好通过apply
 * 方法变通使用push方法。有了扩展运算符，就可以直接将数组传入push方法
 */

/**
 * 下面是另一个例子
 */

//ES5
new (Date.bind.apply(Date, [null, 2015, 1, 1]));

//ES6
new Date(...[2015, 1, 1]);


