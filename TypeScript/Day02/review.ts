const numData = [10];

function minNum(numData: number[]) {
  if (numData.length == 1) {
    return [-1];
  } else {
    const min = numData.sort()[0];
    const newArr = numData.filter((v) => v != min);
    return newArr;
  }
}
console.log(minNum(numData));

const solution = (arr: number[]): number[] =>
  arr.length == 1 ? [-1] : arr.filter((v) => v != arr.sort()[0]);
