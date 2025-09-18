function createCounter() {
    let count = 0;      // private state 

    return {
        increment : function increment() {
            count++
        },

        getCount : function getCount() {
            return count
        }
    } 
}

const counter = createCounter()
counter.increment()     // 1
counter.increment()     // 2
console.log(counter.getCount())

function calculator() {
    let memory = 0

    return function add(a, b) {
        memory = a + b
        return memory
    }
}

const myAdd = calculator()
console.log(myAdd(3, 10))

// Not this, υπάρχει closure και επομένως
// επομένως οι inner functions έχουν πρόβαση στο private 
// state - outer state 
// variables are private by default
// private & public API
