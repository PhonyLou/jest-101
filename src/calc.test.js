import {add} from './calc'

describe('calculator', () => {
    it('adds two numbers', () => {
        expect(add(1, 2)).toEqual(3)
    })

    it('basic usage', () => {
        expect(1+1).toEqual(2)
        expect(1+1).toBe(2)
        
        expect('Hello Qilin').toEqual('Hello Qilin')
        expect('Hello Qilin').toBe('Hello Qilin')
    })
})
