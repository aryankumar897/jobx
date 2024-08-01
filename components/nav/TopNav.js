"use client"

import Link from "next/link";

import  {useSession,signOut} from  "next-auth/react"


// Role-based redirection in Next.js can be implemented to 
// ensure that users are directed to appropriate pages based
//  on their roles or permissions. This is commonly done
//   in web 






export default function TopNav() {

const  {data,loading,status}= useSession()
    console.log({ data, loading, status })


    return (

        <>
            <nav className="nav shadow justify-content-between">
                <Link className="nav-link mt-2" href="/">
                   
                    Home
                </Link>
                <div className="d-flex align-items-center">






                    <Link className="nav-link " href="/companies">

                        Companies
                    </Link>
                    <Link className="nav-link " href="/candidates">

                        Candidates

                    </Link>
                    <Link className="nav-link " href="/jobs">

                        Search jobs

                    </Link>
                    <Link className="nav-link " href="/pricing">

                        Pricing

                    </Link>



                    {status ==="authenticated"?(

<> 

                            {data?.user?.role === "candidate" ? (

                                <Link className="nav-link" href={`/dashboard/${data?.user?.role}`}

                                >
                                    {data?.user?.name}({ data && data?.user?.role})
                                </Link>





                            ) : ""}



                            {data?.user?.role === "admin" ? (

                                <Link className="nav-link" href={`/dashboard/${data?.user?.role}`}

                                >
                                    {data?.user?.name}({data && data?.user?.role})
                                </Link>





                            ) : ""}



                            {data?.user?.role === "company" ? (

                                <Link className="nav-link" href={`/dashboard/${data?.user?.role}`}

                                >
                                    {data?.user?.name}({data && data?.user?.role})
                                </Link>





                            ) : ""}



<a      className="nav-link pointer"
onClick={()=>signOut()}


 >

    Logout
</a>






 </>



                    )  : (  

<> 



                    <Link className = "nav-link" href = "/login">
                        Login
                    </Link>
                <Link className="nav-link" href="/register">
                    Register
                </Link>




 </>




                       )}










                </div>






            </nav>



        </>
    )
}




