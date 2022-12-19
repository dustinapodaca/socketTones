'use strict';

class PlayerQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(note) {
    this.queue.push(note);
    if (this.queue.length === 7) {
      console.log('PlayerQueue:', this.queue);
    }
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }
}

module.exports = PlayerQueue;
