// 实现一个优先队列，有两种选项：设置优先级，然后在正确的位置添加元素；或者用入列操
// 作添加元素，然后按照优先级移除它们。在这个示例中，我们将会在正确的位置添加元素，因此
// 可以对它们使用默认的出列操作

function PriorityQueue() {
  var items = [];

  function QueueElement(element, priority) {
    this.element = element;
    // priority值越小，优先级越高
    this.priority = priority;
  }
  this.enqueue = function (element, priority) {
    var queueElement = new QueueElement(element, priority);
    if (this.isEmpty()) {
      items.push(queueElement);
    } else {
      var added = false;
      for (var i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        items.push(queueElement);
      }
    }
  };
  // 其他方法和默认的Queue实现相同
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