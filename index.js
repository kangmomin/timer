class Timer {
    constructor() {
        return {
            init() {
                this.startTime = 0
                this.endTime = 0
                this.time = 0
                this.isEnd = false
            },
            start() {
                const date = new Date()
                this.startTime = (date.getTime() + date.getMilliseconds()/1000)
                this.isEnd = false
            },
            end() {
                const date = new Date()
                this.endTime = (date.getTime() + date.getMilliseconds())
                this.time = (this.endTime - this.startTime) / 1000
                this.isEnd = true
            },
            startTime: 0,
            endTime: 0,
            time: 0,
            isEnd: false
        }
    }
}

main()

function main() {
    const testList = [1, 21, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const pure_for = new Timer()
    const for_of = new Timer()
    const for_each = new Timer()

    pure_for.init()
    for_each.init()
    for_of.init()
    
    // pure_for.start()
    // pureFor(testList)
    // pure_for.end()
    
    // console.time("pure")
    // pureFor(testList)
    // console.timeEnd("pure")
    
    // console.log(`pure for: ${pure_for.time}`)
    
    test()[0]()
    test()[1]()
    
    function test() {
        return [
        () => {
            for_of.start()
            setTimeout(() => {
                for_of.end()        
                console.log(`for of: ${for_of.time}`)
            }, 1000)
        },
        () => {
            console.time("a")
            setTimeout(() => {
                console.timeEnd("a")
            }, 1000)
        }]
    }
}

function pureFor(testList) {
    for (let i = 0; i < testList; i++) {
        const x = testList[i]
    }
}
function forOf(testList) {
    for (test of testList) {}
}
function forEach(testList) {
    testList.forEach()
}
