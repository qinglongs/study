const controlCrenter = {}  //调度中心

const listenArray = []; //订阅信息存储

/**
 * @method 添加订阅
 * @params {string} key 订阅类型名称
 * @params {Function} fn 订阅发布后的回调
 */
controlCrenter.addListen = function (key, fn) {
  if (!listenArray[key]) {
    listenArray[key] = [];
  }
  listenArray[key].push(fn);
}

controlCrenter.trigger = function () {
  let key = Array.prototype.shift.call(arguments); //取trigger的第一个参数
  let fns = listenArray[key];
  if (!fns || fns.length === 0) return false;
  for (let i = 0, fn; i < fns.length; i++) {
    fn = fns[i]
    fn(...arguments)
  }
}

controlCrenter.addListen('测试1', function (a, b) {
  console.log(a)
  console.log(b)
})

controlCrenter.addListen('测试2', function (a, b) {
  console.log(a)
  console.log(b)
})

controlCrenter.trigger('测试2', '测试2参数1', '测试2参数2')
// controlCrenter.trigger('测试1', '测试1参数1', '测试1参数2')

