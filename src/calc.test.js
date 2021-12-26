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

    it('match object', () => {
        const user = {
            name: 'Qilin',
            address: 'One City'
        }

        expect(user.name).toBeDefined()
        expect(user.age).not.toBeDefined()
    })

    it('string contains', () => {
        const givenName = expect.stringContaining('Qilin')
        expect('Qilin Lou').toEqual(givenName)
    })

    it('array', () => {
        const users = ['Qilin', 'Juntao', 'Alex']
        const confirmedUserSet = expect.arrayContaining(['Qilin', 'Juntao'])
        expect(users).toEqual(confirmedUserSet)
    })

    it('mock implementation', () => {
        const fakeAdd = jest.fn().mockImplementation((a, b) => 5)
        expect(fakeAdd(1, 1)).toBe(5)
        expect(fakeAdd).toHaveBeenCalledWith(1, 1)

    })
})

export const fetchUser = (id, process) => {
    return fetch(`http://localhost:4000/users/${id}`)
}

describe('mock API call', () => {
    const user = {
        name: 'Qilin'
    }
    it('mock fetch', () => {
        // given
        global.fetch = jest.fn().mockImplementation(() => Promise.resolve({user}))
        const process = jest.fn()

        // when
        fetchUser(111).then(x => console.log(x))

        // then
        expect(global.fetch).toHaveBeenCalledWith('http://localhost:4000/users/111')
    })
})
