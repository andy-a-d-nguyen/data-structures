

// Instantiate a new graph
var Graph = function () {
  // create a data structure to store nodes
  this.nodes = {};
  // create a data structure to store edges
  this.edges = {};
};
// var Node = function(value) {
//   this.value = value;
//   this.edges =
// }

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  // add input node to the list of adjacent nodes
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  // if node is in graph
  // return true
  // return false
  if (this.nodes[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  // if graph contains node
  // remove node
  if (this.contains(node)) {
    delete this.nodes[node];
    delete this.edges[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  // if fromNode and toNode are in list of adjacent nodes
  // return true
  // return false

  if (fromNode in this.edges && toNode in this.edges) {
    return true;
  }
  return false;
};
// nodes = {
// {2: 2, 3: 3},
// {1: 1},
// {3: 3, 2: 2}
// }
// Connects two nodes in a graph by adding an edge between them.
// 3      2
Graph.prototype.addEdge = function (fromNode, toNode) {
  // add fromNode and toNode to list of adjacent nodes
  this.edges[fromNode] = fromNode;
  this.edges[toNode] = toNode;

  // this.nodes[fromNode].toNode = toNode;
  // this.nodes[toNode].fromNode = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  delete this.edges[fromNode];
  delete this.edges[toNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (var node in this.nodes) {
    cb(this.nodes[node]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions? 01 for all but forEachNode(linear / 0n)
 */


