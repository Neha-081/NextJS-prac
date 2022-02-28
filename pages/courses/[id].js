import { withRouter } from "next/router"

const fullStack=(props)=>{
   const coursesMap={
       'Webdev':"Full Stack",
       'Android':"Android development"
   }
   if(typeof window==='undefined'){
       return <p>...Loading</p>
   }

   return (<div>
<p>{coursesMap[props.router.query.id]} Course </p>
    </div>)
}

export default withRouter(fullStack)