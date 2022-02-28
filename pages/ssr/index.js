import Link from "next/link"

const Page=()=>
(
    <div>
<p> Page</p>

<Link href="/ssr/getServerSideProps-example">Go to getServerSideProps Page</Link>
<br/>
<Link href="/ssr/getInitialProps-example">Go to getInitialProps Page</Link>
</div>
)
export default Page
