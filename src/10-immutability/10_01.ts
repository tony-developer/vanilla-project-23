export type UserType = {
    name: string
    hair: number
    address: {
        city: string,
        house: number
    }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooks = UserWithLaptopType & {
    books: string[]
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair/power

    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}

export function upgradeUser(u: UserWithLaptopType, laptopName: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptopName
        }
    }
}

export function addBooksToUser(u: UserWithBooks, newBook: string) {
    const copy = {
        ...u,
        // books: {
        // books: [...u.books]
        // }
        books: [...u.books]
    }
    copy.books.push(newBook)
    return copy
}

export const updateBook = (u: UserWithBooks, oldBook: string, changeBook: string)=>({
        ...u,
        books: u.books.map(b => b === oldBook ? changeBook : b)
    })

export const removeBook = (u: UserWithBooks, removeThisBook: string)=> ({
    ...u,
        books: u.books.filter(b => b !== removeThisBook)

})