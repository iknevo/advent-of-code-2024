import { readInput } from "../../utils/readInput";

// const lines = await readInput("./sample.txt");
const lines = await readInput("./input.txt");
function part1() {
  const left: number[] = [];
  const right: number[] = [];
  lines.forEach((line) => {
    const [a, b] = line.split(/\s+/);
    left.push(Number(a));
    right.push(Number(b));
  });
  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);
  const result = left
    .map((item, index) => {
      const diff = Math.abs(item - right[index]!);
      return diff;
    })
    .reduce((sum, value) => sum + value, 0);
  console.log(result);
}
function part2() {
  const left: number[] = [];
  const counts = new Map<number, number>();
  lines.forEach((line) => {
    const [a, b] = line.split(/\s+/);
    left.push(Number(a));
    const value = Number(b);
    counts.set(value, (counts.get(value) || 0) + 1);
  });
  console.log(counts);
  console.log(left);
  const result = left
    .map((item) => {
      const count = counts.get(item) || 0;
      return count * item;
    })
    .reduce((sum, value) => sum + value, 0);
  console.log(result);
}
part1();
part2();
