window.onload = function () {

  //普通事件：
  var count = 0;
  var button = document.querySelector('button');
  // button.addEventListener('click',()=>console.log(`clicked ${count++} times`))

  //RxJs，我们可以把状态隔离开来：

  Rx.Observable.fromEvent(button, 'click')
    .scan(count => count + 1, 0)
    .subscribe(count => console.log(`Clicked ${count} times`))
}

/**
 * scan 操作符的工作原理于数组reduce类似。它需要一个暴露给回调函数当参数的初始值。每次回调
 * 函数运行后的返回值会作为下次回调函数运行时的参数。
 */