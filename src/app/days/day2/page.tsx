import { splitStrings } from "@/app/utils/splitStrings";
import { puzzleInput } from "./input";

export default function Page() {
  const reports = puzzleInput.trim().split(/\n/);
  let safeReportCount = 0;

  for (let index = 0; index < reports.length; index++) {
    // The levels are either all increasing or all decreasing.
    let condition1 = true;

    // Any two adjacent levels differ by at least one and at most three.
    let condition2 = true;

    const currentReport = reports[index];
    const levels = currentReport.split(" ").map(Number);
    const currentLevel = levels[index];
    const nextLevel = levels[index + 1];
    const diff = currentLevel - nextLevel;
    const currentDiff = Math.abs(currentLevel - nextLevel);

    if (currentDiff < 1 && currentDiff > 3) {
      condition2 = false;
    }

    if (condition1 && condition2) {
      safeReportCount++;
    }
  }

  return (
    <>
      Puzzle input: <pre>{reports}</pre>
      <p>Number of safe reports 1 (part 1 - should be 2): {safeReportCount}</p>
    </>
  );
}
