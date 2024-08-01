"use client"
import { useState, useEffect } from "react"

 import Filter from "@/components/company/Filter"
 import Card from "@/components/company/Card"
import "./style.css"
export const dynamic = "force-dynamic";

async function getCompanies(searchParams) {


    const searchQuery = new URLSearchParams({

organization_type_id:searchParams.organizationid||"",

industry_type_id:searchParams.industryid||"",

        country: searchParams.countryid || "",
        state: searchParams.stateid || "",
        city: searchParams.cityid || "",

    })




    try {

        const response = await fetch(`${process.env.API}/companyfilters?${searchQuery}`, {

            method: "GET",

        })


        if (!response.ok) {
            throw new Error("Failed  to fetch")
        }

        const data = await response.json()


        return data
    } catch (error) {

        console.log("Error: " + error)
    }

}



export default async function Companies({ searchParams }) {




    const data = await getCompanies(searchParams);

    console.log(data)
    return (
        <>
            {/* {JSON.stringify({data},null,4)} */}
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
                    <h6 className="text-white" >Home &gt; Companies</h6>
                </div>
            </div>


            <h1>companies page</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 overflow-auto" >

                        <Filter searchParams={searchParams} />

                    </div>
                    <div className="col-lg-9" >
                        <h4 className="text-center fw-bold mt-3"> Latest companies</h4>

                        <div className="row" >

                            {

                                data && data.length > 0 ? (

                                    data.map((c, i) => (

                                        <div className="col-md-4" key={i}  >

<Card company={c} />

                                        </div>

                                    ))



                                ) : (

                                    <div>

                                        <h5>   companies not found</h5>

                                    </div>


                                )

                            }

                        </div>

                        <br />


                    </div>
                </div>
            </div>
        </>
    )


}