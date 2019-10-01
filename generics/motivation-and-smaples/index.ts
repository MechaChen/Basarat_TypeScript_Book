class Queue {
    protected data = [];
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}

const queue = new Queue();
queue.push(0);
queue.push("1"); // Oops a mistake

// a developer walks into a bar
console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1));    // RUNTIME ERROR