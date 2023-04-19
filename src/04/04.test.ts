test("should take older than 90 ", ()=> {
    const ages = [10, 14,4,543,32]
    const predicate = (age: number) =>{
        return age > 90
    }
    const oldAges = ages.filter(predicate)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(543)
})

test("courses cheaper than 150 ", ()=> {
    const courses = [
        {title: "CSS", price: 100},
        {title: "JS", price: 200},
        {title: "React", price: 150}
    ]
    const cheapPredicate = (course: CourseType) =>{
        return course.price < 150
    }
    const cheapCourses = courses.filter(cheapPredicate)

    expect(cheapCourses.length).toBe(1)
    expect(cheapCourses[0].title).toBe("CSS")
})