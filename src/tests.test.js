const tests = require('./tests')
const capitalize = tests.capitalize
const reverseString = tests.reverseString
const calculator = tests.calculator
const ceasarCipher = tests.ceasar
const analyze = tests.analyze

test.skip('capitalize strings', () => {
    expect(capitalize('a')).toEqual('A')
})
test.skip('reverse string', () => {
    expect(reverseString('Pato')).toEqual('otaP')
})
test.skip('add numbers with calculator', () => {
    expect(calculator.add(3, 5)).toEqual(8)
})
test.skip('returns "error" with non-numbers', () => {
    expect(calculator.add('3', 5)).toEqual('error')
})
test.skip('subtract numbers with calculator', () => {
    expect(calculator.subtract(3, 5)).toEqual(-2)
})
test.skip('divide numbers with calculator', () => {
    expect(calculator.divide(10, 5)).toEqual(2)
})
test.skip('multiply numbers with calculator', () => {
    expect(calculator.multiply(3, 5)).toEqual(15)
})
test('ceasar cipher with punctuation', () => {
    expect(ceasarCipher('Pato, gato', 1)).toEqual('Qbup, hbup')
})
test('Analyze an array of numbers then return an object', () => {
    let array = [-9, 4, 5, 7, 15]
    expect(analyze(array)).toEqual({
        "average": 4.4,
        "min": -9,
        "max": 15,
        "length": 5
    })
})