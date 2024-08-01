

"use client"
import { useState, useEffect } from "react"
import toast from "react-hot-toast";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link"


export default function Admin() {



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