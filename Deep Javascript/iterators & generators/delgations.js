function* subGenerator() {
    yield 'Sub1';
    yield 'Sub2';
}

function* mainGenerator() {
    yield 'Main1';
    yield* subGenerator();
    yield 'Main2';
}

for (const value of mainGenerator()) {
    console.log(value);
}

