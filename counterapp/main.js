const DEFAULT = 0
let counter = DEFAULT   // State - Data

window.addEventListener('DOMContentLoaded', function() {

    this.window.document.querySelector("#btnDecr").addEventListener('click', () => onDecreaseClicked())
    this.window.document.querySelector("#btnReset").addEventListener('click', () => onResetClicked())
    this.window.document.querySelector("#btnIncr").addEventListener('click', () => onIncreaseClicked())

})

// Controllers
function onDecreaseClicked() {
    decreaseCounter()
}

function onResetClicked() {
    resetCounter()
}

function onIncreaseClicked() {
    increaseCounter()
}

// Model
function decreaseCounter() {
    counter--; 
    render()
}

function resetCounter() {
    counter = DEFAULT
    render()
}

function increaseCounter() {
    counter++
    render()
}

// View

function render() {
    const counterDOM = document.guerySelector('#counter')
    counterDOM.textContent = counter
    styleCounter(counterDOM)
}

function styleCounter(counterDOM) {
    counterDOM.classlist.toggle('color-green', counter > 0)
    counterDOM.classlist.toggle('color-red', counter < 0)
    counterDOM.classlist.toggle('color-black', counter === 0)

}
