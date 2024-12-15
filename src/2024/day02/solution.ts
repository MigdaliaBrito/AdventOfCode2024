import * as fs from "fs";
import * as path from "path";

export const parseInput = (input: string): string[] => {
  return input.trim().split("\n");
};

export const part1 = (input: string): number => {
  const data = parseInput(input);
  // Your solution here
  return 0;
};

export const part2 = (input: string): number => {
  const data = parseInput(input);
  // Your solution here
  return 0;
};

if (require.main === module) {
  const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
  console.log(`Part 1: ${part1(input)}`);
  console.log(`Part 2: ${part2(input)}`);
}
