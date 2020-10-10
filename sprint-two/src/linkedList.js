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

    while (this.head !== null) {
      if (this.head.value === target) {
        return true;
      }
      this.head = this.head.next;

    }
    return false;
  };


  return list;

};

var Node = function(value) {
  if (!value) {
    throw new Error ('input is null or undefined');
  }
  var node = {};

  node.value = value;
  node.next = null;
  return node;
};



/*
 * Complexity: What is the time complexity of the above functions? // Linear
 */
