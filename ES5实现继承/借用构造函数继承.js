function fatherFn(...arr) {
  this.some = '父类的this属性',
  this.params = arr;
}

fatherFn.prototype.fatherFnSome = '父类原型对象的属性或者方法';  //继承不到父类原型对象的属性或者方法

function sonFn(fatherParams, ...sonParams) {
  fatherFn.call(this, ...fatherParams); //传递参数给父类构造函数
  this.obkoro1 = '子类的this属性';
  this.sonParams = sonParams;
}

sonFn.prototype.sonFnSome = '子类原型对象的属性或者方法';

const fatherParams = ['父类的参数1', '父类的参数2'];
const sonParams = ['子类的参数1', '子类的参数2'];

const sonFnInstace = new sonFn(fatherParams, sonParams);

console.log('借用构造函数子类实例：', sonFnInstace);

/**
 * **一经调用call/apply它们就会立即执行函数，并在函数执行时改变函数this指向**
 * 优点：
 * 1.可以向父类传递参数，
 * 2.解决了原型链继承中:父类属性使用this声明的属性会被所有实例共享的问题。
 *
 * 缺点：
 * 1.只能继承父类通过this声明的属性/方法，不能继承父类prototype上的属性/方法。
 * 2.父类方法无法复用：因为无法继承父类的prototype，所以每次子类实例化都要指向父类函数，重新声明
 * 父类的this里所定义的方法，因此此方法无法复用。
 */