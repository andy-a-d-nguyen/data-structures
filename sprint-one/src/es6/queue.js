class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // a special method with keyword constructor which instantiates an instance of class Queue
  constructor() {
    this.length = 0;
  }

  // .size method of the class Stack's prototype
  size() {

    if (this.length < 0) {
      this.length = 0;
    }

    return this.length;
  }

  // .push method of the class Stack's prototype
  enqueue(value) {

    this.length++;

    this[this.length - 1] = value;

    return this.length;
  }

  // .shift method of the class Stack's prototype
  dequeue() {

    var dequeued = this[0];

    for (var index in this) {
      this[index - 1] = this[index];
    }

    delete this[this.length - 1];

    this.length--;

    return dequeued;
  }
}
