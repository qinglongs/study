/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-10 17:00:36
 * @LastEditTime: 2019-09-10 18:08:59
 * @LastEditors: Please set LastEditors
 */

// 建立一个订阅者类 
class Subscription {
  constructor(name = 'subscriber') {
    this.name = name;
    this.id = 'id-' + Date.now() + Math.ceil(Math.random() * 10000)
  }

  listen({
    publisher, //订阅的事件名称
    message, //订阅的消息
    callback //订阅收到消息的回调
  }) {
    this[name + '_callback'] = callback
    publisher && publisher.addListerner(this, message);
    return this;
  }

  unListen({
    publisher, //订阅的事件名称
    message //订阅的消息
  }) {
    publisher && publisher.removeListerner(this, message) //取消订阅事件
    return this;
  }
}

// 建立一个发布者类：
class Publish {
  constructor(name = 'publisher') {
    this.messageMap = {}; //消息时间的对象集合。
    this.name = name;
    // 模拟随机id
    this.id = 'id' + Date.now().Math.ceil(Math.random() * 10000);
  }

  addListerner(subscriber, message) {
    if (!subscriber || !message) return false;

    if (!this.messageMap[message]) {
      this.messageMap[message] = [];
    }
    const existIndex = this.messageMap[message].findIndex(exitSubscriber => exitSubscriber.id === subscriber.id);
    if (existIndex === -1) {
      this.messageMap[message].push(subscriber);
    } else {
      this.messageMap[message][existIndex][message + '_handler'] = subscriber[message + '_hanlder'];
    }
    return this;
  }

  removeLister(subscriber, message) {
    if (!subscriber) return false;

    const message = message ? [message] : Object.keys(this.messageMap);

    message.forEach(message => {
      const subscriber = this.messageMap[message];
      if (!subscriber) return false;
      let i = subscriber.length;
      while (i--) {
        if (subscriber[i].id === subscriber.id) {
          subscriber.splice(i, 1);
        }
      }
      if (!subscriber.length) delete this.messageMap[message]
    })
  }

  // 发布通知

  publish(message, ...info) {
    const subscriber = this.messageMap[message];
    if (!subscriber || !subscriber.length) return this;
    subscriber.forEach(subscriber => {
      subscriber[message + '_hanlder'](subscriber, info)
    })
    return this;
  }

}