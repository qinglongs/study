/**
 * 下载文件
 */

function isEmpty(str) {
  if (str) {
    return true;
  } else {
    return false;
  }
}

var downloadTextFile = function (mobileCode) {
  if (!isEmpty(mobileCode)) {
    mobileCode = '';
  }
  var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
  setTimeout(() => {
    saveAs(file,"hello world.txt")
    .abort()
  }, 3000)
}

