// ⚠️ Danger: empty array infers any[]
const bad = [];      // any[]
bad.push("oops");    // no te ayuda el tipado

// ✅ Solutions
const good1: string[] = [];
const good2 = [] as string[];
const good3 = new Array<string>();
