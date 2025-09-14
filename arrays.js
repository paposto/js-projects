const arr1 = []; 
const arr2 = [1, 2, 3, 4, 5]; 
const arr3 = new Array(5).fill(0)       // [0, 0, 0, 0, 0] otherwise [undefined, undefined, undefined, undefined, undefined]

const arr = [...arr1, arr2]     //spread operator gives a shallow copy

//Array methods
console.log(arr2.length);   //5
console.log(arr2[0]);       // 1
console.log(arr2[arr2.length - 1]); //4
console.log(arr2.join(','))     // γίνεται string 
