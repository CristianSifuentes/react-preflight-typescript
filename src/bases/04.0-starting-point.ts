
// Explicitly type as just numbers
const myArray: number[] = [1, 2, 3, 4, 5, 6];
// Clone (shallow) immutably
const myArray2 = [...myArray];
// Safe mutation: still number[]
myArray2.push(7);

// Error if the array only accepts numbers
// myArray2.push('hello world');
console.log({ myArray, myArray2 });


