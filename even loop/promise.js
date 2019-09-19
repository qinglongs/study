/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 17:28:41
 * @LastEditTime: 2019-08-28 17:37:31
 * @LastEditors: Please set LastEditors
 */


new Promise((resolve, reject) => {
  console.log('进入promise');
  $.ajax({
    type:'get',
    url: "https://jsonplaceholder.typicode.com/todos/1",
    success: function (response) {
      if(response){
        resolve(response);
      }else{
        reject('出错了！')
      }
    }
  });
  console.log('promise结束');
})
  .then((data) => console.log(data));

  console.log('promise外部');


  