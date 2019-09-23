
function FatherFun(){
  this.some = '父类的this属性'
}

FatherFun.prototype.fatherFnSome = '父类原型对象的属性或者方法';

function SonFun(){
  this.sonFnSome = '子类的this属性';
}

SonFun.prototype = new FatherFun();

SonFun.prototype.say = '子类原型对象的属性或者方法'

const sonFnInstace = new SonFun();

console.log('子类的实例',sonFnInstace);

/**
 * 缺点：
 * 1.父类使用this声明的属性被所有实例共享。
 * 2.创建子类实例时，无法向父类构造函数传参，不够灵活。
 */