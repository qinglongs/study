var nums = [];
for (let i; i < 100; i++) {
    nums[i] = i + 1;
}

/**
 * 可以使用[]操作符读取数组中的元素，如下所示
 */

var numbers = [1, 2, 3, 4, 5, 6];
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];

/**
 * 如果要以此读取数组中的袁术，使用for循环很简单
 */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8]

var sum = 0;

for (var i = 0; i < numbers.length; ++i) {
    sum += numbers[i]
}

console.log(sum)  //36

/**
 * 注意，这里使用length属性来控制循环次数，而不是直接使用数字。JavaScript中的数组也是对象
 * 数组的长度可以任意增长，超出创建时的指定长度，length属性反映的是当前数组中的个数，使用它
 * 可以确保循环遍历了数组中的所有元素
 */