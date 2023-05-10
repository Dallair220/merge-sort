function merge(leftArray, rightArray) {
  let i = 0;
  let j = 0;
  let merged = [];
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      merged.push(leftArray[i]);
      i++;
    } else {
      merged.push(rightArray[j]);
      j++;
    }
  }

  if (i === leftArray.length) {
    var remainingRight = rightArray.slice(j);
    merged = merged.concat(remainingRight);
  }
  if (j === rightArray.length) {
    var remainingLeft = leftArray.slice(i);
    merged = merged.concat(remainingLeft);
  }

  return merged;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let mid = arr.length / 2;
  let leftArray = mergeSort(arr.slice(0, mid));
  let rightArray = mergeSort(arr.slice(mid));

  return merge(leftArray, rightArray);
}

const sort = [
  6, 3, 7, 5, 8, 1, 2, 5, 6, 23, 5, 0, 9, 2, 5, 23, 52, 32, 64, 2, 143, 34,
];
console.log(mergeSort(sort));
