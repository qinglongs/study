function clone(obj) {
  if (typeof obj === 'object') {
    let cloneTarget = {};
    for (const key in obj) {
      cloneTarget[key] = clone(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}