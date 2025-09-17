const point3D = new Object()
point3d.x = 5
point3d.y = 10
point3d.z = 20 

const point2D = {
    x: 10,
    y: 20, 
    showY: function() {
        return `${this.y}` 
    } 
}

console.log(point2D.x)
console.log(point2['x'])

point2D.showX = function() {
    return `${this.x}` 
}

for (let key in point3D) {
    console.log(`${key}: ${point3D[key]}`)
}

for (const[key, value] of Object.entries(point3D)) {
    console.log(`${key}: ${value}`)
}