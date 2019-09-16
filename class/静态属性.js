/**
 * 1.静态属性就是class本身的属性， 即 Class.propName,而不是
 * 定义再实例对象(this)上的属性。
 * 2.目前只有这种写法可行，ES6明确规定，Class内部只有静态方法，没有静态属性。
 */

 class Foo {
  // static prop = 1 //再fire fox内运行报错
 }

 Foo.prop = 1;


 class Bar extends Foo {

 }

console.log(Bar.prop);  //1

let bar = new Bar();

console.log(bar.prop); //undefined
