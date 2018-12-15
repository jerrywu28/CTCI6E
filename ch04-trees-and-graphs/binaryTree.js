class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(rootValue) {
    this.root = null;
  }

  insert(value) {
    let nodeToInsert = new Node(value);

    //If no root node exists, creates a root node;
    if (this.root === null) {
      this.root = new Node(value);
      return nodeToInsert.value;
    }

    //If root node exists, looks for position to insert into
    let findPlaceToInsert = (node = this.root) => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = nodeToInsert;
        } else {
          findPlaceToInsert(node.left);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = nodeToInsert;
        } else {
          findPlaceToInsert(node.right);
        }
      } else {
        return 'Value matches current node. Duplicate error!';
      }
    }

    findPlaceToInsert();
  }
}

//Instantiate tree
let tree = new Tree;

//Insert 1 through 5
[10, 7, 12, 18, 6, 8, 3, 9, 14].forEach(int => tree.insert(int));