window.onload = function () {
  /**
   * 控制一秒钟最多点击一次，普通写法：
   */
  var count = 0;
  var rate = 1000;
  var lastClick = Date.now() - rate;
  var button = document.querySelector('button');
  button.addEventListener('click', () => {
    if (Date.now() - lastClick > rate) {
      console.log(`Clicked ${++count} times`)
      lastClick = Date.now();
    }
  })

  /**
   * 使用RxJs
   */

  Rx.Observable.fromEvent(button, 'click')
    .throttleTime(1000)
    .scan(count => count + 1, 0)
    .subscribe(count => this.console.log(`Clicked ${count} times`))
}

/**
 * 其他流程控制操作符有： filter、delay、debounceTime、take、takeUntil、distinct、distinctUntilchanged等等
 * 
 */