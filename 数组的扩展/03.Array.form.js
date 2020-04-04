/**
 * Array.from方法用于将两类对象转为真正的数组:类似数组的对象(array-like object)
 * 和可遍历(iterable)的对象(包括ES6新增的数据结构Set和Map)。
 * 
 * 下面是一个类似数组的对象，Array.from 将他们转为真正的数组*/

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    '3': 'd',
    length: 4
}


//ES5的写法
var arr1 = [].slice.call(Array); // ['a','b','c','d']

//ES6的写法

let arr2 = Array.from(arrayLike);  // ['a','b','c','d']

/**
 * 实际应用中，常见的类似数组的对象时DOM操作返回的NodeList集合
 * 以及函数内部的argumnets对象。Array.from都可以将它们转为真正的数组
 */

let ps = document.querySelectorAll('p');

//NodeList对象
Array.from(ps).filter(p => {
    return p.textContent.length > 100
})

//arguments对象
function foo() {
    var args = Array.from(arguments);
    //.....
}

/**
 * 上面代码中，querySelectorAll方法返回的是一个类似数组的对象
 * 可以将这个对象转为真正的数组，再使用filter方法
 */

/**
 * 只要是部署了Iterator接口的数据结构，Arrayf.from都能将其转为数组  */

Array.from('hello')  // ['h','e','l','l','o']

let nameSet = new Set(['a', 'b']);

Array.from(nameSet);

/**
 * 上面代码中，字符串和Set结构都具有Iterator接口，uyinci可以被
 * Array.from转为真正的数组
 * 如果参数是一个真正的数组，Array.from会返回一个一模一样的新数组
 */
Array.from([1, 2, 3]);

// [1,2,3]

/**
 * askjkklsajdlkjasd
 * 
 * 
 * 
 * 值得提醒的是，扩展运算符(...)也可以将某些数据结构转为数组
 */

//arguments 对象
function foo() {
    const args = [...arguments]
};

//NodeList对象
[...document.querySelectorAll('div')];

/**
 * 扩展运算符背后调用的是遍历器接口，(Symbol.iterator)，如果一个对象
 * 没有部署这个接口，就无法转换。Array.from方法还支持类似数组的对象。所谓类似数组
 * 的对象，本质特征只有一点，即必须有length属性，因此，任何有length属性的对象
 * 都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换
 */

Array.from({ length: 3 })

//[undefined,undefined,undefined]
/**
 * 上面代码中，Array.from返回了一个具有三个成员的数组，每个位置的值都是undefined。扩展运算符转换不了这个
 * 对象
 */


/**
 * 对于还没有部署该方法的浏览器，可以用 Array.prototype.slice方法替代
 * 
 */

const toArray = (() => Array.from ? Array.from : obj => [].slice.call(obj))()

/**
 * Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理
 * 将处理后的值放入返回的数组
 */

Array.from(arrayLike, x => x * x);

//等同于
Array.from(arrayLike).map(x => x * x);

Array.from([1, 2, 3], x => x * x);
//[1,4,9]

/**
 * 下面的例子是取出一组DOM节点的文本内容
 */

let spans = document.querySelectorAll('sapn.name');

let names1 = Array.prototype.map.call(spans, s => s.textContent);

let names2 = Array.from(spans, x => x.textContent);

/**
 * 下面例子将数组中布尔值为false的成员转为0
 */

Array.from([1, , 2, , 3], n => n || 0)
//[1,0,2,0,3]

/**
 * 如果map函数里用到了this关键字
 */