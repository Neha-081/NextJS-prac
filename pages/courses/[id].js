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


export const getStaticProps=async(context)=>{
    console.log(context);
    return{
    props:{
        id:context.params.id
    }
}
}

export const getStaticPaths=async()=>{
    return{
        paths:[
            {
                params:{id:"Webdev"}
            },
            {
                params:{id:"Android"}
            }
        ],
        fallback:false
    }
}


export default withRouter(fullStack)