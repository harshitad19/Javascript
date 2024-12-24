//Object de-structure

const course={
    courseName:"Javascript",
    price:"999",
    courseinstructor: "harshi"
}

// extracting value 
// course.courseinstructor;
// const {courseinstructor} = course;

// console.log(courseinstructor);

//we can give another name
const {courseinstructor: instructor} = course;

console.log(instructor);
