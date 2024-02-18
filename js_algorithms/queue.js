/**
 * A queue is a linear data structure that follows the First In, First Out (FIFO) principle. 
 * This means that the first element added to the queue will be the first one to be removed. 
 * Think of it like a queue of people waiting in line; the person who arrived first will be the first to 
 * leave the line.
 * 
 * Methods on Queues: Enqueue -> Dequeue -> Peek -> IsEmpty -> Size -> Print
 */

class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the first element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // View the first element in the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  //Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }

  // Print the elements of the queue
  printQueue() {
    return this.items.join(" ");
  }
}

// Example usage:
let queue = new Queue();

console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
 
console.log(queue.printQueue()); // 10 20 30

console.log(queue.peek()); // 10

console.log(queue.dequeue()); // 10

console.log(queue.printQueue()); // 20 30

console.log(queue.size()); // 2