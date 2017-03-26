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
      table[position] = new ValuePair(key, value);
    } else {
      var index = ++position;
      while (table[index] != undefined) {
        index++;
      }
      table[index] = new ValuePair(key, value);
    }
  };

  this.get = function (key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) {
      if (table[position].key === key) {
        return table[position].value;
      } else {
        var index = ++position;
        while (table[index] === undefined ||
          table[index].key !== key) {
          index++;
        }
        if (table[index].key === key) {
          return table[index].value;
        }
      }
    }
    return undefined;
  };

  this.remove = function (key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) {
      if (table[position].key === key) {
        table[index] = undefined;
        return true;
      } else {
        var index = ++position;
        while (table[index] === undefined ||
          table[index].key !== key) {
          index++;
        }
        if (table[index].key === key) {
          table[index] = undefined;
          return true;
        }
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