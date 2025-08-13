// Cheap copies: slice, concat, spread [...] are O(n). For large, repeated lists, encapsulate mutations in a single pass (reduce) or use persistent structures if critical.

// ReadonlyArray in props: avoid accidental render re-triggers due to mutation; if you need to mutate, clone within the component.

// Normalize before UI mapping (stable key for React): use the actual id, not the index.

// as const for catalogs/menus: gives you exhaustiveness checking when switching elements.