var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  
  storage.size = 0;
  // Implement the methods below

  // add input value to the back of the queue (push)
  someInstance.enqueue = function(value) {
    // increment size by 1
    storage.size++;
    // assign input value to 'last index/key'
    storage[storage.size - 1] = value;
  };

  // remove and return value at the front of the queue (shift)
  someInstance.dequeue = function() {
    // create a variable to store removed value
    // assign variable to value at 'first index/key'
    var dequeued = storage[0];

    // iterate over storage
    for (var index in storage) {
      // assign value at current key to key that is 1 less than current key
      storage[index - 1] = storage[index];
    }

    // delete the last property because its value now lies in new index that is 1 less and is not needed
    delete storage[storage.size - 1];

    // decrement size by 1
    storage.size--;

    // return removed value
    return dequeued;
  };

  someInstance.size = function() {
    // if size is less than 0
    if (storage.size < 0) {
      // assign size to be 0
      storage.size = 0;
    }

    // return size
    return storage.size;
  };

  return someInstance;
};
