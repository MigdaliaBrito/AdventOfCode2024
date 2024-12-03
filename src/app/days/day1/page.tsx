import { locationIds } from "./input";

const createLeftRightArraysSorted = (splitString: string[]): number[][] => {
  //every odd one array, even another 2 arrays
  let left = []; // odd
  let right = []; // event

  for (let index = 0; index < splitString.length; index++) {
    if (index % 2 === 0) {
      left.push(Number(splitString[index].slice(0, 5)));
    } else {
      right.push(Number(splitString[index].slice(0, 5)));
    }
  }

  return [left.sort(), right.sort()];
};

export default function Page() {
  const splitString = locationIds.trim().split(/\s+/);
  const [left, right] = createLeftRightArraysSorted(splitString);

  const combinedArray = left.map((leftElement, index) => {
    const rightElement = right[index];

    return Math.abs(leftElement - rightElement);
  });

  const total = combinedArray.reduce((sum, num) => sum + num, 0);

  return (
    <>
      Total: <strong>{total}</strong>
    </>
  );
}
