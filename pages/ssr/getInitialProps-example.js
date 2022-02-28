const Page=(props)=>{
    console.log(props);
    return(
        <div>
        {(props.data || []).map((e)=>(
            <p key={e}>{e}</p>
        ))}
        </div>
    )

}
Page.getInitialProps=async()=>{
    return{
            data:["a","b","c","d"]

    }
}

export default Page;