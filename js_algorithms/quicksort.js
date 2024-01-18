/**
 * [3, 5, 1, 2, 7, 4]
 * 
 * [3]
 * 
 * greater than -> [5, 7, 4] 
 * lesser than -> [1, 2]
 * 
 * [5]
 * 
 * greater than -> [7]
 * lesser than -> [4]
 * 
 * less, pivot ,great
 * [4, 5, 7]
 * 
 * [1, 2, 3, 4, 5, 7]
 * 
 * 
 */



function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // choose a pivot
  const pivot = arr[0]

  // partition the array into elements lesser than and greater than the pivot
  const lesser = []
  const greater = []

  for(let i = 1; i < arr.length; i++){
    if(arr[i] < pivot){
        lesser.push(arr[i])
    }else {
        greater.push(arr[i])
    }
  }


  // recursively sort the sub-arrays
  const sortedlesser = quicksort(lesser)
  const sortedgreater = quicksort(greater)


  // combine lesser and greater subarrays and the pivot to get the final sorted array

  return [...sortedlesser, pivot, ...sortedgreater]
}


// Example usage
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = quicksort(unsortedArray);
console.log(sortedArray);

// worst case -> O(n^2)
// best case -> O(nlogn)