let str = 'Coding Factory'; 

// parse
let s1 = str.substring(1, 5);   //odin
let s2 = str.slice(1, 5);   //odin
let s3 = str.slice(-5);     //ctory

//split
let tokens = str.split(" ") //['Codng', 'Factory']
console.log(tokens); 

//strings are char arrays
console.log(str.charAt(0));     //0
let index = str.indexOf('o');   //1
let index2 = str.lastIndexOf('o');  //11 

//equality
let str1 = "Athens"; 
let str2 = "Athens";
if (str1 == str2) { 
    console.log("Equal")
} else { console.log("Not equal") }; 

//case insensitive
if (str1.toUpperCase() == str2.toUpperCase()) { //normalization
    console.log("Equal")
} else { console.log("Not equal") }; 

//trim
let aString = "   Coding"; 
let trimmed = aString.trim(); 

//concat με + ή/και .concat()
let concatenated = str1 + str2 + aString;  

//RegEx

//Validation
let strInput = 'hello all'
if (/hello/.test(strInput)) {   //regex.test()
    console.log("match found")
} else {
    console.log("no match found")
}; 

// g is global flag δηλαδή ελέγχει όλο το string για matches και η matches επιστρέφει όλα τα matches σε πίνακα

let manyTokens = 'world catch hello'; 
const regex = /w\w+/; 
let matches = manyTokens.match(regex); 
console.log(matches); 

// g is global flag δηλαδή ελέγχει όλο το string για matches και η exec επιστρέφει ένα ένα τα matches 
let match
while ( (match = regex.exec(manyToken)) !== null) {
    console.log(`Found '${match}' at index ${match.index}`)
}; 

