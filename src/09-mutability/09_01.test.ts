

function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
}
test('reference type test', () => {
    let user = {
        name: 'Dimych',
        age: 32
    }
    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)
})