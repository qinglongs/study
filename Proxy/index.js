/**
 * Proxy对象用于定义基本操作的自定义行为(如属性查找，枚举，赋值，函数调用等。)
 * 
 * **taps** 提供属性访问的方法。这类似于操作系统中捕获器的概念
 * **target** 代理虚拟化的对象。它通常用作代理的存储后端。根据目标验证关于对象不可扩展性或不可
 * 配置属性的不变量(保持不变的语义)
 */

 //语法：

 /**
  * 参数：
  * **target** 用Proxy包装的目标对象(可以是任意类型的对象，包括原生数组，函数，甚至另一个代理)
  * **handler** 一个对象，其属性是当执行一个操作时定义代理的行为的函数
  */

//  let p = new Proxy(/**target */,/**handler */);

//方法：

// Proxy.revocable() // 创建一个可撤销的Proxy对象

/**
 * **hanlder对象的用法**
 */

 //例子：

 let handler = {
     get:function(target,name){
        return name in target ? target[name]:37
     }
 }

 let p = new Proxy({},handler)

 p.a = 1;
 p.b = undefined;

 console.log(p.a,p.b) //1 undefined

 console.log('c' in p, p.c);    // false, 37