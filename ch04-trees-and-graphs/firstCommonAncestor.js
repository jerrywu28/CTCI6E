class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Tree {
  constructor(rootValue) {
    this.root = null;
  }

  insert(value) {
    let nodeToInsert = new Node(value);
    if (this.root === null) {
      this.root = new Node(value);
      return nodeToInsert.value;
    }
    const traverseTree = (node) => {
      if (node.children.length < 2) {
        node.children.push(nodeToInsert);
        return;
      } else {
        node.children.forEach(child => {
          traverseTree(child);
        })
      }
    }
    traverseTree(this.root);
    return nodeToInsert.value;
  }

}

//Instantiate tree
let tree = new Tree;

//Insert 1 through 5
for (let i = 1; i < 6; i++) {
  tree.insert(i);
}