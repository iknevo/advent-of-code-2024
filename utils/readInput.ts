export async function readInput(path: string) {
  const file = Bun.file(path);
  const text = await file.text();
  return text.trim().split("\n");
}
