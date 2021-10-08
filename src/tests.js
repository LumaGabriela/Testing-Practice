const capitalize = function capitalize(string){
    if (typeof string === 'string'){
        let word = string.split('')
        word[0] = word[0].toUpperCase()
        word = word.join('')
        return word
    }
    
}

const reverseString = function reverseString(string){
    if (typeof string === 'string'){
        let word = ''
        word = string.split('')
        word = word.reverse()
        word = word.join('')
        return word
    }
}
    

const calculator = (() => {
    function add(a, b) {
        if(typeof a === 'number' && typeof b === 'number'){
            return a + b
        }else {
            return 'error'
        }
        
    }
    function subtract(a, b) {
        if(typeof a === 'number' && typeof b === 'number'){
            return a - b
        }else {
            return 'error'
        }
        
    }
    function divide(a, b) {
        if(typeof a === 'number' && typeof b === 'number'){
            return a / b
        }else {
            return 'error'
        }
        
    }
    function multiply(a,b) {
        if(typeof a === 'number' && typeof b === 'number'){
            return a * b
        }else {
            return 'error'
        }
        
    }
    return {add, subtract, divide, multiply}
})()
console.log(calculator.add('3',6))

exports.calculator = calculator
exports.capitalize = capitalize
exports.reverseString = reverseString