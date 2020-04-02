/**
 * ES6引入rest参数(形式为...变量名),用于获取函数的多余参数，这样就不需要使用arguments对象了
 * rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中
 */

function add(...values) {
    let sum = 0;

    for (var val of values) {
        sum += val;
    }
    return sum;
}

add(2, 5, 3) //10

/**
 * 上面代码的add函数是一个求和函数，利用rest参数，可以向该函数传入任意数目的参数
 * 
 * 下面是一个rest参数代替arguments变量的例子
 */


function sortNumber() {
    return Array.prototype.slice.call(arguments).sort()
}

const sortNumber = (...numbers) => numbers.sort();

/**
 * 上面两种写法，比较后可以发现，rest参数的写法更自然也更简洁
 */


/**
 * arguments 对象不是数组，而是一个类似数组的对象。所以为了使用数组的方法，必须使用
 * Array.prototype.slice.call先将其转为数组，
 * 
 * rest参数就不存在这个问题，它就是一个真正的数组，数组特有的方法都可以使用。下面是一个利用rest
 * 参数改写数组push方法的例子
 */

function push(array, ...items) {
    items.forEach(item => {
        array.push(item);
    })
}

var a = [];
push(a, 1, 2, 3, 4, 5, 6);