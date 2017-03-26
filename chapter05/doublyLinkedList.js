function DoublyLinkedList() {
  // Node类表示要加入列表的项。它
  // 包含一个element属性，即要添加到列表的值，以及一个next属性，即指向列表中下一个节点
  // 项的指针。
  var Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null; //新增的
  };
  // 存储列表项的数量
  var length = 0;
  // 存储第一个节点的引用
  var head = null;
  var tail = null; //新增的
  // 向列表尾部添加一个新的项
  // 向LinkedList对象尾部添加一个元素时，可能有两种场景：列表为空，添加的是第一个元素，或者列表不为空，向其追加元素
  this.append = function (element) {
    var node = new Node(element),
      current;
    if (head === null) { //列表中第一个节点 
      head = node;
    } else {
      current = head;
      //循环列表，直到找到最后一项
      while (current.next) {
        current = current.next;
      }
      //找到最后一项，将其next赋为 node，建立链接
      current.next = node;
    }
    length++; //更新列表的长度
  };
  // 向列表的特定位置插入一个新的项
  this.insert = function (position, element) {
    //检查越界值
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;
      if (position === 0) { //在第一个位置添加
        if (!head) { //新增的
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node; //新增的
          head = node;
        }
      } else if (position === length) { //最后一项 //新增的
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.prev = node; //新增的
        node.prev = previous; //新增的
      }
      length++; //更新列表的长度
      return true;
    } else {
      return false;
    }
  };
  // 从列表的特定位置移除一项
  // 移除元素也有两种场景：第一种是移除第一个元素，第二种是移除第一个以外的任一元素。
  this.removeAt = function (position) {
    //检查越界值
    if (position > -1 && position < length) {
      var current = head,
        previous,
        index = 0;
      //移除第一项
      if (position === 0) {
        head = current.next;
        //如果只有一项，更新tail //新增的
        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) { //最后一项 //新增的
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        //将previous与 current的下一项链接起来——跳过current
        previous.next = current.next;
        current.next.prev = previous; //新增的
      }
      length--;
      return current.element;
    } else {
      return null;
    }
  };
  // 根据元素的值从列表中移除一项
  this.remove = function (element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  };
  // 返回元素在列表中的索引。如果列表中没有该元素则返回-1
  this.indexOf = function (element) {
    var current = head,
      index = 0;
    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };
  // 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false
  this.isEmpty = function () {
    return length === 0;
  };
  // 返回链表包含的元素个数
  this.size = function () {
    return length;
  };
  // 由于列表项使用了 Node类，就需要重写继承自 JavaScript对象默认的toString方法，让其只输出元素的值
  this.toString = function () {
    var current = head,
      string = '';
    while (current) {
      string += current.element;
      current = current.next;
    }
    return string;
  };
  // 提供一种获取类的第一个元素的方法，以实现实现外部循环访问列表
  this.getHead = function () {
    return head;
  };
}