//if value is falsy -> emoji (\uD83E\uDD25) falsy
//if value is truthy -. green tick (\u2705) truthy

const checkTruthy = value => value ? "\u2705 Truth" : "\uD83E\uDD25 Falsy"
console.log(checkTruthy([]))
console.log(checkTruthy(0))
console.log("false")


