import {
    addBooksToUser,
    makeHairStyle,
    moveUser, removeBook, updateBook,
    upgradeUser,
    UserType,
    UserWithBooks,
    UserWithLaptopType
} from "./10_01";



test('reference type test',() => {
    let user:UserType={
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }
    }
    const awesomeUser = makeHairStyle(user, 2)
    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address',() => {
    let user:UserWithLaptopType={
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title:'Zenbook'
        }
    }
    const movedUser = moveUser(user, 'Boston')

    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Boston')
})

test('upgrade user laptop',()=>{
    let user:UserWithLaptopType={
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title:'Zenbook'
        }
    }

    const upgradedUser = upgradeUser(user, 'Macbook')

    expect(upgradedUser).not.toBe(user)
    expect(upgradedUser.laptop.title).toBe('Macbook')
    expect(upgradedUser.laptop).not.toBe(user.laptop)
})

test('add new books to user',()=>{
    let user:UserWithBooks={
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title:'Zenbook'
        },
        books: ['css', 'html','js']
    }

    const userCopy = addBooksToUser(user,'ts')

    expect(userCopy).not.toBe(user)
    expect(userCopy.books[3]).toBe('ts')
    expect(userCopy.books).not.toBe(user.books)
    expect(user.books.length).toBe(3)
})

test('update books to user',()=>{
    let user:UserWithBooks={
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title:'Zenbook'
        },
        books: ['css', 'html','js']
    }

    const userCopy = updateBook(user,'js','ts')

    expect(userCopy).not.toBe(user)
    expect(userCopy.books[2]).toBe('ts')
    expect(userCopy.books).not.toBe(user.books)
    expect(user.books.length).toBe(3)
})

test('remove js book',()=>{
    let user:UserWithBooks={
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title:'Zenbook'
        },
        books: ['css', 'html','js']
    }

    const userCopy = removeBook(user,'js')

    expect(userCopy).not.toBe(user)
    expect(userCopy.books).not.toBe(user.books)
    expect(userCopy.books.length).toBe(2)
})