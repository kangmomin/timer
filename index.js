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
                this.startTime = performance.now()
                this.isEnd = false
            },
            end() {
                this.endTime = performance.now()
                this.time = (this.endTime - this.startTime) / 1000
                // console.log(this.time)
                this.isEnd = true
            },
            startTime: 0,
            endTime: 0,
            time: 0,
            isEnd: false
        }
    }
}

export default Timer