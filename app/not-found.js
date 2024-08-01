import Link from "next/link"





export default function NotFound() {

    return (

        <div  className="d-flex vh-100"   >
            <div  className="m-auto text-center"   >
                <h1>404</h1>
                <h2>Page nOT found</h2>

                <Link href="/">Home</Link>

            </div>
        </div>




    )


}