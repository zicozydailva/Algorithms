//  Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.

function bubbleSort(arr) {
  // for optimization
  let noSwaps;
  for (let i = 0; i < arr.length; i++) {
    noSwaps = true;
    for (let j = 0; j < arr.length; j++) {
      // to view swap process
      // console.log(arr, arr[j], arr[j + 1]);

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log(temp);
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([1, 4, 2, 6, 3, 5]));

// OR

function bubbleSort2(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      swap(arr, j, j + 1);
    }
  }
  return arr;
}

console.log(bubbleSort2([1, 4, 2, 6, 3, 5]));
