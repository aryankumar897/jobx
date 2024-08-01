"use client"
import { useState, useEffect } from "react"

import Filter from "@/components/searchfilter/Filter"
import Card from "@/components/jobs/Card"
import "./style.css"
export const dynamic = "force-dynamic";






export default async function Jobs({ searchParams }) {


  

    return (
        <>

            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '30vh',
                    backgroundImage: 'url("/images/company.jpg")', // Replace 'background.jpg' with your image file name
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        color: 'white',
                    }}
                >
                    <h6 className="text-white" >Home &gt; Jobs</h6>
                </div>
            </div>



            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3  " >

                        {/* <Filter searchParams={searchParams}/> */}
                      
                    </div>

                    <div className="col-lg-9 my-5">





{/* 
                        {data && data.length > 0 ? (
                            data.map((ca, i) => (
                                <Card
                                    key={i}
                                    jobs={ca}
                                />
                            ))
                        ) : (+
                            <div




                                style={{


                                    textAlign: 'center', marginTop: '50px'
                                }}>No data found</div>
                        )} */}




                    </div>
                </div>
            </div>
        </>
    )


}