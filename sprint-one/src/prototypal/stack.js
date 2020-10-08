var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // using Object.create, create an instance of Stack using stackMethods as the prototype and inheriting stackMethods' properties
  var someInstance = Object.create(stackMethods);

  // create a .length property of the instance and set to 0
  someInstance.length = 0;

  // return the instance of Stack
  return someInstance;
};

// the object which serves as the prototype for the instance of Stack
var stackMethods = {};

// the .size method of stackMethods
stackMethods.size = function() {

  if (this.length < 0) {
    this.length = 0;
  }

  return this.length;
};

// the .push method of stackMethods
stackMethods.push = function(value) {

  this.length++;

  this[this.length - 1] = value;
};

// the .pop method of stackMethods
stackMethods.pop = function() {

  var popped = this[this.length - 1];

  delete this[this.length - 1];

  this.length--;

  return popped;
};