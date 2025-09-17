// Keyword function
function sayHello(name) {
    return `Hello ${name}`
}

// Function expression
const add = function(a, b) {
    return a + b
}

// Arrow function
const mul = (a, b) => a * b 

function createDate(day = 1, month = 1, year = 20025) {
    return `${day}, ${month}, ${year}`
}

createDate()        // 1/1/2025
createDate(5, 10, 2025)
createDate(9)       // 9/1/2025
createDate(6, 12)   // 6/12/2025

// Rest operator 
function max(...rest) {
    let maxVal = -Infinity

    for (let n of rest) {
        if (n > maxVal) maxVal=n 
    }
    return maxVal
}
max (1, 2, 3, 4, 5)

