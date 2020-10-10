var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = [];
  // [[6[[7]8]]9[[10[11]]12]]

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  if (!value) {
    throw new Error ('input is null or undefined');
  }
  //.addChild() method, takes any value,
  // sets that as the target of a node,
  // and adds that node as a child of the tree

  //in: value Out: sideEffect
  // maybe negatives, NAN, Object

  //check undefined
  // compare to start
  // check undefined
  // higher or lower
  // insert value
  //   var current = this.value
  // if (this.value === undefined) {
  //   this.value = value;
  // }
  //   this.children.push(Tree(value))
  //   }

  var node = Tree(value);

  if (!this.value) {
    this.value = node.value;
  }
  this.children.push(node);
};

treeMethods.contains = function(target) {
  // A .contains() method, takes any input
  // and returns a boolean reflecting whether
  // it can be found as the value of the
  // target node or any descendant node

  // var current = this
  // if (!_.contains(this, target)) {
  //   _.contains(current, target)
  //   current = current.children;
  // }

  // if the target node contains target
  // return true
  // else
  // iterate over node's children
  // if current node's child contains target
  // return true
  // return false
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions? addChild: 01, contains:0n^2
 */
