// Definimos un catálogo FUENTE DE VERDAD con literales preservados
const FEATURES = [
  { key: "rsc", label: "React Server Components" },
  { key: "ppr", label: "Partial Prerendering"   },
  { key: "swc", label: "SWC"                    },
] as const;

// En dominios grandes, forzamos la forma sin perder el literal
const AVAILABLE: readonly (typeof FEATURES[number])[] =
  FEATURES satisfies readonly { key: string; label: string }[];
