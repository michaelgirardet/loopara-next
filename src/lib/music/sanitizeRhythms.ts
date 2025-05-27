export function sanitizeRhythms(rhythms?: string[], fallback: string[] = ["4"]): string[] {
    return Array.isArray(rhythms) && rhythms.length > 0 ? rhythms : fallback;
  }