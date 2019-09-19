/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 16:59:15
 * @LastEditTime: 2019-09-19 17:54:53
 * @LastEditors: Please set LastEditors
 */
/**
 * ----Object.is() ES6提出"Same-value equality" 算法，用来解决这个问题。
 * Object.is就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符(===)
 * 的行为基本一致
 * **不同之处只有两个：一是+0不等于-0，而是NaN等于自身**
 */


console.log(Object.is('foo', 'foo')) //true
console.log(Object.is(+0, -0)) //false
console.log(Object.is(NaN, NaN)) //true

//ES5可以通过下面的代码，部署Object

Object.defineProperty(Object, 'is', {
  value: function (x, t) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    }
    return x !== x && y !== y;
  },
  configurable: true,
  enmerable: false,
  writable: true
})

/**
 * ---Object.assign()
 * 用于对象的合并，并将源对象的所有可枚举属性，复制到目标对象
 * **Object.assign方法的第一个参数是目标对象，后面的参数都是源对象**
 * **Object.assign拷贝的属性是有限制的，只拷贝源对象自身属性(不拷贝继承属性),也不拷贝不可枚举的属性(enumerable: false)**
 */

const target = { a: 1 };

const source1 = { b: 2 };

const source2 = { c: 3 };

Object.assign(target, source1, source2);

console.log(target); //{ a: 1, b: 2, c: 3 }

/**
 * **如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性**
 */

const target1 = { a: 1, b: 1 };
const source11 = { b: 2, c: 2 };
const source21 = { c: 3 };

Object.assign(target1, source11, source21);
console.log(target1) //{a:1,:b:2,c:3}

/**
 * 如果只有一个参数，Object.assign会直接返回该参数
 */

const obj = { a: 1 };
console.log(Object.assign(obj)); //{ a: 1 }

console.log(Object.assign(2))

/**
 * 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。
 * **如果undefined和null不在首参数，就不会报错,但是也没有任何效果**
 * **除了字符串会以数组形式拷贝入目标对象，其他值都不会产生效果，因为只有字符的包装对象，会产生可枚举属性**
 */

// Object.assign(undefined) //报错

// Object.assign(null) //报错

console.log(Object.assign(obj, undefined, null))

/**
 * **浅拷贝**
 * Object.assign方法实行的浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性值是对象，那么目标对象
 * 拷贝得到的是这个对象的引用
*/

const obj1 = { a: { b: 1 } };
const obj2 = Object.assign({}, obj1);

obj1.a.b = 2;
console.log(obj2.a.b); //2

/**
 * **同名属性的替换**
 * 对于嵌套的对象，一旦遇到同名属性，Object.assign的处理方法是替换，而不是添加
 */

const targeta = { a: { b: 'c', d: 'e' } };
const sourcea = { a: { b: 'hello' } };

console.log(Object.assign(targeta, sourcea)); //{ a: { b: 'hello' } }

/**
 * **数组的处理：**
 *下面代码把数组视为属性名为0,1,2的对象，因此源数组的0号属性4覆盖了目标数组0号属性1
 */
Object.assign([1, 2, 3], [4, 5]) //[4,5,3];
