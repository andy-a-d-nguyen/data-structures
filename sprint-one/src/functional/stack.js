var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // create a .size property to mirror array's .length property
  storage.size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // increment size by 1 when a new value is added
    storage.size++;
    // assign value to a key that is 1 less than the size
    storage[storage.size - 1] = value;
  };

  someInstance.pop = function() {
    // create a variable to store the popped value
    var popped = storage[storage.size - 1];
    // delete the property at the 'last index/key'
    delete storage[storage.size - 1];
    // decrement size by 1 when a property is removed
    storage.size--;
    // return the popped value
    return popped;
  };

  someInstance.size = function() {
    // if size is less than 0
    if (storage.size < 0) {
      // set size to 0
      storage.size = 0;
    }
    // return size property
    return storage.size;
  };

  return someInstance;
};
