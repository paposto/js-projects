function insert(arr, product) {
    try {
        if (!product || typeof product != 'object') {
            throw new Error('Invalid Product')
        }

        if (arr.some(p => p.id === product.id)) {
            throw new Error('Product already exists')
        }

        arr.push(product)
        console.log(`Product inserted: ${JSON.stringify(product)}`)
    } catch (error) {
        console.error(`${new Date().toLocaleString()}. Error inserting product: ${error.message}`)
        throw error     //re-throw
    }
}

const products = []
try {
    insert(products, {id: 1, title: 'Laptop', price: 1000})
    insert(products, {id: 1, title: 'Smartphone', price: 500})
} catch (error) {
    console.log(`Error. ${error.message}`)
}