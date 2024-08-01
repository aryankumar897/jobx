

"use client"
import { useState, useEffect } from "react"
import toast from "react-hot-toast";

import Link from "next/link"


export default function Admin() {





 const [companyCount,setCompanyCount]=useState(0)
 const [pendingJobCount,setPendingJobCount]=useState(0)

 const [activeJobCount,setActiveJobCount]=useState(0)
 const [ordersCount,setOrdersCount]=useState(0)

const [appliedJobCount,setAppliedJobCount]=useState(0)
const [jobBookmarkCount,setJobBookmarkCount]=useState(0)


useEffect(()=>{
    fetchdetails()
},[])


  const  fetchdetails=async()=>{



try {
    
 const response= await fetch(`${process.env.API}/admin/details`)

 const  data=await response.json()

 if(!response.ok){
toast.error(data.err)

 }


 setCompanyCount(data.companycount)
setPendingJobCount(data?.pendingjobcount)
setActiveJobCount(data?.activejobcount)

    setOrdersCount(data?.orderscount)
setAppliedJobCount(data?.appliedjob)
setJobBookmarkCount(data?.jobbookmark)

} catch (error) {
   console.log(error)  
}



  }






    return (

        <>
            {/* {JSON.stringify({c},null,4)} */}
            <hr
                className="mx-auto"
                style={{ width: "80%", backgroundColor: 'green' }} /> <h5

                    style={{ backgroundColor: 'green', color: "white", width: "80%" }}
                    className="text-center mx-auto"



                >Admin Dashboard</h5>
            <hr
                className="mx-auto"
                style={{ width: "80%", backgroundColor: 'green' }} />
            <div className="container">

                <div className="row">
                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-body" >
                                <h5 className="card-title">Company Count:</h5>
                                <p className="card-text">

                                    {companyCount}

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title"> Pending Job Count: </h5>
                                <p className="card-text">

                                    {pendingJobCount}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title"> Active Job Count: </h5>
                                <p className="card-text">

                                    {activeJobCount}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Orders Count:: </h5>
                                <p className="card-text">

                                    {ordersCount}
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Applied Job Count: </h5>
                                <p className="card-text">

                                    {appliedJobCount}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Job Bookmark Count: </h5>
                                <p className="card-text">

                                    {jobBookmarkCount}
                                </p>
                            </div>
                        </div>
                    </div>





                    <div className="col">
                        <div className="card mb-4">
                            <div className="card-body" style={{ backgroundColor: 'green', color: "white" }}>
                                <h5 className="card-title">YOU CAN ADD MORE INFORMATION</h5>
                                <p className="card-text">

                                    YOU CAN ADD MORE INFORMATION
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}