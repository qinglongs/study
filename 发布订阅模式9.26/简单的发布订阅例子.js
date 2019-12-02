var salesOffices = {}; 

salesOffices.clientList = []; //所有的订阅信息存在这个数组内。

salesOffices.listen = function (key, fn) { //定义订阅方法
  if (!this.clientList[key]) { //如果key还没有，将clientList[key] =[]
    this.clientList[key] = [];
  }
  this.clientList[key].push(fn); 
}

salesOffices.trigger = function () {
  var key = Array.prototype.shift.call(arguments)
    fns = this.clientList[key]; 
  if (!fns || fns.length === 0) {
    return false;
  }
  for (var i = 0, fn; fn = fns[i++];) {
    fn.apply(this, arguments);
  }
}

salesOffices.listen('squareMeter88', function (price, squareMeter) {
  console.log(`价格${price}`);
})

salesOffices.listen('squareMeter110', function (price, squareMeter) {
  console.log(`价格${price}`)
  console.log(`squareMeter = ${squareMeter}`)
})

salesOffices.trigger('squareMeter88', 2000000);
// salesOffices.trigger('squareMeter110', 3000000, 1123456);
