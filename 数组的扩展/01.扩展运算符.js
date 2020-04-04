/**
 * 含义
 * 
 * 扩展运算符,是三个点 ... 。它好比rest参数的逆运算，将一个数组
 * 转为逗号分隔的参数序列
 */

console.log(...[1, 2, 3]);
//1,2,3

console.log(1, ...[2, 3, 4], 5);

[...document.querySelector('div')]

/**
 * 该运算符主要用于函数调用
 */

function push(array, ...items) {
    array.push(...items);
}

function add(x, y) {
    return x + y;
}

const numbers = [4, 38];

add(...numbers);


/**
 * 上面代码中,array.push(...items)和add(...numbers)这两行，
 * 都是函数的调用，它们都使用了扩展运算符。该扩展运算符讲一个数组，变为参数
 * 序列
 */

/**
 * 扩展运算符与正常的函数参数可以结合使用，非常灵活
 */

function f(v, w, x, y, z) {
}

const args = [0, 1];

f(-1, ...args, 2, ...[3]);


/**
 * 扩展运算符后面还可以放表达式
 */

const arr = [
    ...(x > 0 ? [1, 2, 3, 5] : [])
]

/**
 * 如果扩展运算符后面是一个空数组，则不产生任何效果
 */

[...[],1]

//[1]

/**
 * 注意，只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错
 */

(...[1,2])  //error

console.log((...[1,2])) //error

console.log(...[1, 2]);


/**
 * 上面三种情况，扩展运算符都放在圆括号里面，但是前两种情况会报错
 * 因为扩展运算符所在的括号不是函数调用
 */



