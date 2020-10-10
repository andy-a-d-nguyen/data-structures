class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // a special method for creating and initializing objects created within a class
  // it is called automatically when a class is initiated
  // it has to have the exact name 'constructor'
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
  push(value) {

    this.length++;

    this[this.length - 1] = value;

    return this.length;
  }

  // .pop method of the class Stack's prototype
  pop() {

    var popped = this[this.length - 1];

    delete this[this.length - 1];

    this.length--;

    return popped;
  }

}