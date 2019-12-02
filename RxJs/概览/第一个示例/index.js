window.onload = function () {
  /**
   * 注册事件监听的常规写法：
   */

  // var button = document.getElementById('btn');
  // button.addEventListener('click', function () { console.log(this) })

  /**
  * 使用rxjs的写法：
  * **创建一个observable来代替**
  */

  var button = document.getElementById('btn')
  Rx.Observable.fromEvent(button, 'click')
    .subscribe(() => console.log('Clicked!'));
}
