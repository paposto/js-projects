const point3D = new Object()
point3D.x = 5
point3D.y = 10
point3D.z = 20 

const user = {
    firstname: 'Alice', 
    lastname: 'Wonderland', 
    hobbies: [{id:1, title: "Hobbie1"}, {id: 2, title: "Tennis"}]

}

const point2D = {
    x: 10,
    y: 20, 
    showY: function() {
        return `${this.y}` 
    } 
}

console.log(point2D.x)
console.log(point2D['x'])

point2D.showX = function() {
    return `${this.x}` 
}

for (let key in point3D) {
    console.log(`${key}: ${point3D[key]}`)
}

for (const[key, value] of Object. entries(point3D)) {
    console.log(`${key}: ${value}`)
}

const cart = {
    items: [],
    addItem(item, price) {
        this.items.push({item, price})
    },
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0)
    }
}

cart.addItem('Milk', 2)
cart.addItem('Eggs', 5)
console.log(cart.calculateTotal())  // 7

// Object destructuring
const {x, y, z} = point3D
console.log(`${x}, ${y}, ${z}`)


// Without destructing - verbose 
function display3DPoint(point) {
    console.log(`x: ${point['x']}`)
    console.log(`x: ${point['y']}`)
    console.log(`x: ${point['z']}`)

}

// With destructing - not verbose 
function display3DPoint(x, y, z = 'Not provided') {
    console.log(`x: ${x}`)
    console.log(`x: ${y}`)
    console.log(`x: ${z}`)
}

const p2 = {
    x: 15, 
    y: 18, 
    z: 22
}

display3DPoint2(p2)