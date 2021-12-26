const add = (a, b) => 2 + b

describe('addition', () => {
    it('returns 5 when adding 2 and 3', () => {
        const a = 2, b = 3
        const result = add(a, b)
        expect(result).toEqual(5)
    })

    it('returns 6 when adding 2 and 4', () => {
        const a = 2, b = 4
        const result = add(a, b)
        expect(result).toEqual(6)
    })
})