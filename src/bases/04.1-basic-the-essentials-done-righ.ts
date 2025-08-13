// 1) Basic — The essentials done right


// Two equivalent ways of typing arrays
const a: number[] = [1, 2, 3];
const b: Array<number> = [1, 2, 3];

// Union-typed arrays (avoid if you can, use with intent)
const c: (number | string)[] = [1, 2, '3', '4', 5, 6];

// Inferential typing (preferable if the literal clears well)
const users = ["Ana", "Luis"];               // string[]
const scores = [10, 9, 8] as number[];       // explicit

// “Lightweight” immutability with ReadonlyArray
const ro: ReadonlyArray<number> = [1, 2, 3];
// ro.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
const ro2 = [...ro, 4]; // ✅ new array


// Tuples (fixed length + index types)
const point: [number, number] = [10, 20]; // [x, y]
const entry: [id: string, active: boolean] = ['user1', true];



// Best practices (basic level):
// Prefer literals and inference: const xs = [1,2,3] over const xs: number[] = … if the literal is clear.
// Use ReadonlyArray<T> or readonly T[] to avoid accidental mutations in props and helpers.