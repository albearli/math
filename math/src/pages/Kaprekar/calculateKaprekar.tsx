/**
 * Calculate the steps for Kaprekar's constant
 * @param input a valid number
 */
const KAPREKAR_CONSTANT = "6174";
export default function calculateKaprekar(input: number): string[][][] {
  let steps = [];
  let strValue = input.toString();

  while (strValue !== KAPREKAR_CONSTANT) {
    while (strValue.length < 4) {
      strValue = "0" + strValue;
    }
    const strArr = strValue.split("");

    const ascendingArr = [...strArr].sort();
    const descendingArr = [...strArr].sort().reverse();
    const newNum =
      parseInt(descendingArr.join("")) - parseInt(ascendingArr.join(""));
    strValue = newNum.toString();
    const newArr = strValue.split("");

    steps.push([descendingArr, ascendingArr, newArr]);
  }
  return steps;
}
