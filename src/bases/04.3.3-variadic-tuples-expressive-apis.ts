// head: preserva el tipo del primer elemento
function head<T extends readonly unknown[]>(arr: T):
  T extends readonly [] ? undefined : T[0] {
  return (arr as any)[0];
}

const h1 = head([1, 2, 3] as const);        // 1
const h2 = head(["a", "b"] as const);       // "a"
const h3 = head([] as const);               // undefined


// zip con tuplas: combina y preserva tipos por índice
function zip<A extends readonly unknown[], B extends readonly unknown[]>(
  a: A, b: B
): { [I in keyof A & keyof B]: [A[I], B[I]] } {
  const len = Math.min(a.length, b.length);
  return Array.from({ length: len }, (_, i) => [a[i], b[i]]) as any;
}

const z = zip([1, 2] as const, ["x", "y"] as const);
// tipo: readonly [readonly [1, "x"], readonly [2, "y"]]
