/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 14:29:46
 * @LastEditTime: 2019-09-19 14:40:03
 * @LastEditors: Please set LastEditors
 */
/**
 * 由于箭头函数使得this从‘动态’变成‘静态’，下面两个场合不应该使用箭头函数
 */

//第一个场合是定义对象的方法，且该方法内部包含this。

const cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
  }
}

/**
 * 上面代码中，cat.jumps()方法是一个箭头函数，这是错误的。调用cat.jumps()时。
 * 如果时普通函数，该方法的this指向cat；如果上面这种箭头函数，使得this指向全局对象，因此
 * 不会得到预期结果。这是因为对象不构成单独的作用域，导致jumps箭头函数定义时的作用域就是
 * 全局作用域
 */

//第二个场合时需要动态this的时候，也不应该使用箭头函数。

window.onload = function () {
  var button = document.getElementById('press')
  button.addEventListener('click', () => {
    this.classList.toggle('on');
  })
}

/**
 * 上面代码运行时，点击按钮会报错，因为button的监听函数是一个箭头函数，导致里面的this就是i
 * 全局对象。如果改成普通函数，this就会动态指向被点击的按钮对象
 */

 /**
  * 另外，如果函数体很复杂，有许多行，或者函数体内有大量的读写操作，不单纯为了计算值，这
  * 时也不应该使用箭头函数，而是要使用普通函数，这样可以提高代码可读性。
  */