class QueueB {
    protected data = [];
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}

class QueueNumberB extends QueueB {
    push(item: number) { super.push(item); }
    pop(): number { return this.data.shift(); }
}

const queueB = new QueueNumberB();
queueB.push(0);
queueB.push('1');