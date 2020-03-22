//防抖  防抖：你狂点按钮也没有，等你冷静下来事件才会触发。

//1
function debounce(fn, delay = 2000) {
    let timer = null;
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null;
        }, delay)
    }
}

debounce(function () {
    console.log('防抖')
})()

//2

function debounce1(func, wait) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;
        if (timeout) clearTimeout(timeout); //如果定时器被定义，在这一步清除定时器
        timeout = setTimeout(() => { //重新定义定时器，在指定时间执行回调函数
            func.apply(this, args) //绑定回调函数的执行上下文，将this固定
        }, wait)
    }
}

debounce1(function () {
    console.log(this)
}, 5000)()


/**
 * 节流 节流：游戏里面的技能冷却功能。
 */

 //1
function throrrle(func, wait) {
    let previous = 0; //利用闭包，该变量不会销毁
    return function () {
        let now = Date.now(); //获取当前时间
        let context = this;
        let args = arguments;
        if (now - previous > wait) { //如果当前时间-常量pervious > 等待时间执行下面代码
            func.apply(context, args); //绑定回调函数的执行上下文
            previous = now; //更改常量为当前变量
        }
    }
}

//2
function throttle(func,wait){
    let timeout;
    return function() {
        let context = this;
        let args =arguments;
        if(!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                func.apply(context,args)
            }, wait);
        }
    }
}



function test() {
    let a = 0;
    return function () {
        setInterval(() => {
            console.log(a)
            a++;
        }, 1000)
    }
}