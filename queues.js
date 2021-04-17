class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queues {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first;
    }
    push(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.length++;
      return this;
    }
    pop() {
      if (!this.top) {
        return null;
      }
      if (this.top === this.bottom) {
        this.bottom = null;
      }
      this.top = this.top.next;
      this.length--;
  
      return this;
    }
    dequeue() {
        if (!this.first) {
          return null;
        }
        if (this.first === this.last) {
          this.last = null;
        }
        this.first = this.first.next;
        this.length--;
    
        return this;
      }
  }
  
  const queus = new Queues();