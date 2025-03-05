import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function setSearchParams({ q, page }: { q: string; page: string }) {
  const params = new URLSearchParams({ q: q.trim(), page });
  return params.toString();
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
