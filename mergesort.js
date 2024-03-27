#!/usr/bin/env node

function merge(leftArray, rightArray) {
  const mergeArray = [];
  const totalLength = leftArray.length + rightArray.length;
  let leftCount = 0;
  let rightCount = 0;

  for (let i = 0; i < totalLength; i++ ) {
    if (leftArray[leftCount] < rightArray[rightCount] || !rightArray[rightCount]) {
      mergeArray.push(leftArray[leftCount]);
      leftCount++;
    } else {
      mergeArray.push(rightArray[rightCount]);
      rightCount++;
    }
  }

  return mergeArray;
}

function mergeSort(array) {
  if (array.length > 1) {
    let mid = Math.round(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);

    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    return merge(leftSorted, rightSorted);
  } else {
    return array;
  }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));