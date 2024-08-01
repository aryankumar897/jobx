
"use client"
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'


import toast from "react-hot-toast";

import dynamic from 'next/dynamic';
import Invoice from "./invoice"

const PDFDownloadLink = dynamic(

    () =>

        import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),

    {
        ssr: false,
        loading: () => <p>Loading...</p>

    }









)




export default function CheckoutPage({ searchParams }) {

    const [loading, setLoading] = useState(false)
    const id = searchParams?.id
    const [details, setDetails] = useState([])
    const [companydata, setCompanyData] = useState(null)
    const [plandata, setPlansData] = useState(null)


    useEffect(() => {

        fetchdata()

    }, [id])



    const fetchdata = async () => {

        try {


            const response = await fetch(`${process.env.API}/company/orders/details/${id}`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)
            } else {
                console.log("data==>", data)

                setDetails(data)
                setCompanyData(data[0].company_id)
                setPlansData(data[0].plan_id)

            }


        } catch (error) {
            console.log(error)
        }


    }




    return (

        <>

            <div
                className='mb-5'
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '30vh',
                    backgroundImage: 'url("/image/dee.jpg")',
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
                    <h6 className="text-white" >Home &gt;  dashboard  &gt;  admin  &gt;  orders        &gt;details     </h6>
                </div>
            </div>



            <div

                style={{
                    width: '82%%',
                    margin: 'auto',
                    textAlign: 'center',
                }}

            >

                {details ? (


                    <PDFDownloadLink

                        document={<Invoice order={details} />}
                        fileName="invoice.pdf"
                        className="btn btn-outline-primary"
                    >Download invoice</PDFDownloadLink>



                ) : ("")}


            </div>

            <main>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center h-auto">
                        <div className="col shadow bg-light p-5">
                            <h2 className="mb-4 text-center">Payment details</h2>






                            <div >
                                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                                    <thead className='text-dark'   >
                                        <tr>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Order ID</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Package Name</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Amount</th>

                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>  default_amount</th>

                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Currency</th>




                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Payment Status</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {details.map((order) => (
                                            <tr key={order._id}>
                                                <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{order.order_id}</td>
                                                <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{order.package_name}</td>
                                                <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{order.amount}</td>
                                                <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{order.default_amount}</td>

                                                <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{order.paid_in_currency}</td>
                                                <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{order.payment_status}</td>
                                                <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{new Date(order.createdAt).toLocaleDateString()}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>












                        </div>
                    </div>
                </div>
            </main>




            <main>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center h-auto">
                        <div className="col- shadow bg-light p-5">
                            <h2 className="mb-4 text-center">Company details</h2>
                            <div >
                                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                                    <thead className='text-dark'   >
                                        <tr>

                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}> Name</th>



                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Email</th>

                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Phone</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>address</th>

                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>bio</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr >
                                            <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{companydata?.name}</td>
                                            <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{companydata?.email}</td>
                                            <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{companydata?.phone}</td>
                                            <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{companydata?.address}</td>

                                            <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{companydata?.bio}</td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>












                        </div></div></div></main>









            <main>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center h-auto">
                        <div className="col- shadow bg-light p-5">
                            <h2 className="mb-4 text-center">plan details</h2>



                            <div >
                                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                                    <thead>
                                        <tr>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}     >Label</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}        >Price</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Job Limit</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}  >Featured Job Limit</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }} >Highlight Job Limit</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}   >Recommended</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}    >Frontend Show</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}  >Profile Verify</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}   >Home</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}  >Created At</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}   >Updated At</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr key={plandata?._id}>
                                            <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}    >{plandata?.leble}</td>
                                            <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}   >{plandata?.price}</td>
                                            <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}         >{plandata?.joblimit}</td>
                                            <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}   >{plandata?.featuredjoblimit}</td>
                                            <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}      >{plandata?.highlightjoblimit}</td>
                                            <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}       >{plandata?.recommended ? 'Yes' : 'No'}</td>
                                            <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}        >{plandata?.frontendshow ? 'Yes' : 'No'}</td>
                                            <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}        >{plandata?.profileverify ? 'Yes' : 'No'}</td>
                                            <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}      >{plandata?.home ? 'Yes' : 'No'}</td>
                                            <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}        >{new Date(plandata?.createdAt).toLocaleDateString()}</td>
                                            <td style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{new Date(plandata?.updatedAt).toLocaleDateString()}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>








                        </div></div></div></main>




        </>
    );
};

