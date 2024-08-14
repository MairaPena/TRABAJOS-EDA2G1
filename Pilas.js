class Book {
    constructor(name, isbn, author, editorial) {
      this.name = name;
      this.isbn = isbn;
      this.author = author;
      this.editorial = editorial;
    }
  }
  
  class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(book) {
      this.stack.push(book);
    }
  
    pop() {
      if (this.stack.length === 0) {
        return null;
      }
      return this.stack.pop();
    }
  
    peek() {
      if (this.stack.length === 0) {
        return null;
      }
      return this.stack[this.stack.length - 1];
    }
  
    size() {
      return this.stack.length;
    }
  
    print() {
      console.log("Stack of Books:");
      for (let i = this.stack.length - 1; i >= 0; i--) {
        console.log(`Name: ${this.stack[i].name}`);
        console.log(`ISBN: ${this.stack[i].isbn}`);
        console.log(`Author: ${this.stack[i].author}`);
        console.log(`Editorial: ${this.stack[i].editorial}`);
        console.log("------------------------");
      }
    }
  }
  
  const stack = new Stack();
  console.log(stack.size()); // 0
  
  stack.push(new Book("Matar a un ruiseñor", "9780061120084", "Harper Lee", "J.B. Lippincott & Co."));
  stack.push(new Book("1984", "9780451524939", "George Orwell", "Secker & Warburg"));
  stack.push(new Book("orgullo y prejuicio", "9781853260509", "Jane Austen", "T. Egerton"));
  
  console.log(stack.size()); // 3
  
  stack.print();
  
  console.log("Top Book:");
  console.log(`Name: ${stack.peek().name}`);
  console.log(`ISBN: ${stack.peek().isbn}`);
  console.log(`Author: ${stack.peek().author}`);
  console.log(`Editorial: ${stack.peek().editorial}`);
  
  let removedBook = stack.pop();
  console.log("Removed Book:");
  console.log(`Name: ${removedBook.name}`);
  console.log(`ISBN: ${removedBook.isbn}`);
  console.log(`Author: ${removedBook.author}`);
  console.log(`Editotial: ${removedBook.editorial}`);
  
  console.log(stack.size()); // 2
  
