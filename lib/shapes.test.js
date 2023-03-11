const {Circle, Square, Triangle} = require('./shapes');

describe('Square', () => {
    describe('instantiate', () => {
        it('should create an object when called', () => {
            const shape = new Square("red")
            expect(shape !== null).toBeTruthy()
        })
    })
})

describe('Circle', () => {
    describe('instantiate', () => {
        it('should create an object when called', () => {
            const shape = new Circle("red")
            expect(shape !== null).toBeTruthy()
        })
    })
})

describe('Triangle', () => {
    describe('instantiate', () => {
        it('should create an object when called', () => {
            const shape = new Triangle("red")
            expect(shape !== null).toBeTruthy()
        })
    })
})

describe('Square', () => {
    describe('extends', () => {
        it('should properly extend the Shape class', () => {
            const shape = new Square("red")
            expect(shape.fill).toEqual("red")
        })
    })
})

describe('Circle', () => {
    describe('extends', () => {
        it('should properly extend the Shape class', () => {
            const shape = new Circle("red")
            expect(shape.fill).toEqual("red")
        })
    })
})

describe('Triangle', () => {
    describe('extends', () => {
        it('should properly extend the Shape class', () => {
            const shape = new Triangle("red")
            expect(shape.fill).toEqual("red")
        })
    })
})