var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create a .length property in the instance
  this.length = 0;

};

// create a .size method in the Stack prototype
Stack.prototype.size = function() {

  if (this.length < 0) {
    this.length = 0;
  }

  return this.length;
};

// create a .push method in the Stack prototype
Stack.prototype.push = function(value) {

  this.length++;

  this[this.length - 1] = value;

  return this.length;
};

// create a .pop method in the Stack prototype
Stack.prototype.pop = function() {

  var popped = this[this.length - 1];

  delete this[this.length - 1];

  this.length--;

  return popped;
};