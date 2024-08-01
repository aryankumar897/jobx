// pages/checkout.js
"use client"
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image';
import toast from "react-hot-toast";
import { FaCheck, FaTimes } from 'react-icons/fa';


import { useSession } from "next-auth/react";
export default function CheckoutPage() {
    const [loading, setLoading] = useState(false)
   
    

   // const id = searchParams?.id
    // console.log("params", id)

  
  




    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    //     script.async = true;

    //     const loadHandler = () => {
    //         console.log('Razorpay script loaded');
    //     };

    //     script.addEventListener('load', loadHandler);

    //     document.body.appendChild(script);

    //     return () => {
    //         script.removeEventListener('load', loadHandler);
    //         document.body.removeChild(script);
    //     };
    // }, []);















  



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
                    <h6 className="text-white" >Home &gt;  checkout   </h6>
                </div>
            </div>






            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="items">
                            {/* Item 1 */}
                            <div className="item  mt-3 ">
                                <h6 className='text-dark' >choose pament getway


                                </h6>
                                <div className="payment-options">



                                    <button className='m-4'
                                    //onClick={() => handlePaypal()}

                                    >
                                        <img src="/image/paypal.png" alt="PayPal" width={100} height={50} objectFit="contain" />
                                    </button>






                                    <button className='m-4'
                                    // onClick={() => handleStripe()}
                                    >
                                        <img src="/image/stripe.png" alt="Stripe" width={110} height={50} objectFit="contain" />
                                    </button>









                                    <button className='m-4'
                                    // onClick={() => handleRazorpay()}
                                     
                                     >
                                        <img src="/image/razorpay.png" alt="Razorpay" width={110} height={50} objectFit="contain" />
                                    </button>








                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">




                        <div className="plan-details ">
                            <section id="pricing" className="bg-white">
                                <div className="container">

                                    <div className="spacer spacer-line border-primary">&nbsp;</div>

                                    <div className="row">
                                        {plan && plan.map(item => (
                                            <div className="col-md-8" key={item._id}>
                                                <div className="pricing-table">
                                                    <div className="pricing-table-title">
                                                        <strong> {item.recommended ? <h4 className="badge badge-pill badge-success"   >recommended</h4> : ""}            </strong>

                                                        <h5 className="pricing-title bg-info-hover text-white">{item.leble}</h5>
                                                    </div>
                                                    <div className="pricing-table-price text-center bg-info">
                                                        <p className="title-font">
                                                            <span className="pricing-period text-white mr-1">From</span>
                                                            <span className="pricing-currency text-white">$</span>
                                                            <span className="pricing-price text-white">{item.price}</span>
                                                            <span className="pricing-period text-white">/ Mo.</span>
                                                        </p>
                                                    </div>
                                                    <div className="pricing-table-content">
                                                        <ul className='p-5' >
                                                            <li><strong>Job Limit: {item.joblimit}</strong></li>


                                                            <li><strong>Featured Job Limit: {item.featuredJoblimit}</strong></li>
                                                            <li><strong>Highlight Job Limit: {item.highlightJoblimit}</strong></li>
                                                            <li>
                                                                <strong>Recommended: {item.recommended ? <FaCheck style={{ color: 'green' }} /> : <FaTimes style={{ color: 'red' }} />}</strong>
                                                            </li>

                                                            <li>
                                                                <strong>Company Verify: {item.profileverify ? <FaCheck style={{ color: 'green' }} /> : <FaTimes style={{ color: 'red' }} />}</strong>
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

