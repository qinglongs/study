/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 11:00:21
 * @LastEditTime: 2019-09-17 17:52:41
 * @LastEditors: Please set LastEditors
 */
/**
 * 1.下面代码是一个获取股票报价的函数，函数前面的async关键字，表明
 * 该函数内部有异步操作。调用该函数时，会立即返回一个Promise对象。
 */

// async function getStockPriceByName(name){
//   const symbol = await getStockSymbol(name);
//   const stockPrice = await getStockPriceByName(symbol);
//   return stockPrice;
// }

// getStockPriceByName('goog').then(function(res){
//   console.log(res);
// })


/**
 * 1.指定多少毫秒后输出一个值：
 */

function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

async function asyncPoint(ms, val) {
  await timeout(ms);
  console.log(val);

}

asyncPoint(5000, 'hello,word')

/**
 * 由于async函数返回的是Promise对象，可以作为await命令的参数，所以可以将上面的代码
 * 写成下面的这种形式：
 */
async function timeout(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

async function asyncPoint(ms, val) {
  await timeout(ms);
  console.log(val);

}