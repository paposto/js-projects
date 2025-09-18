// uses this

function Person(name) {
    this.name = name 
}

const person = new Person('Alice')

function Counter() {
    this.count = 0  // public by default

    this.increment = function() {
        this.count++
    }

    this.getCount = function() {
        return this.count 
    }
}

const counter = new Counter()
counter.increment()
counter.increment()
console.log(counter.getCount())

function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.getInfo = function() {
        return `${this.title}, by ${this.author} , ${this.title}`
    }
}

const book1 = new Book("Java", "Petros", "2025")
console.log(book1.getInfo())

class BookClass {
    constructor (title, author, year) {
        this.title = title
        this.author = author
        this.year = year
        this.getInfo = function() {
            return `${this.title}, by ${this.author} , ${this.title}`
        }
    }
}

const book2 = new BookClass("JS", "Petros", "2025")
console.log(book2.getInfo())