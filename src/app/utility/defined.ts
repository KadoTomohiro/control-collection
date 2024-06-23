export function defined<T>(value: unknown): value is T {
  return value !== undefined && value !== null;
}
