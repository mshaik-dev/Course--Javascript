function* addGenerator() {
    const x = yield 1;
    const y = yield x + 1;
    return x + y;
}

const gen = addGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next(5)); // { value: 6, done: false }
console.log(gen.next(10)); // { value: 15, done: true }
