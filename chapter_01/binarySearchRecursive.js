// recursive js implementation of binary search from chapter 1
// input: first arg is sorted array, second arg is an item that we are looking for
// output: null if we didn't find right element, or index of correct elemen if
// we found it
//
// @ToDo i'm missing index while recursion. need to fix it
const binarySearchRec = (arr, item) => {
  if (typeof arr === 'undefined' || arr.length === 0) {
    return null;
  }
  const binaryRecursiveHelper = (start, end) => {
    const mid = Math.floor((start + end) / 2);
    const guess = arr[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      return binaryRecursiveHelper(start, mid - 1);
    } else if (guess < item) {
      return binaryRecursiveHelper(mid + 1, end);
    }
    return null;
  };


  return binaryRecursiveHelper(0, arr.length - 1);
};

const myArr = [1, 2, 3, 4, 5, 7];
const myArr2 = [];
console.log(` binary search result: ${binarySearchRec(myArr, 3)}, expected: 2`);
console.log(` binary search result: ${binarySearchRec(myArr, 1)}, expected: 0`);
console.log(` binary search result: ${binarySearchRec(myArr, 7)}, expected: 5`);
console.log(` binary search result: ${binarySearchRec(myArr, 0)}, expected: null`);
console.log(` binary search result: ${binarySearchRec(myArr2, 3)}, expected: null`);
export default binarySearchRec;
