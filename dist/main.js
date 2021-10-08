/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tests.js":
/*!**********************!*\
  !*** ./src/tests.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("const capitalize = function capitalize(string){\r\n    if (typeof string === 'string'){\r\n        let word = string.split('')\r\n        word[0] = word[0].toUpperCase()\r\n        word = word.join('')\r\n        return word\r\n    }\r\n    \r\n}\r\n\r\nconst reverseString = function reverseString(string){\r\n    if (typeof string === 'string'){\r\n        let word = ''\r\n        word = string.split('')\r\n        word = word.reverse()\r\n        word = word.join('')\r\n        return word\r\n    }\r\n}\r\n    \r\n\r\nconst calculator = (() => {\r\n    function add(a, b) {\r\n        if(typeof a === 'number' && typeof b === 'number'){\r\n            return a + b\r\n        }else {\r\n            return 'error'\r\n        }       \r\n    }\r\n    function subtract(a, b) {\r\n        if(typeof a === 'number' && typeof b === 'number'){\r\n            return a - b\r\n        }else {\r\n            return 'error'\r\n        }\r\n    }\r\n    function divide(a, b) {\r\n        if(typeof a === 'number' && typeof b === 'number'){\r\n            return a / b\r\n        }else {\r\n            return 'error'\r\n        }\r\n    }\r\n    function multiply(a,b) {\r\n        if(typeof a === 'number' && typeof b === 'number'){\r\n            return a * b\r\n        }else {\r\n            return 'error'\r\n        }\r\n    }\r\n    return {add, subtract, divide, multiply}\r\n})()\r\n\r\nconst ceasarCipher = (string, shift) => {\r\n    let alph = 'abcdefghijklmnopqrstuvwxyz'\r\n    let upAlph = alph.toUpperCase()\r\n    alph = alph.split('')\r\n    upAlph = upAlph.split('')\r\n    let word = string.split('')\r\n    let diff\r\n    for(let j=0; j<word.length; j++){\r\n        if((word[j] === alph[alph.indexOf(word[j])]) \r\n        && (alph.indexOf(word[j]) + shift < 26)){\r\n            word[j] = alph[alph.indexOf(word[j]) + shift]\r\n        }else if(word[j] === upAlph[upAlph.indexOf(word[j])]\r\n        && (upAlph.indexOf(word[j]) + shift < 26)){\r\n            word[j] = upAlph[upAlph.indexOf(word[j]) + shift]\r\n        }else if(word[j] === alph[alph.indexOf(word[j])]){\r\n            diff = (alph.indexOf(word[j]) + shift) - 26\r\n            word[j] = alph[diff]\r\n        }else if(word[j] === upAlph[upAlph.indexOf(word[j])]){\r\n            diff = (upAlph.indexOf(word[j]) + shift) - 26\r\n            word[j] = upAlph[diff]\r\n        }  \r\n    }\r\n    word = word.join('')\r\n    return word\r\n}\r\n\r\nconst averageValue = (arr) => {\r\n    let array = arr\r\n    let average = 0\r\n    for (let item of array){\r\n        average += item\r\n    }\r\n    average = average/(array.length)\r\n    return average\r\n}\r\n\r\nconst minValue = (arr) => {\r\n    let array = arr\r\n    array = array.sort((a, b) => a - b)\r\n    let min = array[0]\r\n    return min\r\n}\r\n\r\nconst maxValue = (arr) => {\r\n    let array = arr\r\n    array = array.sort( (a, b) =>  b - a)\r\n    let max = array[0]\r\n    return max\r\n}\r\nconst analyze = (arr) => {\r\n    if( typeof arr === 'object'){\r\n        let array = arr\r\n        let average = averageValue(array)\r\n        let min = minValue(array)\r\n        let max = maxValue(array)\r\n        let length = array.length\r\n        return {average, min, max, length}\r\n    }  \r\n}\r\n\r\n\r\nexports.calculator = calculator\r\nexports.capitalize = capitalize\r\nexports.reverseString = reverseString\r\nexports.ceasar = ceasarCipher\r\nexports.analyze = analyze\n\n//# sourceURL=webpack://testing-practice/./src/tests.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/tests.js"](0, __webpack_exports__);
/******/ 	
/******/ })()
;