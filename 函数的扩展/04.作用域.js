/**
 * 一旦设置了参数的默认值，函数进行初始化时，参数就会形成一个单独的作用域(context)
 * 等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，时不会出现的
 */

const x = 1;

function foo(x, y = x) {
    console.log(y)
}

foo(2); //2

/**
 * 上面代码中，参数y的默认值等于变量x。调用函数f时，参数形成一个单独的作用域。在这个作用域里面
 * 默认值变量x指向第一个参数x，而不是全局变量x，所以输出是2bundleRenderer.renderToStream
 * 
 * 看看下面的例子
 */

let x = 1;

function f(y = x) {
    let x = 2;
    console.log(y);
}

f()

/**
 * 上面代码中，函数f调用时，桉树y=x形成一个单独的作用域。这个作用域里面，变量x本身没有定义，所以指向
 * 外层的全局变量x，函数调用时，函数体内部的局部变量x影响不到默认值变量x
 * 
 * 如果此时，全局变量x不存在，就会报错
 */

function f(y = x) {
    let x = 2;
    console.log(y);
}

f() //x is undefined


let x = 0;

function foo(x = x) {
    console.log(x)
}

/**
 * 上面代码中，参数x=x形成一个单独的作用域。实际执行的是 let x = x，由于暂时性死区的原因
 * 这行代码会报错 x为定义
 */


/**
 * 如果参数的默认值是一个函数，该函数的作用域也遵守这个规则
 */

let foo = 'outer'

function bar(func = () => foo) {
    let foo = 'inner'
    console.log(func());
}

bar() //outer

/**
 * 上面代码中，函数bar的参数func的默认值是一个匿名函数，返回值为变量foo。函数
 * 参数形成一个单独的作用域里面，并没有定义变量foo，所以foo指向外层的全局变量foo
 * 因此输出outer
 */

/**
 * 如果写成下面，则会报错
 */

function bar(func = () => foo) {
    let foo = 'inner';
    console.log(func());
}


bar() // foo is not defined

/**
 * 上面代码中，匿名函数里面的foo指向函数外层，但是函数外层并没有声明变量foo，所以
 * 就报错了
 */

/**
 * 下面是一个复杂的例子
 */

let x = 1;

function foo(x, y = function () { x = 2 }) {
    var x = 3;
    y();
    console.log(x);
}

foo() //3

x  //1

/**
 * 上面代码中，函数foo的参数形成一个单独作用域。这个作用域里面，首先声明了变量x，然后声明了变量y
 * y的默认值时一个匿名函数。这个匿名函数内部的变量x，指向同一个作用域的第一个参数x。函数foo内部又
 * 声明了一个内部变量x，该变量与第一个参数x由于不是同一个作用域，所以不是同一个变量，因此执行y后，内部
 * 变量x和外部全局变量x的值都没变
 * 
 * 如果将var x = 3 的var去除，函数foo的n内部变量x就指向第一个参数x，与匿名函数内部的x是一致的，所以最后输出
 * 的就是2，而外层的全局变量x依然不受影响
 */

var x = 1;
function foo(x, y = function () { x = 2 }) {
    x = 3;
    y();
    console.log(x);
}

foo() //2
x //1

