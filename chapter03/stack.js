function Stack() {
  var items = [];

  // 添加一个（或几个）新元素到栈顶
  this.push = function (element) {
    items.push(element);
  };

  // 移除栈顶的元素，同时返回被移除的元素
  this.pop = function () {
    return items.pop();
  };

  // 返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）
  this.peek = function () {
    return items[items.length - 1];
  };

  // 如果栈里没有任何元素就返回true，否则返回false
  this.isEmpty = function () {
    return items.length == 0;
  };

  // 移除栈里的所有元素
  this.clear = function () {
    items = [];
  };

  // 返回栈里的元素个数
  this.size = function () {
    return items.length;
  };

  // 辅助函数，打印栈里的元素
  this.print = function () {
    console.log(items.toString());
  }
}


// 测试
var stack = new Stack();
console.log(stack.isEmpty()); // true

stack.push(5);
stack.push(8);
console.log(stack.peek()); // 8

stack.push(11);
console.log(stack.size()); // 3
console.log(stack.isEmpty()); // false

stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size()); // 2
stack.print(); // 5,8

// 栈的应用
// 十进制转二进制
function divideBy2(decNumber) {
  var remStack = new Stack(),
    rem,
    binaryString = '';
  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

console.log(divideBy2(233)); //输出 11101001
console.log(divideBy2(10)); //输出 1010
console.log(divideBy2(1000)); //输出 1111101000

// 十进制转成其它进制（16进制以下）
function baseConverter(decNumber, base) {
  var remStack = new Stack(),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF';
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }
  return baseString;
}

console.log(baseConverter(100345, 2)); //输出 11000011111111001
console.log(baseConverter(100345, 8)); //输出 303771
console.log(baseConverter(100345, 16)); //输出 187F9