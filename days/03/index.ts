import { readInput } from "../../utils/readInput";

function multiply(operation: string) {
  const match = operation.match(/mul\((\d{1,3}),(\d{1,3})\)/);
  if (!match) {
    console.error("Invalid format");
    return;
  }
  const [, x, y] = match;
  return Number(x) * Number(y);
}
async function partOne(path: string) {
  const lines = await readInput(path);
  const memory = lines.join("");
  return (memory.match(/\mul\(\d{1,3},\d{1,3}\)/g) || []).reduce(
    (sum, value) => sum + multiply(value)!,
    0
  );
}
export async function partTwo(path: string) {
  const lines = await readInput(path);
  const memory = lines.join("");
  const operations = memory.match(/\mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g)!;
  let sum = 0;
  let shouldMultiply = true;
  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];
    if (operation === "do()") {
      shouldMultiply = true;
    } else if (operation === "don't()") {
      shouldMultiply = false;
    } else if (shouldMultiply) {
      sum += multiply(operation);
    }
  }
  return sum;
}
// console.log(await partOne("./sample.txt"));
// console.log(await partOne("./input.txt"));
console.log(await partTwo("./sample-2.txt"));
console.log(await partTwo("./input.txt"));
