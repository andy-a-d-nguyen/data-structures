var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create an instance of Queue class
  var someInstance = {};

  // create a .length property of the instance and set it to 0
  someInstance.length = 0;

  // using _.extend, copy the properties of the source object to the destination object
  _.extend(someInstance, queueMethods);

  // return the instance of Queue class
  return someInstance;
};

// the object from which someInstance of Queue will get its properties (source)
var queueMethods = {};

// the .size method of queueMethods
queueMethods.size = function() {
  // if someInstance.length is less than 0
  if (this.length < 0) {
    // set someInstance.length to 0
    this.length = 0;
  }
  // return .length property
  return this.length;
};

// the .enqueue method of queueMethods (push)
queueMethods.enqueue = function(value) {
  // increment someInstance.length by 1
  this.length++;
  // set value at 'last index/key' to input value
  this[this.length - 1] = value;
};

// the .dequeue method of queueMethods (shift)
queueMethods.dequeue = function() {
  // create a variable to store dequeued value and assign to value at 'first index/key'
  var dequeued = this[0];

  // iterate over the instance
  for (var index in this) {
    // assign value at current key to value at key - 1
    this[index - 1] = this[index];
  }

  // delete the last key because it is a property that shares the same value with the 'index/key' before it
  delete this[this.length - 1];

  // decrement .length by 1
  this.length--;
  
  // return result variable
  return dequeued;
};
