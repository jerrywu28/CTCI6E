//Using one array, implement three stacks

//Stacks are last in first out
//1st stack, push in--pop out
//2nd stack, unshift in--shift out
//3rd stack depends on a counter to track index
  //When something is unshifted in, counter increments
  //When something is shifted out, counter decrements
  //Splice array must occur each time 
  //3rd stack's counter is independent of whether or not push or pop occurs;

class ThreeStacks {
  constructor() {
    this.stack = [],
    this.count = {
      left: 0,
      right: 0,
      center: 0
    }
  }

  leftPush(value) {
    this.stack.unshift(value);
    this.count.left += 1;
  }

  leftPop() {
    if (this.count.left > 0) {
      this.count.left -= 1;
      return this.stack.shift();
    }
    return 'Nothing to pop.'
  }

  rightPush(value) {
    this.stack.push(value);
    this.count.right += 1;
  }

  rightPop() {
    if (this.count.right > 0) {
      this.count.right -= 1;
      return this.stack.pop();
    }
    return 'Nothing to pop.'
  }

  centerPush(value) {
    this.stack.splice(this.count.left, 0, value)
    this.count.center += 1;
  }

  centerPop() {
    if (this.count.center > 0) {
      this.count.center -= 1;
      return this.stack.splice(this.count.left, 1)[0];
    }
    return 'Nothing to pop.'
  }
}

let three = new ThreeStacks;
three.leftPush(5);
three.rightPush(10);
three.centerPush(15);

const test = (actual, expected, condition) => {
  if (actual === expected) {
    return `Test passed: ${condition}`;
  } else {
    return `Test failed: Expected ${actual} to equal ${expected}`;
  }
}

test(three.leftPop(), 5, 'It should return 5.');
test(three.rightPop(), 10, 'It should return 10.');
test(three.centerPop(), 15, 'It should return 15.');
test(three.leftPop(), 'Nothing to pop.', 'It should return: Nothing to pop');