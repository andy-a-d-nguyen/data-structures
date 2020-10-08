var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);

  someInstance.length = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {

  if (this.length < 0) {
    this.length = 0;
  }

  return this.length;
};

// .push method
queueMethods.enqueue = function(value) {

  this.length++;

  this[this.length - 1] = value;
};

// .shift method
queueMethods.dequeue = function() {
  
  var dequeued = this[0];

  for (var index in this) {
    this[index - 1] = this[index];
  }

  delete this[this.length - 1];

  this.length--;

  return dequeued;
};