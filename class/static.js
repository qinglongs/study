/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 17:36:53
 * @LastEditTime: 2019-09-16 17:51:46
 * @LastEditors: Please set LastEditors
 */

/**
 * 1.class 内部方法有static关键字，表明这个方法是一个静态方法。
 * 2.静态方法内部的this执行类本身，不是实例。
 * 3.下面这个例子中，静态方法getStr调用了this.str方法，这个时候方法内部的
 * this指向类，所以调用的方法是静态方法str。
 * 4.静态方法可以和非静态方法重名。
 * 5.父类的静态方法可以被子类继承。
 * 6.静态方法也可以从super方法对象中调用。
 */
class Foo {
  static classMethod() {
    console.log(this); //this指向这个类
    return 'hello'
  }
  static getStr() {
    this.str()
  }
  static str() {
    console.log('hello')
  }
  str() {
    console.log('word')
  }
}

Foo.getStr(); // 'hello'

var foo = new Foo();

// foo.classMethod(); //classMethod is not a function

// 继承，也可以获取到父类的静态方法
class Bar extends Foo {
  static classMethod(){
    return super.classMethod()+ 'too'
  }
}
console.log(Bar.classMethod())

Bar.getStr(); // 'hello'

