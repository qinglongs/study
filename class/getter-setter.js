/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 17:22:23
 * @LastEditTime: 2019-09-16 17:32:07
 * @LastEditors: Please set LastEditors
 */
class MyClass {
  constructor() {

  }
  get prop() {
    return 'getter'
  }

  set prop(val) {
    console.log('setter：' + value);
  }
}

let inst = new MyClass();

inst.props = 123;

inst.prop;

// class表达式

const myClass = class Me {
  getClassName() {
    return Me.name;
  }
}

let mcls = new myClass();

console.log(mcls.getClassName());