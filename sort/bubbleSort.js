const arr = [ 5, 8, 2, 7, 1, 9, 4 ];

const bubbleSort = (arr) => {
  const n = arr.length;
  let counter = 0;

  do {  

    for(let i = 0, j = 1; i <= n - 2, j <= n - 1; i++, j++) {
    if(arr[i] > arr[j]) {
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      counter--;
    } else {
      counter++;
    }
    
  }
  counter++;
  }
  while (counter != n - 1);
  
};  

bubbleSort(arr);
console.log(arr); 
  