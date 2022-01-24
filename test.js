import Timer from './index'

const testList = [1, 21, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const pure_for = new Timer()
const for_of = new Timer()
const for_each = new Timer()

let result = 0
let pureResult = []
let ofResult = []
let eachResult = []

pure_for.init()    
for_of.init()
// for_each.init()

result = 0
for (let i = 0; i < 1000; i++) {
    pure_for.start()
    pureFor(testList)
    pure_for.end()
    pureResult.push(pure_for.time)
}

for (let i = 0; i < pureResult.length; i++) {
    result += pureResult[i]
}

console.log(result / pureResult.length)

// ========================================
//               for of
// ========================================
result = 0
for (let i = 0; i < 1000; i++) {
    for_of.start()
    forOf(testList)
    for_of.end()
    ofResult.push(for_of.time)
}

for (let i = 0; i < ofResult.length; i++) {
    result += ofResult[i]
}

console.log(result / ofResult.length)

// ========================================
//               for of
// ========================================
result = 0
for (let i = 0; i < 1000; i++) {
    for_each.start()
    forEach(testList)
    for_each.end()
    eachResult.push(for_each.time)
}

for (let i = 0; i < eachResult.length; i++) {
    result += eachResult[i]
}

console.log(result / eachResult.length)

function pureFor(testList) {
    for (let i = 0; i < testList.length; i++) {
        const x = testList[i]
    }
}
function forOf(testList) {
    for (test of testList) {
        const x = test
    }
}
function forEach(testList) {
    testList.forEach(test => {const x = test})
}