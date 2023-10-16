
const course={
    courseName:"javascript",
    courseprice:"999",
    courseInstructor:"sarfraj"
}
// destructing only syntax difference for accessing element

//normal accessing
console.log(course.courseInstructor);

//accessing element using destructing
const {courseInstructor}=course
console.log(courseInstructor);
