//Design a stack where, in addition to push and pop, it has a min method which retrieves the minimum
//value within the stack

//What does it mean by retrieves?
//I am assuming that the method only tells you what the minimum value is but does not remove it from the stack

class Stack {
  component() {
    this.stack = [];
    this.min = Infinity;
  }

  push(value) {
    this.stack.push(value);
    if (value < this.min) {
      this.min = value;
    }
  }

  pop() {
    this.stack.pop();
    if (this.stack.length === 0) {
      this.min = Infinity;
    }
  }

  min() {
    return this.min;
  }
}