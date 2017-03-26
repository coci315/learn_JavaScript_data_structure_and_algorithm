function HashTable() {
  var table = [];

  // 散列函数
  var loseloseHashCode = function (key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  // 新增辅助类 
  var ValuePair = function (key, value) {
    this.key = key;
    this.value = value;
    this.toString = function () {
      return '[' + this.key + ' - ' + this.value + ']';
    }
  };

  // 向散列表增加一个新的项（也能更新散列表）
  this.put = function (key, value) {
    var position = loseloseHashCode(key);
    if (table[position] == undefined) {
      table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value));
  };

  this.get = function (key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) {
      //遍历链表来寻找键/值
      var current = table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
      //检查元素在链表第一个或最后一个节点的情况
      if (current.element.key === key) {
        return current.element.value;
      }
    }
    return undefined;
  };

  this.remove = function (key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) {
      var current = table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }
      // 检查是否为第一个或最后一个元素
      if (current.element.key === key) {
        table[position].remove(current.element);
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }
    }
    return false;
  };
}

var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

console.log(hash.get('Gandalf')); // gandalf@email.com
console.log(hash.get('Loiane')); // undefined

hash.remove('Gandalf');
console.log(hash.get('Gandalf')); // undefined