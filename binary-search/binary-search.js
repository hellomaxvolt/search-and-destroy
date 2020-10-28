"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  //   if (typeof target !== "number") {
  //     return "please enter a valid number";
  //   }
  let midpoint = Math.floor(array.length / 2);

  if (array.length === 1 && target !== array[midpoint]) {
    return false;
  } else {
    if (target === array[midpoint]) {
      return true;
    } else {
      if (array.length > 1) {
        if (target > array[midpoint]) {
          const greaterThanArray = array.slice(midpoint, array.length);
          return binarySearch(greaterThanArray, target);
        } else {
          const lessThanArray = array.slice(0, midpoint);
          return binarySearch(lessThanArray, target);
        }
      }
    }
  }
};

// console.log('MIDPOINT', midpoint)

// if (target !== array[midpoint]) {

// if (target > array[midpoint]) {
// const greaterThanArray =	array.slice(midpoint, array.length)
// binarySearch(greaterThanArray, target)

// } else if (target < array[midpoint]) {
// 	const lessThanArray = array.slice(0, midpoint)
// 	binarySearch(lessThanArray, target)

// }  else {
// 	return false
// }

// }
// return true

// };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
