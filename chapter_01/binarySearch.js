//  js implementation of binary search from chapter 1
// input: first arg is sorted array, second arg is an item that we are looking for
// output: null if we didn't find right element, or index of correct elemen if
// we found it
const binarySearch = (arr, item) => {
  if (typeof arr === 'undefined' || arr.length === 0) {
    return null;
  }
  let indexLow = 0;
  let indexHigh = arr.length - 1;

  while (indexLow <= indexHigh) {
    const mid = Math.floor((indexLow + indexHigh) / 2);
    const guess = arr[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      indexHigh = mid - 1;
    } else {
      indexLow = mid + 1;
    }
  }
  return null;
};

const myArr = [1, 2, 3, 4, 7, 9, 10, 4343, 5000];
const myArr2 = [];
console.log(` binary search result: ${binarySearch(myArr, 2)} expected to be 1`);
console.log(` binary search result: ${binarySearch(myArr, 12)} expected to be null`);
console.log(` binary search result: ${binarySearch(myArr2, 2)} expected to be null`);
export default binarySearch;
