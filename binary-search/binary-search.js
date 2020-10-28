'use strict';

// Complete this algo
const binarySearch = (array, target) => {

	if (typeof target !== 'number') {
		return 'please enter a valid number'
	}

	let midpoint = Math.floor(array.length / 2)

	console.log('MIDPOINT', midpoint)

	while (target !== array[midpoint]) {

	if (target > array[midpoint]) {
	const greaterThanArray =	array.slice(midpoint, array.length)
	binarySearch(greaterThanArray, target)

	} else if (target < array[midpoint]) {
		const lessThanArray = array.slice(0, midpoint)
		binarySearch(lessThanArray, target)

	} else if (target === array[midpoint]) {
		return true
	} else {
		return false
	}

	}

};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
