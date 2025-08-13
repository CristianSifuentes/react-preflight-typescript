// chunk: partir un array en trozos (inmutable y tipado)
export function chunk<T>(arr: readonly T[], size: number): T[][] {
  if (size <= 0) throw new Error("size must be > 0");
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

// groupBy con clave tipada
export function groupBy<T, K extends PropertyKey>(
  arr: readonly T[],
  key: (item: T) => K
): Record<K, T[]> {
  return arr.reduce((acc, item) => {
    const k = key(item);
    (acc[k] ??= []).push(item);
    return acc;
  }, {} as Record<K, T[]>);
}
