"use client"
import { useState, useEffect } from "react"
import { Skeleton } from 'antd';
import Filter from "@/components/searchfilter/Filter"
 import Card from "@/components/jobs/Card"
import "./style.css"
export const dynamic = "force-dynamic";




async function getJobs(searchParams) {

    const searchQuery = new URLSearchParams({
        minSalary: searchParams.minSalary || "",
        maxSalary: searchParams.maxSalary || "",

        job_category_id: searchParams.jobcatid ||"",


        country: searchParams.countryid || "",
        state: searchParams.stateid || "",
        city: searchParams.cityid || "",

    })


    try {



        const response = await fetch(`${process.env.API}/searchjobs?${searchQuery}`, {


            method: "GET",
        })

        if (!response.ok) {

            throw new Error("Couldn't ' find  jobs")
        }


        const data = await response.json()
        if (!data || !Array.isArray(data)) {
            throw new Error("No products returned");
        }
         console.log("xx",  data)
        return data
    } catch (error) {

        console.log(error)

    }



}

export default async function Jobs({ searchParams }) {

    const data = await getJobs(searchParams);


 console.log("jobx",data)


    if (!data) {
        return (
            <div className="text-center  my-5 p-5">  <Skeleton active /></div>
        )
    }


    return (
        <>

            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '30vh',
                    backgroundImage: 'url("/image/dee.jpg")', // Replace 'background.jpg' with your image file name
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

                        <Filter searchParams={searchParams} />

                    </div>

                    <div className="col-lg-9 my-5">

                        <h1>job search</h1>



                        
                        {data && data?.length > 0 ? (
                            data.map((ca, i) => (
                                <Card
                                    key={i}
                                    jobs={ca}
                                />
                            ))
                        ) : (
                            <div




                                style={{


                                    textAlign: 'center', marginTop: '50px'
                                }}>No data found</div>
                        )} 




                    </div>
                </div>
            </div>
        </>
    )


}