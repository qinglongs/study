function log(x, y) {
    y = y || 'world';
    console.log(x, y);
}

log('hello');
log('hello', 'world');
log('hello', '');


/**
 * 上面代码检查函数log参数y有没有赋值，如果没有，则指定默认值为word
 * 这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用
 * 就像上面代码的最后一行，参数y等于空字符串，结果被改为默认值
 * 
 * 为了避免这个问题，通常需要先判断一下参数y是否被赋值，如果没有，再等于默认值
 */

if (typeof y === 'undefined') {
    y = 'world'
}

/**
 * ES6允许为函数的参数设置默认值，即直接写在参数定义的后面
 */

function log(x, y = 'world') {
    console.log(x, y);
}

log('hello');
log('hello', 'china');
log('hello', '');


/**
 * 可以看到，ES6的写法比ES5简洁许多，而且非常自然。下面另一个例子
 */

function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

const p = new Point();

p //{x:0,y:0}

/**
 * 除了简洁，ES6的写法还有两个好处：首先，阅读代码的人，可以立刻意识到
 * 哪些参数是可以省略的，不用查看函数体或文档；其次，有利于将来的代码优化
 * 即使未来的版本在对外接口中，彻底拿掉这个参数，也不会导致以前的代码无法运行
 */

/**
 * 参数变量是默认声明的，所以不能用let或者const再次声明
 */

function foo(x = 5) {
    let x = 1; //error
    const x = 2; //error
}

/**
 * 使用参数默认值时，函数不能有同名参数
 */
//不报错
function foo(x, x, y) {

}

//报错
function foo(x, x, y = 1) {

}

/**
 * 另外，一个容易忽略的地方，参数默认值不是传值的，而是每次都重新计算
 * 默认值表达式的值。也就是说，参数默认值时惰性求值的
 */

let x = 99;

function foo(p = x + 1) {
    console.log(p);
}

foo() //100

x = 100;

foo() //101

/**
 * 上面代码中，参数p的默认值是x+1。这时，每次调用函数foo，都会重新计算x+1，而不是
 * 默认p等于100
 */

