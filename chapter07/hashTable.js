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

  // 向散列表增加一个新的项（也能更新散列表）
  this.put = function (key, value) {
    var position = loseloseHashCode(key);
    console.log(position + ' - ' + key);
    table[position] = value;
  };

  this.get = function (key) {
    return table[loseloseHashCode(key)];
  };

  this.remove = function (key) {
    table[loseloseHashCode(key)] = undefined;
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