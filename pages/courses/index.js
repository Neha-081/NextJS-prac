

const CourseMainPagePage=(props)=>{
    console.log(props);
    return (
    <div>
<h1>Courses</h1>
{props.courses.map((course)=><li key={course}>{course}</li>)}

    </div>
    )
    }

export const getStaticProps=async()=>{
    return{
        props:{
            courses:["FullStack","Full Stack dev"]
        },
        notFound:false
    }
}

export default CourseMainPagePage