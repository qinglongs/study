/**
 * 调用字符串split()方法可以生成数组，该方法通过一些常见的分隔符，比如分隔单词的空格，讲一个字符串分成几部分
 * 并将每部分作为一个元素保存于一个新建的数组中
 */

 var sentence = 'the quick brown fox jumped over lazy dog';
 var words = sentence.split(" ");

 console.log(words);