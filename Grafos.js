class Node {
    constructor(type, name) {
      this.type = type;
      this.name = name;
      this.connections = [];
    }
  
    addConnection(node) {
      this.connections.push(node);
    }
  }
  
  class Person extends Node {
    constructor(name, age, city) {
      super("person", name);
      this.age = age;
      this.city = city;
      city.addConnection(this);
    }
  }
  
  class City extends Node {
    constructor(name) {
      super("city", name);
    }
  
    printResidents() {
      console.log(`Residents of ${this.name}:`);
      for (let i = 0; i < this.connections.length; i++) {
        console.log(`Name: ${this.connections[i].name}, Age: ${this.connections[i].age}`);
      }
    }
  }
  
  // Create graph
  let cali = new City("Cali");
  let bogota = new City("Bogota");
  let medellin = new City("Medellin");
  
  let natalia = new Person("Natalia Cajiao", 19, cali);
  let fernanda = new Person("Fernanda Lopez", 22, bogota);
  let michell = new Person("Michell Tatiana", 21, medellin);
  let geral = new Person("Geraldine Inga", 20, cali);
  
  // Print residents of New York
  newYork.printResidents();