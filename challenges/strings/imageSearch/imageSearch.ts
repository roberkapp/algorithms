export function imageSearch(images: string[], term: string): string[] {
  return images.filter((image) => image.toLowerCase().includes(term.toLowerCase()));
}
