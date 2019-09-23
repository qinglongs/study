/**
 * 借用构造函继承：在执行Child构造函数的时候，子类的实例各自得到一份构造函数的副本，属于值传递，所以子类之间的属性修改时互不相关的。
 * 缺点：单独使用无法达到函数复用，因为每一个函数和属性都需要在构造函数中定义，没法复用，即没有父类protoype上的函数，只有不能共用的实例属性实例和父类之间的关系
 * 因为子类的prototype和父类无关。
*/

function Parent() {
  this.colors = ['red', 'blue', 'green'];
}

function Child() {
  Parent.call(this);
}

let instance1 = new Child();
instance1.colors.push('yellow');
console.log(instance1.colors); //[ 'red', 'blue', 'green', 'yellow' ]

let instance2 = new Child();

console.log(instance2.colors); //[ 'red', 'blue', 'green' ]

