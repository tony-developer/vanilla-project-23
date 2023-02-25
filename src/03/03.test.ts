import {StudentType} from "../02/02";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Dmitriy",
        age: 32,
        isActive: false,
        address: {
            streetTitle: 'Surgunova 2',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            }
        ]
    }
})

test('new tech skill should be added to student ')