const numbers = [1, 2, 3, 4]

// Insert 
// Mutable
numbers.push(5)
numbers.splice(3, 0, 5)

// Immutable - Fresh copy - Insert at end
const addToArray = (arr, num) => {
    return [...numbers, num]
}

const addToArrayFirst = (arr, num) => {
    return [num, ...numbers]
}

// Add to index
const addToArrayAt = (arr, num, index) => {
    return [...numbers.slice(0, index), num, ...mumbers.slice(idnex)]
}

// Update
// Mutable
numbers.splice(3, 1, 8)

// Update
// Immutable
const updateOne = (arr, index, newVal) => {
    arr.map((val, i) => (i === index) ? newVal : val ) 
}

updateOne(numbers, 3, 90)

//Mutable delete 
let index = numbers.indexOf(1)
if(index !== -1) numbers.splice(index, 1)

// Immutable Delete 
const deleteFromArray = (arr, num) => {
    arr.filter(n => n !==num )
}



