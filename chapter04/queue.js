function Queue() {
  var items = [];

  // 向队列尾部添加一个（或多个）新的项
  this.enqueue = function (element) {
    items.push(element);
  };

  // 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
  this.dequeue = function () {
    return items.shift();
  };

  // 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）
  this.front = function () {
    return items[0];
  };

  // 如果队列中不包含任何元素，返回true，否则返回false
  this.isEmpty = function () {
    return items.length == 0;
  };

  // 移除队列里的所有元素
  this.clear = function () {
    items = [];
  };

  // 返回队列包含的元素个数
  this.size = function () {
    return items.length;
  };

  // 辅助函数，打印队列里的元素
  this.print = function () {
    console.log(items.toString());
  };
}

module.exports = Queue;

// 测试
var queue = new Queue();
console.log(queue.isEmpty()); //输出 true

queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");

queue.print(); // John,Jack,Camila
console.log(queue.size()); //输出 3
console.log(queue.isEmpty()); //输出 false
queue.dequeue();
queue.dequeue();
queue.print(); // Camila