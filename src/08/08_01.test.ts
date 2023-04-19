// export const usersObj = ['Dimych', 'Natasha', 'Valera', 'Katya']
export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}
export const users = {
    '101': {id: 101, name: 'Dimych'},
    '32323': {id: 32323, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}
export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 32323, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'}
]
// usersArray.findIndex()
usersArray.find(u=>u.id ===1)

type UserType = {
    [key:string]: {id:number, name: string}
}
let user = {id: 100500, name : 'Igor'}
users[user.id] = user
delete users[user.id]

let usersCopy = [...usersArray.filter()], user