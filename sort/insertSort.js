const arr = [ 5, 8, 2, 7, 1, 9, 4 ];

const insertionSort = (arr) => {
  let n = arr.length;

  for(let i = 0; i <= n - 1; i++) {
    let element = arr[i];
    let j = i;

    while(j  > 0 && arr[j - 1] > element) {
      arr[j] = arr[j - 1];
      j = j - 1;
      arr[j] = element;
    }
  }
};

insertionSort(arr);
console.log(arr);