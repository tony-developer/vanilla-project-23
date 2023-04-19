import {UserType} from "./10_01";

function makeHairStyle(u:UserType, power: number){
    const copy = {
        ...u
    }
    copy.hair = u.hair/power

    return copy
}

test('reference type test',() => {
    let user:UserType={
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }
    const cutUser = makeHairStyle(user, 2)
    expect(cutUser.hair).toBe(16)
    expect(user.hair).toBe(32)
})