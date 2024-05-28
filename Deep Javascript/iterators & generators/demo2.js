function* myGenerator() {
    yield "hi";
    yield 2;
    yield 3;
    yield "end";
}

const gen = myGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next());
console.log(gen.next());  // { value: undefined, done: true }
