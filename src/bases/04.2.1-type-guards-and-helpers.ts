// Narrow filter with type guard
function isDefined<T>(x: T | null | undefined): x is T {
   return x != null;
}

const maybe = [1, undefined, 3, null, 5];
const defined = maybe.filter(isDefined); // number[]


// ElementOf: get the type of the array elements
type ElementOf<T extends readonly unknown[]> = T extends readonly (infer U)[] ? U : never;
type ElementOf2<T extends readonly unknown[]> = T[number];

const palette = ["#000", "#fff", "#0ff"] as const;
type ColorHex = ElementOf<typeof palette>;// "#000" | "#fff" | "#0ff"