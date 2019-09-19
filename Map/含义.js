/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 14:29:40
 * @LastEditTime: 2019-09-18 17:52:38
 * @LastEditors: Please set LastEditors
 */
/***
 * 下面代码原意是将一个DOM节点作为对象data的键,但是由于对象只接收字符串作为键名，所以
 * elment被自动转为字符串 **[Object HtmlDivElement]**
 * 
 */

window.onload = function () {
  const data = {};
  const element = document.getElementById('myDiv');
  data[element] = 'metadata';
  console.log(data['[object HTMLDivElement]']); //metadata
}

/***
 * 为了解决这个问题，ES6提供了Map数据结构。它类似与对象，也是键值对的集合，但是键的范围
 * 不限于字符串，各种类型的值包括对象都可以当作键。也就是说，Object结构提供了 **“字符串-值”**
 * 的对应，Map结构提供了 **“值-值”**的对应，是一种更完善的hash结构实现。如果你需要“键值对”的数据结构
 * Map比Object更合适
 */

const m = new Map();
const o = { p: 'hello world' }

m.set(o, 'content');
m.get(o);  //content

m.has(o) //true
m.delete(o) //true
m.has(o) //false

/**
 * 上面代码使用Map结构的set方法，将对象o当作m的一个键，然后又使用get方法读取这个键
 * 接着使用delete方法删除了这个键
 * 
 * 上面例子展示了如何向Map添加成员。作为构造函数
 */

/**
 * **Map也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。**
 */
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
])

map.size //2
map.has('name') //true
map.get('name') //'张三'
map.has('title') //true
map.get('title') //'Author'

/**
 * 上面代码在新建Map实例时，就指定了两个键name和title。
 * Map构造函数接受数组作为参数，实际上执行的时下面的算法
 */

const items = [
  ['name', '张三'],
  ['title', 'Author']
]

const map = new Map();

items.forEach(([key, value]) => map.set(key, value)) //es6解构赋值

/**
 *  **事实上，不仅仅是数组，任何具有Iterator接口、且每个成员都是一个双元素的数组的数据结构，都可以当作Map的参数**
 *  **Set和Map都可以用来生成新的Map**
 */

const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);

const m1 = new Map(set);
m1.get('foo'); // 1
const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
m3.get('baz') // 3

/**
 * 如果对同一个键多次赋值，后面的值会覆盖前面的值
 */

const map = new Map();

map
  .set(1, 'aaa')
  .set(1, 'bbb')

map.get(1); //bbb

/**
 * 如果读取一个未知的键，则返回undefined
 */

new Map().get('askljlkjkl');  //undefined

/**
 *  **只有对同一个对象的引用，Map结构才将其视为同一个键**
 */
const map = new Map();

map.set(['a'], 555);
map.get(['a']) //undefined

/**
 * **上面代码set和get方法，表面是针对同一个对象，但实际上这是两个不同的数组实例，内存地址是不一样的，因此get方法无法读取该键，返回undefined**
 * **Map的键实际上是和内存地址绑定的，只要内存地址不一样，就视为两个键，这就解决了同名属性碰撞的问题**
 * **如果Map的键是一个简单类型的值(数字，字符串，布尔值)，则只要两个值严格相等，Map就将其视为一个键**
 * **虽然NaN不严格等于自身，但Map将其视为同一个键**
 */

let mapl = new Map();

mapl.set(-0, 123);
mapl.get(+0) //123

mapl.set(true, 1);
mapl.set('true', 2);
mapl.get(true) //1

mapl.set(undefined, 3);
mapl.set(null, 4);
mapl.get(undefined) // 3

mapl.set(NaN, 123);
mapl.get(NaN); //123