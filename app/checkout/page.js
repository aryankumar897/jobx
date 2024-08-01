// pages/checkout.js
"use client"
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image';
import toast from "react-hot-toast";
import { FaCheck, FaTimes } from 'react-icons/fa';


import { useSession } from "next-auth/react";
import { useStat } from '@/context/state';

export default function CheckoutPage({ searchParams }) {
    const [loading, setLoading] = useState(false)

    const [plan, setPlan] = useState([])

 const [paystatus,setPayStatus]=useState({})


    const router = useRouter()
    const id = searchParams?.id
    console.log("params", id)
    const { data } = useSession()

    useEffect(() => {

        fetchdata()
        fetchData()

    }, [])



    const fetchdata = async () => {
        try {


            const response = await fetch(`${process.env.API}/checkout/${id}`)

            const data = await response.json()


            if (!response.ok) {
                toast.error(data.err)
            } else {


                setPlan(data)
            }



        } catch (error) {
            console.log("error", error)
        }




    }




    const fetchData = async () => {
        try {


            const response = await fetch(`${process.env.API}/paymentsettings`)

            const data = await response.json()


            if (!response.ok) {
                toast.error(data.err)
            } else {


             setPayStatus(data)
            }



        } catch (error) {
            console.log("error", error)
        }




    }










    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;

        const loadHandler = () => {
            console.log('Razorpay script loaded');
        };

        script.addEventListener('load', loadHandler);

        document.body.appendChild(script);

        return () => {
            script.removeEventListener('load', loadHandler);
            document.body.removeChild(script);
        };
    }, []);

    const handleRazorpay = async () => {
        try {

            setLoading(true)

            const response = await fetch(`${process.env.API}/company/rezorpaysuccess`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            const data = await response.json();
            console.log(data)
            // setOrderId(data && data.id);
            const options = {
                key: process.env.RAZORPAY_KEY_ID,
                amount: data && data.amount * 100,
                currency: 'INR',
                name: 'jobx',
                description: 'Test Payment',
                order_id: data && data.id,
                handler: function (response) {
                    // alert(response.razorpay_payment_id);
                    // alert(response.razorpay_order_id);

                    verifyPayment(response.razorpay_payment_id);

                    setLoading(false)
                },
                prefill: {
                    name: data && data.name,
                    email: data && data.email,
                    contact: data && data.phone,
                },
                notes: {
                    address: 'Your Address',
                },
                theme: {
                    color: '#4f3aaa',
                },
            };
            const rzp1 = new window.Razorpay(options);






            rzp1.open();
        } catch (error) {
            console.error('Error initiating payment:', error);
            setLoading(false)
        }
    };
    const verifyPayment = async (paymentId) => {

        try {

            const response = await fetch(`${process.env.API}/company/rezorpaysuccess/verify`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({

                    razorpay_payment_id: paymentId

                })





            })
            const data = await response.json()
            if (data?.err) {
                router.push("/razorpay/unsuccess")

            } else {
                router.push("/razorpay/success")


            }

        } catch (error) {
            console.log(error)
        }


    }

    const handleStripe = async () => {


        try {



            const response = await fetch(`${process.env.API}/company/stripe/${id}`, {

                method: "POST",




            })


            const data = await response.json()
            if (!response.ok) {

                toast.error(data.err)
            } else {
                window.location.href = data.id

            }



        } catch (error) {

            console.log(error)



        }



    }




    const handlePaypal = async () => {


        try {

            const response = await fetch(`${process.env.API}/company/paypalpayment/${id}`, {

                method: 'POST',

            })

            const data = await response.json()



            if (!response.ok) {
                alert("error")

            } else {
             router.push(data.id)

            }




        } catch (err) {

            console.log(err)

        }



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


                                    {paystatus?.settings?.paypalStatus == "true" ? <button className='m-4'
                                        onClick={() => handlePaypal()}

                                    >
                                        <img src="/image/paypal.png" alt="PayPal" width={100} height={50} objectFit="contain" />
                                    </button>  :""}
                                  





                                    {paystatus?.settings?.stripeStatus == "true" ?
                                        <button className='m-4'
                                            onClick={() => handleStripe()}
                                        >
                                            <img src="/image/stripe.png" alt="Stripe" width={110} height={50} objectFit="contain" />
                                        </button>



                                     : ""}





                                   
                                    {paystatus?.settings?.razorpayStatus == "true" ?
                                       
                                        <button className='m-4'
                                            onClick={() => handleRazorpay()}

                                        >
                                            <img src="/image/razorpay.png" alt="Razorpay" width={110} height={50} objectFit="contain" />
                                        </button>



                                        : ""}








                                 






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

                                                            <span className="pricing-currency text-white">$</span>
                                                            <span className="pricing-price text-white">{item.price}</span>

                                                        </p>
                                                    </div>
                                                    <div className="pricing-table-content">
                                                        <ul className='p-5' >
                                                            <li><strong>Job Limit: {item.joblimit}</strong></li>


                                                            <li><strong>Featured Job Limit: {item.featuredjoblimit}</strong></li>
                                                            <li><strong>Highlight Job Limit: {item.highlightjoblimit}</strong></li>
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

