const arr = [ 5, 2, 7, 3, 4 ];

const n = arr.length;
const newArr = [];

const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;
  
  for(let i = 1; i <= n; i++) {
    if(arr[i] < smallest) {
      smallest  = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectSort = (arr) => {
  
  for(let j = 1; j <= n; j++) {
    small = findSmallest(arr);
    newArr.push(arr[small]);
    arr.splice(small, 1);
  }
  return newArr;  
};  

selectSort(arr);

console.log(process.argv[2]);
console.log(newArr); 