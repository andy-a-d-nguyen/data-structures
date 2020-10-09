var LinkedList = function() {
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    this.tail = Node(value);
    if (list.head === null) {
      this.head = Node(value);
    }
    list.head.next = list.tail;
  };

  list.removeHead = function() {
    var save = this.head.value;
    this.head = this.head.next;
    delete save;

    return save;
  };

  list.contains = function(target) {
    var current = this.head;
    while (current.next !== null) {
      if (current.value === target || current.next.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };


  return list;

};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions? // Linear
 */
