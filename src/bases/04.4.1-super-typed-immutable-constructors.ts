// Lista inmutable con API encadenable y tipos preservados
class List<T> {
  constructor(private readonly _v: readonly T[]) {}

  static of<T>(...xs: T[]) { return new List<T>(xs); }

  get value(): readonly T[] { return this._v; }

  map<U>(fn: (t: T, i: number) => U)     { return new List(this._v.map(fn)); }
  filter<S extends T>(pred: (t: T) => t is S): List<S>;
  filter(pred: (t: T) => boolean)        : List<T>;
  filter(pred: any)                      { return new List(this._v.filter(pred)); }

  append(...xs: T[])                     { return new List([...this._v, ...xs]); }
  uniq(key?: (t: T) => unknown) {
    const k = key ?? ((x: T) => x as unknown as string);
    const seen = new Set<unknown>();
    return new List(this._v.filter(x => (seen.has(k(x)) ? false : (seen.add(k(x)), true))));
  }
}

const L = List.of(1, 2, 2, 3).uniq().append(5).map(x => x * 2).value; // readonly number[]
