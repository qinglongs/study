/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 17:18:13
 * @LastEditTime: 2019-09-17 17:33:26
 * @LastEditors: Please set LastEditors
 */
/**
 * for...of循环可以自动遍历Generator函数运行时生成的Iterator对象，且此时不再需要调用next方法。
 * 下面代码使用for...of循环，依次显示5个yield表达式的值。这里需要注意，一旦next方法的返回
 * 对象的done属性为true，for...of循环就会终止，且不包含返回对象，所以下面代码的return语句返回6，不包含在
 * for...of循环中
 */

function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6; //不包含在for...of循环中
}

for (let v of foo()) {
  console.log(v); // 1，2，3，4，5
}

/**
 * 利用Generator实现斐波拉契数列：
 */

function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (; ;) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

for (let n of fibonacci()) {
  if (n > 100) break;
  console.log(n);
}