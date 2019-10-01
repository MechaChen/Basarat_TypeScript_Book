class QueueC<T> {
    protected data = [];
    push(item: T) { this.data.push(item); }
    pop(): T | undefined { return this.data.shift(); }
}

const queueC = new QueueC<number>();
queueC.push(0);
queueC.push('1');