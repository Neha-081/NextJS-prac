const Page=(props)=>{
    console.log(props);
    return(
        <div>
        {props.data.map((e)=>(
            <p key={e}>{e}</p>
        ))}
        </div>
    )

}
export const getServerSideProps=async()=>{
    return{
        props:{
            data:["a","b","c","d"]
        },

    }
}

export default Page;