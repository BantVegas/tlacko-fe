export function idsToImages(ids: number[]) {
  return ids.map(n => `/figurka-${n}.jpg`);
}
