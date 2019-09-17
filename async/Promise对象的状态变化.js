/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 11:26:07
 * @LastEditTime: 2019-09-17 11:32:11
 * @LastEditors: Please set LastEditors
 */
/**
 * 1.async函数返回的Promise对象，必须等到内部所有await命令后面的Prmise对象执行完，才会
 * 发生状态改变；除非遇到return语句或者抛出错误，也就是说，只有async函数内部的异步操作执行
 * 完成，才会执行then方法指定的回调函数：
 * 
 */

//  例子：

async function getTitle(url) {
  let response = await fetch(url);
  let html = await response.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}

getTitle('https://tc39.github.io/ecma262/').then((res) => console.log(res));

/**
 * 上面代码有三个步骤：
 * 1.抓取网页。
 * 2.取出文本。
 * 3.匹配页面标题
 * 只有这三个操作全部完成，才会执行then方法。
 */