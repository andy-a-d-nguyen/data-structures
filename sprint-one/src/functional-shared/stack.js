var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create an instance of an object
  var someInstance = {};

  // create an index property and set value to 0
  someInstance.length = 0;

  // using _.extend, copy all the properties in the source object (2nd parameter) to the destination object (1st parameter). This function overwrites properties of the same name/key in destination object
  _.extend(someInstance, stackMethods);

  // return instance of the object
  return someInstance;
};



// the object from which Stack will receive methods through _.extend
var stackMethods = {};

// the .size method of stackMethods
stackMethods.size = function() {

  // if Stack.length is less than 0
  if (this.length < 0) {
    // set Stack.length to 0
    this.length = 0;
  }

  // return Stack.length
  return this.length;
};

// the .push method of stackMethods
stackMethods.push = function(value) {

  // increment Stack.push by 1
  this.length++;

  // set property at 'last index/key' of Stack to input value
  this[this.length - 1] = value;

  return this.length;
};

// the .pop method of stackMethods
stackMethods.pop = function() {

  // create a variable to store popped value
  var popped = this[this.length - 1];

  // delete property at 'last index/key'
  delete this[this.length - 1];

  // decrement Stack.length by 1
  this.length--;
  
  // return result variable
  return popped;
};