// Índices “de marca” a partir de la longitud en tiempo de tipo
type Range<N extends number, Acc extends unknown[] = []> =
  Acc["length"] extends N ? Acc[number] : Range<N, [...Acc, Acc["length"]]>;

// Solo índices válidos para un array de longitud Len
type IndexOfLen<Len extends number> = Range<Len>;

function at<T extends readonly unknown[], I extends IndexOfLen<T["length"]>>(
  arr: T, i: I
): T[I] {
  return arr[i];
}

const tuple = ["x", "y", "z"] as const;
const ok = at(tuple, 2);  // "z"
// const nope = at(tuple, 3); // ❌ índice inválido en tipo
