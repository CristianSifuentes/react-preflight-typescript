// 5.1. Ordenar sin mutar
const sorted = [...scores].sort((a, b) => a - b);

// 5.2. Quitar duplicados preservando orden
const unique = Array.from(new Set(scores));

// 5.3. Particionar por predicado
function partition<T>(arr: readonly T[], pred: (x: T) => boolean): [T[], T[]] {
  return arr.reduce<[T[], T[]]>(
    (acc, x) => (pred(x) ? (acc[0].push(x), acc) : (acc[1].push(x), acc)),
    [[], []]
  );
}
const [evens, odds] = partition([1,2,3,4], x => x % 2 === 0);

// 5.4. Asegurar tipos literales en opciones de UI
const SIZES = ["sm", "md", "lg"] as const;
type Size = typeof SIZES[number];
function isSize(x: string): x is Size { return (SIZES as readonly string[]).includes(x); }

// 5.5. Map con claves estrictas
type RecordFrom<T extends readonly string[]> = { [K in T[number]]: number };
const KEYS = ["hp", "atk", "def"] as const;
const baseStats: RecordFrom<typeof KEYS> = { hp: 100, atk: 50, def: 30 };
