class Person {
    constructor(fullName, birthdate) {
      this.fullName = fullName;
      this.birthdate = birthdate;
      this.children = [];
    }
  
    addChild(child) {
      this.children.push(child);
    }
  }
  
  class FamilyTree {
    constructor(root) {
      this.root = root;
    }
  
    printPreOrder(node) {
      if (node === null) return;
      console.log(`Name: ${node.fullName}, Birthdate: ${node.birthdate}`);
      for (let i = 0; i < node.children.length; i++) {
        this.printPreOrder(node.children[i]);
      }
    }
  
    printPostOrder(node) {
      if (node === null) return;
      for (let i = 0; i < node.children.length; i++) {
        this.printPostOrder(node.children[i]);
      }
      console.log(`Name: ${node.fullName}, Birthdate: ${node.birthdate}`);
    }
  
    printInOrder(node) {
      if (node === null) return;
      if (node.children.length > 0) {
        this.printInOrder(node.children[0]);
      }
      console.log(`Name: ${node.fullName}, Birthdate: ${node.birthdate}`);
      if (node.children.length > 1) {
        for (let i = 1; i < node.children.length; i++) {
          this.printInOrder(node.children[i]);
        }
      }
    }
  }
  
  // Create family tree
  let grandma = new Person("Maria Fany Cazaran", "1940-01-20");
  let grandpa = new Person("Reinel Peña", "1935-04-01");
  let mom = new Person("Maria Peña Cazaran", "1962-03-30");
  let dad = new Person("Hervey Balanta", "1963-01-30");
  let me = new Person("Maira Balanta Peña", "2001-11-19");
  let sibling = new Person("Johan Velasco Peña", "1992-01-17");
  
  grandma.addChild(mom);
  grandpa.addChild(mom);
  mom.addChild(me);
  mom.addChild(sibling);
  dad.addChild(me);
  dad.addChild(sibling);
  
  let familyTree = new FamilyTree(grandma);
  
  // Print family tree
  console.log("Pre-Order:");
  familyTree.printPreOrder(grandma);
  
  console.log("\nPost-Order:");
  familyTree.printPostOrder(grandma);
  
  console.log("\nIn-Order:");
  familyTree.printInOrder(grandma);