"use client"
import { useState, useEffect } from "react"

import Filter from "@/components/company/Filter"
import Card from "@/components/company/Card"
import "./style.css"
export const dynamic = "force-dynamic";





export default async function Companies({ searchParams }) {

  





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



            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 overflow-auto" >

                        <Filter searchParams={searchParams} />

                    </div>
                    <div className="col-lg-9 overflow-auto" >
                        <h4 className="text-center fw-bold mt-3"> Latest companies</h4>

                        <div className="row" >

                            {data && data.length > 0 ? (
                                data.map((c, i) => (
                                    <div className="col" key={i}>
                                        <Card company={c} />
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
                                    <p style={{ margin: 0 }}>No companies found.</p>
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