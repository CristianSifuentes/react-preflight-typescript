// Evitar mutaciones no-intencionadas: expón readonly, clona cuando necesites mutar.
const myArray: readonly number[] = [1, 2, 3, 4, 5, 6];

// Clonado “barato” para mutar localmente
const myArray2: number[] = [...myArray];
myArray2.push(7);

// Ejemplo de operación inmutable encadenada
const next = [...myArray, 7].filter(n => n % 2 === 1).map(n => n * 10); // number[]

// Dominio con literals preservados
const LABELS = ["uno", "dos", "tres"] as const;
type Label = typeof LABELS[number];

const entries: Array<[id: number, label: Label]> = [
  [1, "uno"],
  [2, "dos"],
  [3, "tres"],
];

console.log({ myArray, myArray2, next, entries });
