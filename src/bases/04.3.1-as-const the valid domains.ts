// Immutable catalog of valid values
const ROLES = ["admin", "editor", "viewer"] as const;
type Role = typeof ROLES[number]; // "admin" | "editor" | "viewer"

// Verify that your data “satisfies” the domain (without losing literals)
const DEFAULT_ROLES = ["viewer"] as const satisfies readonly Role[];
