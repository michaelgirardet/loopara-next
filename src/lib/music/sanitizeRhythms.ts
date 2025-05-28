export function sanitizerhythm(rhythm?: string[], fallback: string[] = ["4"]): string[] {
  return Array.isArray(rhythm) && rhythm.length > 0 ? rhythm : fallback;
}
