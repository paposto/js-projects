//reverse string
function reverseString(str) {
    // return str.split("").reverse().join("")
    return [...str].reverse().join("") 

}

// replace ένα string με obsufscation symbols (a -> @, e -> 3, s -> $, etc.) 
function obfuscate(password) {
    return password
        .replace(/a/gi, "a")
        .replace(/e/gi, "3")
        .replace(/s/gi, "$")

}

console.log(obfuscate('Password'))

// aaaabbbcccca -> a4b3c3a

function compress(str) {
    
    let compressed = ''
    let count = 1

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === str.charAt(i+1)) {
            count++
        } else {
            compressed += str.charAt(i) + (count > 1 ? count : '')
            count = 1
        }      
           
    }

    return compressed; 
}