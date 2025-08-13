type Item = { kind: "ok"; value: number } | { kind: "err"; msg: string };

const items: Item[] = [
  { kind: "ok", value: 1 },
  { kind: "err", msg: "boom" },
  { kind: "ok", value: 3 },
];

const isOk = (x: Item): x is Extract<Item, { kind: "ok" }> => x.kind === "ok";

const oks = items.filter(isOk); // { kind: "ok"; value: number }[]
const sum = oks.reduce((s, i) => s + i.value, 0);
