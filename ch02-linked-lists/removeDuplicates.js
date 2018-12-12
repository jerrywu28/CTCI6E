//Remove duplicates in a singly linked list, no buffers
//My thoughts: What does no buffers mean here?

//Step 1, make a Linked List
  //head prop
  //tail prop
  //addToTail method
  //removeHead method
  //deleteDuplicate method
//Step 2, in order to remove duplicates in constant space
  //Two pointers
    //first pointer starts at head
    //second pointer starts at first pointer + 1 and traverses to the end of the LL
      //at any point, if second pointer === first pointer, delete that node
    //first pointer continues to the next point of the LL and second pointer re-assigns to first pointer + 1

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
      if (this.head.next === null) {
        this.head.next = this.tail;
      }
      this.tail.next = node;
      this.tail = node;
    }
    return node.value;
  }

  removeHead() {
    if (this.head !== null) {
      let temp = this.head.value;
      this.head = this.head.next;
      return temp;
    }
  }

  deleteDuplicate() {
    let pointer1 = this.head;
    let pointer2 = pointer1.next;
    let count = 0;
    while (pointer1.next !== null) {
      while (pointer2.value === pointer1.value) {
        pointer1.next = pointer2.next;
        pointer2 = pointer1.next;
      }
      while (pointer2.next !== null) {
        if (pointer2.next.value === pointer1.value) {
          pointer2.next = pointer2.next.next;
          count++;
        }
        pointer2 = pointer2.next ;
        if (pointer2 === null) {
          break;
        }
      }
      pointer1 = pointer1.next;
      pointer2 = pointer1.next;
    }
    return `Deleted ${count} duplicate nodes.`
  }

  log() {
    let array = [];
    let node = this.head;
    while (node !== null) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }
}


//Test
let ll = new LinkedList;
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(2);
ll.add(1);
ll.add(4);
ll.add(3);
ll.deleteDuplicate()