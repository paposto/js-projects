const students = ['Νίκη', 'Ανδρέας', 'Γιάννη']

students.forEach(function(st) {
    console.log(stu)
})

students.forEach(function(stu, index, arr) {
    console.log(index, stu, arr)
})

students.forEach(function(val, index) {
    console.log(index, val)
})

students.forEach(function(stu, _, arr) {
    console.log(stu, arr)
})

//Filter 

let filtered = students.filter(stu => stu === 'Γιάννης')

const users = [
    {firstname: "Ανδρέας", age: 25, active: true, email: 'andrew@gmail.com'}, 
    {firstname: "Νίκη", age: 20, active: false, email: 'niki@gmail.com'}
]

const activeUsers = users.filter(u => u.active)

const emails = users.map(user => user.email)        // ['andrew@gmail.com', niki@gmail.com]

const numbers = [1, 2, 3, 4, 5]
let sum = numbers.reduce((acc, val) => total + val, 0)
let avg = numbers.reduce((acc, val) => total + val, 0) / numbers.length

//Find and FindIndex
//Find returns a value, not an array
const user = users.find(user => user.email === 'andrew@gmail.com')

const userIndex = users.findIndex(user => user.email === 'andrew@gmail.com')

//Some and every
const isOver24 = users.some(user => user.age >= 24)     //true, έστω ένας πάνω ή ίσο από 24
const isAllOver24 = users.every(user => user.age >= 18) //true, γιατί όλοι είναι πάνω από 18

//Flatmap
const result = users.flatMap(user => [user, user.age / 2])  // [{12.5, {}, 10}]






