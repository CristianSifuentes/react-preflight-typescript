// Tail: todos menos el primero
type Tail<T extends readonly unknown[]> =
  T extends readonly [any, ...infer R] ? R : readonly [];

// Last: el último elemento
type Last<T extends readonly unknown[]> =
  T extends readonly [...any[], infer L] ? L : never;

type T1 = Tail<[1, 2, 3]>;  // [2, 3]
type L1 = Last<["a", "b"]>; // "b"
