const arr1 = []; 
const arr2 = [1, 2, 3, 4, 5]; 
const arr3 = new Array(5).fill(0)       // [0, 0, 0, 0, 0] otherwise [undefined, undefined, undefined, undefined, undefined]

const arr = [...arr1, arr2]     //spread operator gives a shallow copy

//Array methods
console.log(arr2.length);   //5
console.log(arr2[0]);       // 1
console.log(arr2[arr2.length - 1]); //4

// Join an array with a delimiter and returns a string
console.log(arr2.join(','))     // γίνεται string 

// Traverse
//Classic for
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
}

// Enhanced for with for.. of
for (let item of arr2) {
    console.log(item)
}


//Functional way, not iterative (είναι μέθοδος, μέσα υποκρύπτεται η for)
arr2.forEach((item, index) => {
    console.log(`Value: ${item}, index: ${index}`);
});

//Stack-like operations - LIFO
arr.push(12)    
let popped = arr.pop()


//Queue-like Operations
arr.shift()     //returns the first elements

//Add to first position
arr.unshift(5)

//Slice
const sliced1 = arr.slice(1)
const sliced2 = arr.slice(1, 3) // startIndex έως endIndex - 1
const sliced3 = arr.slice() //shallow copy

//Splice delete, insert, update
arr.splice(2, 1)    //index 2, removes 1 element

arr.splice(2, 0, 3)     //index 2, remove 0, insert 3

arr.splice(2, 2, 1, 4)      //index 2, removes 2, inserts 1 and 5, updating the array

let spliced = arr.lastIndexOf().splice(2, 1)    //returns a new array

//Array includes
if (arr.includes(3)) {
    console.log('3 included')
} else {
    console.log('not included')
}; 

//indexOf & lastIndexOf
const index = arr.indexOf(5, 2);
if (index === -1) {
    console.log('Not found')
} else{
    console.log('found')
}

//concat
let myConcat = arr.concat(arr3)

//spread operator
let myConcat2 = [...arr, ...arr3]

//min value ενός array
let minVal = Math.min(...arr)
let minIndex = arr.indexOf(minVal)

//max value
let maxVal = Math.max(...arr)
let maxIndex = arr.indexOf(maxVal)

//Destructuring
let grid = [1, 2]
let [x, y] = grid   //x _> 1, y -> 2

let [first, second, ...rest] = arr;     //rest oprator
 
function min(...arr) {      //rest operator
    return Math.min(...arr)     //spread operator
}

let minEl = min(1, 2, 3, 4, 5, 6, 7, 9); 

//Arrays as collections
