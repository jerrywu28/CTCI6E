//Implement an algorithm to return the kth to last element of a singly linked list.

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
    return value;
  }

  returnKthToLast(k) {
    let counter = 0;
    let pointer1 = this.head;
    let pointer2 = this.head;
    //Get the full length of the linkedList
    while (pointer2 !== null) {
      counter++;
      pointer2 = pointer2.next;
    }
    //Traverse until counter - k is reached
  }
}

let ll = new LinkedList;
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
ll.add(7);
ll.add(8);
ll.add(9);
ll.add(10);