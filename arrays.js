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

