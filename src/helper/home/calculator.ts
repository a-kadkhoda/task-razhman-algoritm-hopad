export function bitsToGbps(bitsPerSecond: number) {
  return Math.round((bitsPerSecond / 1_000_000_000) * 10) / 10;
}
