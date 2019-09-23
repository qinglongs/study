/**
 * 定义：创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后返回对象。
 * 使用场景：专门为对象来做某种固定方式的增强。
 */

function cloneObject(obj) {
  function F() { }
  F.prototype = obj;
  return new F();
}

function createAnother(original) {
  var clone = cloneObject(original); // 继承一个对象 返回新函数
  // do something 以某种方式来增强对象
  clone.some = function () { }; // 方法
  clone.obkoro1 = '封装继承过程'; // 属性
  return clone; // 返回这个对象
}