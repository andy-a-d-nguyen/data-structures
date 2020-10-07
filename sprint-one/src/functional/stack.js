var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage.size++;
    storage[storage.size - 1] = value;
  };

  someInstance.pop = function() {
    var popped = storage[storage.size - 1];
    delete storage[storage.size - 1];
    storage.size--;
    return popped;
  };

  someInstance.size = function() {
    if (storage.size < 0) {
      storage.size = 0;
    }
    return storage.size;
  };

  return someInstance;
};
