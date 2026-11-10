export function getExtension(filename: string): string {
  const extension = filename.split('.').at(-1);
  return filename.includes('.') && extension ? extension : 'none';
}
