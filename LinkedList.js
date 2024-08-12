// Clase Node para cada tarea TODO
class Node {
    constructor(title, description) {
      this.title = title;
      this.description = description;
      this.next = null;
    }
  }
  
  // Clase LinkedList para manejar la lista de TODOs
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Método para agregar un nuevo TODO a la lista
    append(title, description) {
      const newNode = new Node(title, description);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    // Método para imprimir todos los TODOs en la lista
    print() {
      let currentNode = this.head;
      while (currentNode) {
        console.log(`Title: ${currentNode.title}`);
        console.log(`Description: ${currentNode.description}`);
        console.log(`------------------------`);
        currentNode = currentNode.next;
      }
    }
  }
  
  // Crear una nueva lista de TODOs
  const todoList = new LinkedList();
  
  // Add some TODO tasks to the list
  todoList.append("Comprar leche", "Comprar leche en la tienda");
  todoList.append("Hacer ejercicio", "Hacer ejercicio en el parque");
  todoList.append("Estudiar para el examen", "Estudiar para el examen de matemáticas");
  todoList.append("Cuarto limpio", "Limpiar mi cuarto");
  todoList.append("Lavar la ropa", "Lavar la ropa hoy");
  
  // Imprimir todos los TODOs en la lista
  todoList.print();