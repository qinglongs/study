/**
 * 复制数组
 */

/**
 * 数组时复合的数据类型，直接复制的话，只是复制了指向底层数据结构的
 * 指针，而不是克隆一个全新的数组
 */

const a1 = [1, 2];

const a2 = a1;

a2[0] = 2;

a1 //[2,2]

/**
 * 上面代码中红，a2并不是a1的克隆，而是指向同一份数据的另一个指针。
 * 修改a2，会直接导致a1的变化
 */

/**
 * ES5只能通过变通的方法来复制数组
 */

const a1 = [1, 2];
const a2 = a1.concat();

a2[0] = 2;

a1 // [1,2]

/**
 * 上面代码中，a1会返回原数组的克隆，再修改a2就不会对a1产生影响
 * 扩展运算符提供了复制数组的简单写法
 */

const a1 = [1, 2];

//1
const a2 = [...a1];

//2
const [...a2] = a1;

/**
 * 上面两种写法，a2都是a1的克隆
 */


/**
 * 合并数组
 * 
 * 扩展运算符提供了数组合并的新写法
 */

const arr1 = ['a', 'b']

const arr2 = ['c']

const arr3 = ['d', 'e']

//ES5的合并数组
arr1.concat(arr2, arr3)
//['a','b','c','d','e']

//ES6的合并数组
[...arr1,...arr2,...arr3];
//['a','b','c','d','e']

/**
 * 不过，这两种方法都是浅拷贝，使用的时候需要注意
 */

const a1 = [{ foo: 1 }];
const a2 = [{ bar: 2 }];

const a3 = a1.concat(a2);
const a4 = [...a1, ...a2];


a3[0] === a1[0];
a4[0] === a1[0];

/**
 * 上面代码中，a3和a4是用两种不同方法合并而成的新数组，但是它们
 * 的成员都是对原数组的引用，这就是浅拷贝。如果修改了引用指向的值，会同步
 * 反映到新数组
 */



/**
 * 与解构赋值结合
 * 
 * 扩展运算符可以与解构赋值结合起来，拥有生成数组
 */

//ES5
a = list[0], rest = list.slice(1);

//ES6
[a, ...rest] = list;

/***
 * 下面是另一些例子
 */

const [first, ...rest] = [1, 2, 3, 4, 5, 6];

first // 1

rest //[2,3,4,5]

const [first, ...rest] = [];
first //undefined
rest //[]


/**
 * 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则报错
 */

const [...butLast, last] = [1, 2, 3, 4, 5];  //报错

const [first, ...middle, last] = [1, 2, 3, 4, 5]; //报错



/**
 * 字符串
 * 扩展运算符还可以将字符串转为真正的数组
 */

[...'hello']
// [ "h", "e", "l", "l", "o" ]

/**
 * 上面的写法，有一个重要的好处，那就是能够正确识别四个字节的Unicode字符
 */




const data =
    [
        {
            id: 1,
            staff_info: [{ name: '王军' }],
            dept_info: [{ name: '王军1' }]
        },
    ]
