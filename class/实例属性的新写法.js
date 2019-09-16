class IncreasingCounter {
  constructor() {
    this._count = 0;
  }

  get value() {
    console.log('getting this current value');
    return this._count;
  }

  increment() {
    this._count++;
  }
}

// 新写法：
/**
 * 整齐，清晰 
 */
class newIncreasingCounter {

  _count = 0;

  get value() {
    console.log('getting this current value');
    return this._count;
  }

  increment() {
    this._count++;
  }
}