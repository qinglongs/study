var nums = [];

for (var i = 0; i < 10; i++) {
    nums[i] = i + 1
}

console.log(nums)

/**
 * **但是当把一个数组赋给另一个数组时，只是为被赋值的数组增加了一个新的引用，当你通过原引用修改了数组的值，另外一个引用也会感知到变化**
 * **这种行为称为浅复制，新数组依然指向原来的数组**
 */

 /**
  * 例子：
  */

  var nums1 = [];
  for(var i =0;i<100;i++){
      nums1[i] = i+1;
  }

  var samenums = nums1;
  nums1[0] = 10000;
  console.log(samenums); //10000