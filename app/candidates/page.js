"use client"
import { Skeleton } from 'antd';

import Filter from "@/components/candidate/Filter"
import Card from "@/components/candidate/Card"

export const dynamic = "force-dynamic";
import "./style.css"



async function getCandidatedata(searchParams) {


    const searchQuery = new URLSearchParams({

        skill: searchParams.skillid || "",
        country: searchParams.countryid || "",
        state: searchParams.stateid || "",
        city: searchParams.cityid || "",

    })


    try {






        const response = await fetch(`${process.env.API}/candidatefilters?${searchQuery}`)

        if (!response.ok) {
            throw new Error("Failed to fetch products")
        }



        const data = await response.json()






        return data

    } catch (error) {
        console.log(error);
    }





}




export default async function Candidate({ searchParams }) {

    const data = await getCandidatedata(searchParams)
    console.log(data)


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
                    <h6 className="text-white" >Home &gt; Candiadte</h6>
                </div>
            </div>

            <h1>candidate details</h1>


            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3    overflow-auto" >

                        <Filter searchParams={searchParams} />

                    </div>
                    <div className="col-lg-9 overflow-auto" >
                        <h4 className="text-center fw-bold mt-3"> Latest candidate</h4>

                        <div className="row" >

                            {data && data.length > 0 ? (
                                data.map((ca, i) => (
                                    <div className="col-lg-4" key={i}>
                                        <Card candidat={ca} searchParams={searchParams} />
                                    </div>
                                ))
                            ) : (
                                <div
                                    className="col-lg-12"
                                    style={{
                                        display: 'flex',           // Use flexbox for centering
                                        justifyContent: 'center',  // Center horizontally
                                        alignItems: 'center',      // Center vertically
                                        height: '100vh',           // Full viewport height
                                        backgroundColor: '#f8f9fa',// Light background color
                                        color: '#6c757d',          // Light gray text color
                                        fontSize: '18px',          // Font size for the message
                                        fontWeight: 'bold',        // Bold text
                                        textAlign: 'center',       // Center align text
                                        padding: '20px'            // Padding around the content
                                    }}
                                >
                                    <p style={{ margin: 0 }}>No candidates found.</p>
                                </div>

                            )}

                        </div>

                        <br />


                    </div>
                </div>
            </div>
        </>
    )


}