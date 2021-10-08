const tests = require('./tests')
const capitalize = tests.capitalize
const reverseString = tests.reverseString
const calculator = tests.calculator


test('capitalize strings', () => {
    expect(capitalize('a')).toEqual('A')
})
test('reverse string', () => {
    expect(reverseString('Pato')).toEqual('otaP')
})
test('add numbers with calculator', () => {
    expect(calculator.add(3, 5)).toEqual(8)
})
test('returns "error" with non-numbers', () => {
    expect(calculator.add('3', 5)).toEqual('error')
})
test('subtract numbers with calculator', () => {
    expect(calculator.subtract(3, 5)).toEqual(-2)
})
test('divide numbers with calculator', () => {
    expect(calculator.divide(10, 5)).toEqual(2)
})
test('multiply numbers with calculator', () => {
    expect(calculator.multiply(3, 5)).toEqual(15)
})