/**
 * Format follower count (1000 -> 1K, 1000000 -> 1M)
 */
export function formatFollowerCount(count: number | string): string {
  if (typeof count === "string") return count;
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
  if (count >= 1_000) return `${(count / 1_000).toFixed(1)}K`;
  return count.toString();
}

/**
 * Filter valid images (non-empty)
 */
export function getValidImages(images: string[]): string[] {
  return images.filter((src) => src.trim() !== "");
}
