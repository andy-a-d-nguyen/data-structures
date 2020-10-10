var BinarySearchTree = function (value) {

  var tree = Object.create(methods);
  tree.left = null;
  tree.right = null;
  tree.value = value;

  return tree;
};

var methods = {};

methods.insert = function (value) {
  // create a new bubble
  // iterate over root
  // if value is smaller than root's value
  // if nothing exists on root's left
  // assign new node to root's left
  // otherwise
  // reassign root's left to root
  // otherwise (if value is bigger than root's value)
  // if nothing exists on root's right
  // assign new node to root's right
  // otherwise
  // reassign root's right to root
  var currentNode = this;
  var newNode = BinarySearchTree(value);

  while (currentNode !== null) {
    if (value < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        return;
      } else {
        currentNode = currentNode.left;
        continue;
      }
    } else {
      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        } else {
          currentNode = currentNode.right;
          continue;
        }
      }
    }
  }
};

methods.contains = function (target) {
  //in: target value | out: boolean
  var currentNode = this;
  var find = function (node) {
    if (node.value === target) {
      return true;
    } else
    if (target < node.value && node.left !== null) {
      return find(node.left);
    } else
    if (target > node.value && node.right !== null) {
      return find(node.right);
    } else {
      return false;
    }
  };

  return find(currentNode);
  //check current node for target
  // if target is < current node's val
  //if target is current node's val
  // return true
  //assign current to left
  // if target is > current node's val
  //if target is current node's val
  // return true
  //assign current node to right

};

methods.depthFirstLog = function (cb) {
  //exex on current
  //check left
  //
  //check right
  //
  var currentNode = this;
  var change = function (node) {
    if (node) {
      cb(node.value);
    }
    if (node.left) {
      change(node.left);
    }
    if (node.right) {
      change(node.right);
    }
  };
  change(currentNode);
};

/*
 * Complexity: What is the time complexity of the above functions? 0(logN)
 */




