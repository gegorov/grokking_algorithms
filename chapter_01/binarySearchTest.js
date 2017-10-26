
import { binarySearchRec as bsr } from '../chapter_01/binarySearchRecursive';
// import binarySearch from './binarySearch';

const myArr = [1, 2, 3, 4, 5, 7];
const myArr2 = [];
console.log(` binary search result: ${bsr(myArr, 3)}, expected: 2`);
console.log(` binary search result: ${bsr(myArr, 1)}, expected: 0`);
console.log(` binary search result: ${bsr(myArr, 7)}, expected: 5`);
console.log(` binary search result: ${bsr(myArr, 0)}, expected: null`);
console.log(` binary search result: ${bsr(myArr2, 3)}, expected: null`);
