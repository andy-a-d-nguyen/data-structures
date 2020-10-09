

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
//k = key, v = value;
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

//maintains associations between two data values as key and value,
//a single instance of a hash table may store many associations

// synonyms:
// associative array, Dictionary, map, or Hash


//====RULES====//
//-references values (data) at an index within the array bounds (0 to length-1), stores that in an array
//-always output the same index value
//-doesnt remember previously used array locations or input strings

//- an index point has an embeded array that holds all prior associations ->
// ''''at there assigned random index value'''' or at a key value pair associative object

// ---------- //

// tuple = fixed length array, with fixed indexed values

//Structure storage array to be filled 50-75% by the data
