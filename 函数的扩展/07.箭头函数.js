/**ES6允许使用箭头函数定义函数 */
var f = v => v;

var f = function (v) {
    return v;
}

/**如果箭头函数不需要参数或者需要多个参数，就使用一个圆括号代表参数部分 */

var f = () => 5;


//等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;

//等同于
var sum = function (num1, num2) {
    return num1 + num2;
}

/**
 * 如果箭头函数的代码块部分多出一条语句，就要使用大括号把它们包起来，并且使用return语句返回
 */

var sum = (num1, num2) => { return num1 + num2 };

/**
 * 由于大括号没解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错
 */
//报错
let getTempItem = id => { id };
//不报错
let getTempItem = id => ({ id })

/**
 * 下面是一种特殊情况，虽然可以运行，但会得到错误的结果
 */
let foo = () => { a: 1 };
foo(); //undefined

/**
 * 上面代码中，原始意图是返回一个对象{a:1}，但是由于引擎认为大括号
 *  是代码块，所以执行了一行语句a:1.这是a可以被解释为语句的标签，因此实际
 * 执行的语句是1；然后函数就结束，没有返回值
 */

let fn = () => void doesNotReturn();

/**
 * 箭头函数可以与变量解构结合使用
 */

const full = ({ first, last }) => first + '' + last


//等同于
function full(person) {
    return person.first + '' + person.last;
};

/**
 * 箭头函数使得表达式更加简洁
 */

const isEven = n => n % 2 === 0;
const square = n => n * n;

/**
 * 上面代只用了两行，就定义了两个简单的工具函数，如果不用箭头函数，可能纪要占用多行，而且还不如现在这样
 * 醒目
 */


/**
 * 箭头函数的一个用处就是简化回调函数
 */

//正常函数写法
[1, 2, 3].map(function (x) {
    return x * x;
});

//箭头函数写法
[1, 2, 3].map(x => x * x);

/**下面是rest参数与箭头函数结合的例子 */

const number = (...nums) => nums;

numbers(1, 2, 3, 4, 5);

//[1,2,3,4,5]

const headAndTail = (head, ...tail) => [head, tail];

headAndTail(1, 2, 3, 4, 5);

//[1,[2,3,4,5]]


/**
 * 
 * 箭头函数
 */


let a = 0;

function aaa() {
    console.log(a);
    let a = 1;
}
aaa();



/**
 * 箭头函数使用注意点
 */

/**
 * 1.函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
 * 2.不可以当做构造函数，也就是说不可以使用new命令，否则会抛出一个错误。
 * 3.不可以使用argumnets 对象，该对象在函数体内不存在。如果要用，可以用reset参数代替.
 * 4.不可以用 yield 命令，因此箭头函数不能用作Generator函数。
 * 
 */


/**
 * this 对象的值是可变的，但是在箭头函数中，它是固定的
 */
function foo() {

    setTimeout(() => {
        console.log('id', this.id);
    }, 100)

}
var id = 21;

foo.call({ id: 42 });

/**
 * 上面代码中，setTimeout的参数是一个箭头函数，这个箭头函数的定义生效在foo函数生成时，而它
 * 真正执行要等到100毫秒后。如果是普通函数，执行时this应该指向全局对象window，这时应该输出21
 * 但是，箭头函数导致this总是指向函数定义生效时所在的对象 (本例是{id:42})，所以输出的是42
 */

/**
 * 箭头函数可以让 setTimeout 里面的this，绑定定义时所在的作用域，而不是指向运行时所在的作用域
 * 
 */

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    setInterval(() => this.s1++, 1000);
    setInterval(function () {
        this.s2++;
    }, 1000);
}


var timer = new Timer();


setTimeout(() => console.log('s1:', timer.s1), 3100);

setTimeout(() => console.log('s2:', timer.s2), 3100);


/**
 * 上面代码中，Timer函数内部设置了两个定时器，分别使用了箭头函数和普通函数。前者
 * 的this绑定定义时所在的作用域  (即Timer函数),或者的this指向运行时所在的作用域
 * 。所以，3100 毫秒之后，Timer.s1被更新了3次，而timer.s2 一次都没更新
 * 
 * 箭头函数可以让this 指向固定化，这种特性很有利于封装回调函数。下面是一个例子，dom事件的
 * 回调封装在一个对象里面
 */

var handler = {
    id: '123456',
    init: function () {
        document.addEventListener('click', event => this.doSomeThing(event.type), false);
    },
    doSomething: function (type) {
        console.log('handling' + type + 'for' + this.id)
    }
}

/**
 * 上面的init方法中，使用了箭头函数 ，这导致这个箭头函数里面的this，总是指向hadler对象。
 * 否则，回调函数运行时。this.doSomeThing 这一行会报错，因为此时this指向document。
 * 
 * this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本
 * 没有自己this，导致内部的this就是外层代码块的this，正因为它没有this，所以也就不能用作
 * 构造函数
 * 
 * 
 * 所以 箭头函数转成ES5的代码如下 
 */
//ES6
function foo() {
    setTimeout(() => {
        console.log('id:', this.id)
    }, 100)
}
//ES5
function foo() {
    var _this = this;

    setTimeout(function () {
        console.log('id:', _this.id)
    }, 100)
}


/**
 * 上面代码中，转换后的ES5版本清楚的说明了，箭头函数里面根本没有自己的this，而是引用外层的this
 */

/**
 * 请问下面代码中有几个this
 */


function foo() {
    return () => () => () => () => console.log('id:', this.id)
}


var f = foo.call({ id: 1 });

var t1 = f.call({ id: 2 })()(); // id: 1
var t2 = f().call({ id: 3 })(); // id: 1
var t3 = f()().call({ id: 4 }); // id: 1

/**
 * 上面代码中，只有一个this，就是函数foo的this，所以t1、t2、t3都输出同样的结果
 * 因为所有的的内函数都是箭头函数，都没有自己的this，它们的this其实都是最外层foo函数的this
 * 
 * 除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：
 * arguments、super、new.target。
 */

function foo() {
    setTimeout(() => {
        console.log('args:', arguments)
    })
}

foo(2, 4, 6, 8);

/**
 * 上面代码中，箭头函数内部的变量arguments,其实是foo的arguments变量。
 * 、另外，由于箭头函数没有自己的this，所以bind方法无效，内部this指向外部的this
 *
 * 长期以来，javascript语言的this对象一直是一个令人头疼的问题，在对象中使用
 * this，必须非常小心。箭头函数绑定this，很大程度解决了这个困扰
 */



