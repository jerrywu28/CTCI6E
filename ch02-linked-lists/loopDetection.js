class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    let node = new Node(value);
    if (this.tail === null) {
      if (this.head === null) {
        this.head = node;
      }
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  detectLoop() {
    let pointer1 = this.head;
    let pointer2 = this.head;
    let initDetection = false;
    while (pointer1 !== null || pointer2 !== null) {
      if (pointer1.next === null || pointer2.next === null) {
        return false;
      }
      if (pointer1 === pointer2 && initDetection) {
        return true;
      }
      initDetection = true;
      pointer1 = pointer1.next;
      pointer2 = pointer2.next.next;
    }
  }
}

let ll = new LinkedList;
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
let storedNode = ll.tail;
ll.add(5);
ll.add(6);
ll.add(7);
ll.add(8);
ll.add(9);
ll.add(10);
ll.add(11);
ll.tail.next = storedNode;
ll.detectLoop();