//-------------Question: 19---------------------------------

class Counter {
  count: number = 0;
  increment(): void {
    this.count++;
  }
  decrement(): void {
    this.count--;
  }
  getValue(): number {
    return this.count;
  }
}

const counter = new Counter();

counter.increment();
counter.increment();

console.log(counter.getValue()); // 2
counter.decrement();
console.log(counter.getValue()); // 1

export {};
