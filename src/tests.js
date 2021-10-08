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

const ceasarCipher = (string, shift) => {
    let alph = 'abcdefghijklmnopqrstuvwxyz'
    let upAlph = alph.toUpperCase()
    alph = alph.split('')
    upAlph = upAlph.split('')
    let word = string.split('')
    let diff
    for(let j=0; j<word.length; j++){
        if((word[j] === alph[alph.indexOf(word[j])]) 
        && (alph.indexOf(word[j]) + shift < 26)){
            word[j] = alph[alph.indexOf(word[j]) + shift]
        }else if(word[j] === upAlph[upAlph.indexOf(word[j])]
        && (upAlph.indexOf(word[j]) + shift < 26)){
            word[j] = upAlph[upAlph.indexOf(word[j]) + shift]
        }else if(word[j] === alph[alph.indexOf(word[j])]){
            diff = (alph.indexOf(word[j]) + shift) - 26
            word[j] = alph[diff]
        }else if(word[j] === upAlph[upAlph.indexOf(word[j])]){
            diff = (upAlph.indexOf(word[j]) + shift) - 26
            word[j] = upAlph[diff]
        }  
    }
    word = word.join('')
    return word
}

const averageValue = (arr) => {
    let array = arr
    let average = 0
    for (let item of array){
        average += item
    }
    average = average/(array.length)
    return average
}

const minValue = (arr) => {
    let array = arr
    array = array.sort((a, b) => a - b)
    let min = array[0]
    return min
}

const maxValue = (arr) => {
    let array = arr
    array = array.sort( (a, b) =>  b - a)
    let max = array[0]
    return max
}
const analyze = (arr) => {
    if( typeof arr === 'object'){
        let array = arr
        let average = averageValue(array)
        let min = minValue(array)
        let max = maxValue(array)
        let length = array.length
        return {average, min, max, length}
    }  
}


exports.calculator = calculator
exports.capitalize = capitalize
exports.reverseString = reverseString
exports.ceasar = ceasarCipher
exports.analyze = analyze