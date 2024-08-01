
"use client"
import { useState, useEffect } from "react"

import Link from "next/link"
import { useSession,signOut } from "next-auth/react";
export default function Company() {



const [profileComplete,setProfileComplete]=useState(false);
 const [pendingjob,setPendingJob]=useState("")
 const [order,setOrder]=useState("")
const {data}=useSession()

useEffect(()=>{
    checkProfileCompletion()
},[])




 const checkProfileCompletion=async()=>{

try {
    
const response=await fetch(`${process.env.API}/company/dash`)

const data=await response.json()

if(response.ok){
    setProfileComplete(data.profileComplete)
setPendingJob(data.pendingjob)
setOrder(data?.orders)
   console.log( "x",   data)



}


} catch (err) {
    console.log(err) 
}


 }






    return (

        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="lead">company  Dashboard</p>
                        <hr />
                        {profileComplete ? (
                            <p>

                                Profile is complete {data?.user?.name}



                            </p>
                        ) : (
                            <p>Please complete your profile {data?.user?.name}
                                <Link className="nav-link mt-2" href="/dashboard/company/profile">

                                    Edit Profile
                                </Link>

                            </p>
                        )}
                    </div>
                </div>
            </div>

            <hr /> <hr />
            <div className="container">

                <div className="row">
                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-body" >
                                <h5 className="card-title">pending jobs</h5>
                                <p className="card-text">{pendingjob}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">total orders jobs</h5>
                                <p className="card-text">{order}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>

    );
}