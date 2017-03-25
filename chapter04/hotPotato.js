// 循环队列的一个例子就是击鼓传花游戏（ Hot
// Potato）。在这个游戏中，孩子们围成一个圆圈，把花尽快地传递给旁边的人。某一时刻传花停止，
// 这个时候花在谁手里，谁就退出圆圈结束游戏。重复这个过程，直到只剩一个孩子（胜者）。

// 在下面这个示例中，我们要实现一个模拟的击鼓传花游戏
var Queue = require('./queue');

function hotPotato(nameList, num) {
  var queue = new Queue();
  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }
  var eliminated = '';
  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + ' 在击鼓传花游戏中被淘汰。 ');
  }
  return queue.dequeue();
}

var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
var winner = hotPotato(names, 7);
console.log(' 胜利者： ' + winner);