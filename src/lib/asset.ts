// Resolve a public-asset path to one that respects Vite's `base` config.
// At dev time `import.meta.env.BASE_URL` is "/", so `asset("/foo.webp")`
// stays `/foo.webp`. In production we build with VITE_BASE=/landing/boarding/
// so the same call resolves to `/landing/boarding/foo.webp`.
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const trimmed = path.replace(/^\//, "");
  return `${base}${trimmed}`;
}
