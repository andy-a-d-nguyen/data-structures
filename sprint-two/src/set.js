var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me -- okay :) -> its an object now
  return set;
};

var setPrototype = {};

//takes any string and adds it to the set
setPrototype.add = function(item) {
  this._storage[item] = item;
};

// takes any string and returns a boolean
// reflecting whether it can be found in the set
setPrototype.contains = function(item) {
  if (this._storage[item]) {
    return true;
  }
  return false;
};

//takes any string and removes it from the set, if present
setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions? 01 for all
 */
