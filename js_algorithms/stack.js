/**
 * A stack is a data structure that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed.
 *
 * Think of it like a stack of plates where you can only take the top plate off or add a new plate to the top.
 */

class Stack {
  constructor() {
    this.items = [];
  }

  // Push : Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Pop: Remove and return the element from the top of the stack
  pop() {
    if (this.isEmpty()) {
      return "The stack is empty, nothing to pop";
    }
    return this.items.pop();
  }

  // Peek: Return the element from the top of the stack without removing it
  peek() {
    return this.items[this.items.length - 1];
  }

  // isEmpty: Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // size: Return the number of elements in the stack
  size() {
    return this.items.length;
  }

  // print: Display the elements of the stack
  print(){
    console.log(this.items.join(" "));
  }
}


// Example usage:
const myStack = new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log("Stack elements:");
myStack.print(); // Output: 10 20 30

console.log("Top element:", myStack.peek()); // Output: 30

console.log("Popped element:", myStack.pop()); // Output: 30

console.log("Stack after pop:");
myStack.print(); // Output: 10 20