class Person {
    constructor(name, arrivedTime) {
      this.name = name;
      this.arrivedTime = arrivedTime;
    }
  }
  
  class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(person) {
      this.queue.push(person);
    }
  
    dequeue() {
      if (this.queue.length === 0) {
        return null;
      }
      return this.queue.shift();
    }
  
    peek() {
      if (this.queue.length === 0) {
        return null;
      }
      return this.queue[0];
    }
  
    size() {
      return this.queue.length;
    }
  
    print() {
      console.log("Queue of People:");
      for (let i = 0; i < this.queue.length; i++) {
        console.log(`Name: ${this.queue[i].name}`);
        console.log(`Arrived Time: ${this.queue[i].arrivedTime}`);
        console.log("------------------------");
      }
    }
  }
  
  const atmQueue = new Queue();
  console.log(atmQueue.size()); // 0
  
  atmQueue.enqueue(new Person("Ana", "10:00 AM"));
  atmQueue.enqueue(new Person("Pedro", "10:05 AM"));
  atmQueue.enqueue(new Person("Juan", "10:10 AM"));
  
  
  console.log(atmQueue.size()); // 3
  
  atmQueue.print();
  
  console.log("Next Person in Line:");
  console.log(`Name: ${atmQueue.peek().name}`);
  console.log(`Arrived Time: ${atmQueue.peek().arrivedTime}`);
  
  let servedPerson = atmQueue.dequeue();
  console.log("Served Person:");
  console.log(`Name: ${servedPerson.name}`);
  console.log(`Arrived Time: ${servedPerson.arrivedTime}`);
  
  console.log(atmQueue.size()); // 3