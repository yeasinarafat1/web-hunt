export function setSearchParams({ q, page }: { q: string; page: string }) {
  const params = new URLSearchParams({ q: q.trim(), page });
  return params.toString();
}
