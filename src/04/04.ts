const ages = [10, 14,4,543,,32]
const predicate = (age: number) =>{
return age > 90
}

const courses = [
    {title: "CSS", price: 100},
    {title: "JS", price: 200},
    {title: "React", price: 150}
]

type CourseType = {
    title: string
    price: number
}