/**
 * Binary search is an efficient algorithm for finding a specific value in a **sorted** array. It works by repeatedly dividing
 *  the search interval in half. If the value to be searched is equal to the middle element of the array, the search is successful.
 * If the value is less than the middle element, the search continues in the lower half of the array; if it is greater,
 * the search continues in the upper half.
 *
 *
 * [0,2,5,7,9] , target = 2
 *
 * Left Index - 0
 * Right Index - 4
 *
 * Mid Index = ( 0 + 4 )/ 2 =  2
 * Mid Value = 5
 *
 * [0,2]
 *
 * [2]
 *
 *
 */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Find the middle index of the current search interval
    let mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
      return mid; // Target found , return its index
    } else if (target > arr[mid]) {
      // if target is greater , search in the right half
      left = mid + 1;
    } else {
      // if target is smaller, search in the left half
      right = mid - 1;
    }
  }

  return -1; // Target not found in the array
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 4;

const result = binarySearch(sortedArray, targetValue);

console.log(result);

// The time complexity of Binary search O(logn)
