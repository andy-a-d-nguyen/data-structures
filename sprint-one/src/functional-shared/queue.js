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




