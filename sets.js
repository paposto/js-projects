let bag = new Set()
bag.add("Java")
bag.add("Python")
bag.delete("Java")

if (bag.has('Python')) console.log('has Python')

function addToSet(set, ...values) {
    values.forEach(value => set.add(value))
}

const set = new Set()
addToSet(set, 1, 2, 3, 4, 5, 6)

function createSet(...elements) {
    return new Set(elements)        // typecast array to sets
}

createSet(1, 2, 3, 4, 5)