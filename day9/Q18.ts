//----------------Question: 18-----------------------------
class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }
  peek(): T | undefined {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const queue = new Queue<string>();
queue.enqueue("a");
queue.enqueue("b");
console.log(queue.peek()); // Output: a
console.log(queue.dequeue()); // Output: a
console.log(queue.dequeue()); // Output: b
console.log(queue.isEmpty()); // Output: true