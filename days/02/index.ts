import { readInput } from "../../utils/readInput";

function isSafe(levels: number[]) {
  const isDesc = levels[0]! - levels[1]! < 0;
  for (let i = 1; i <= levels.length - 1; i++) {
    const current = levels[i - 1]!;
    const next = levels[i]!;
    let difference = current - next;
    const currentDesc = difference < 0;
    difference = Math.abs(difference);
    if (!(difference > 0 && difference <= 3)) return false;
    if (isDesc !== currentDesc) return false;
  }
  return true;
}

async function part1(path: string) {
  const reports = await readInput(path);
  return reports.filter((report) => {
    const levels = report.split(/\s+/).map(Number);
    return isSafe(levels);
  }).length;
}
export async function part2(path: string) {
  const reports = await readInput(path);
  return reports.filter((report) => {
    const levels = report.split(/\s+/).map(Number);
    return (
      isSafe(levels) ||
      levels.some((_, idx) => isSafe(levels.toSpliced(idx, 1)))
    );
  }).length;
}
console.log(await part1("./sample.txt"));
console.log(await part1("./input.txt"));
console.log(await part2("./sample.txt"));
console.log(await part2("./input.txt"));
