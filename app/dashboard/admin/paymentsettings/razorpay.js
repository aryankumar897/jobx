"use client"
import { useEffect, useState } from 'react';

import { useCountry } from "@/context/country";
import toast from "react-hot-toast";


const currencies = [
    "USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "SEK", "NZD",
    "NOK", "KRW", "MXN", "SGD", "HKD", "INR", "RUB", "ZAR", "BRL", "TRY",
    "TWD", "DKK", "PLN", "THB", "IDR", "HUF", "CZK", "ILS", "CLP", "PHP",
    "AED", "COP", "SAR", "MYR", "RON", "VND", "ARS", "IQD", "KWD", "NGN",
    "UAH", "EGP", "PKR", "OMR", "QAR", "KES", "BDT", "MAD", "VUV", "SCR",
    "UZS", "LKR", "JOD", "GTQ", "BOB", "HRK", "DZD", "TND", "UYU", "PYG",
    "NPR", "AFN", "GEL", "MNT", "ETB", "LBP", "BHD", "JMD", "CUC", "LYD",
    "TTD", "XAF", "XOF", "NAD", "BND", "SZL", "GIP", "BWP", "FJD", "DJF",
    "CVE", "BSD", "GYD", "YER", "HTG", "BIF", "SYP", "MVR", "MKD", "RSD"

];


export default function Rozarpay() {

    const [razorpaycountryid, setRazorpayCountryid] = useState("")

    const [razorpayStatus, setRazorpayStatus] = useState("")

    const [razorpayCurrencyRate, setRazorpayCurrencyRate] = useState("")

    const [razorpayCurrencyName, setRazorpayCurrencyName] = useState("")

    const [razorpayKeyId, setRazorpayKeyId] = useState("")

    const [razorpayKeySecret, setRazorpayKeySecret] = useState("")


    const { fetchCountryPublic, country } = useCountry()
    useEffect(() => {
        fetchCountryPublic()
        fetchData()
    }, [])





    const fetchData = async () => {

        try {
            const response = await fetch(`${process.env.API}/admin/paymentsettings`)

            const data = await response.json()


            if (!response.ok) {

                toast.error(data.err)


            } else {

                console.log("razorpay", data)
            


 setRazorpayStatus(data&&data.settings.razorpayStatus)

setRazorpayCurrencyRate(data&&data.settings.razorpayCurrencyRate)
setRazorpayCurrencyName(data&&data.settings.razorpayCurrencyName)
setRazorpayKeyId(data&&data.settings.razorpayKeyId)
setRazorpayCountryid(data&&data.settings.razorpaycountryid)
                setRazorpayKeySecret(data && data.settings.razorpayKeySecret
)



            }

        } catch (err) {

            console.log(err)

        }




    }








    const handleSubmit = async (e) => {

        e.preventDefault()


        try {

            const formData = {

                razorpayStatus,
                razorpayCurrencyName,
                razorpayKeyId,
                razorpayCurrencyRate,
                razorpayKeySecret,
                razorpaycountryid


            }
            const response = await fetch(`${process.env.API}/admin/paymentsettings`, {


                method: 'POST',

                headers: { "Content-Type": "application/json" },

                body: JSON.stringify(formData),

            })


            if (response.ok) {



                console.log("form submitted")
                toast("form submitted")

                setRazorpayStatus("")
                setRazorpayCurrencyName('')
                setRazorpayCurrencyRate("")
                setRazorpayKeyId("")
                setRazorpayKeySecret("")
                setRazorpayCountryid("")




            } else {
                console.log("faield to submit")


            }



        } catch (error) {
            console.log(error)
        }


    }





    return (

        <div>
            <h2>Razorpay Settings</h2>
            <form
                onSubmit={handleSubmit}
            >




            
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Status:</label>
                            <select
                                style={{ outline: "none" }}
                                value={razorpayStatus}
                                onChange={(e) => setRazorpayStatus(e.target.value)}


                            >
                                <option value=""></option>
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </select>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Country Name:</label>
                            <select

                                style={{ outline: "none" }}

                                value={razorpaycountryid}
                                onChange={(e) => setRazorpayCountryid(e.target.value)}

                            >
                                <option value="">Select Country</option>
                                {country.map((country) => (
                                    <option key={country._id}

                                        value={country.name}>{country.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>




                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Currency  Name:</label>


                            <select
                                style={{ outline: "none" }}
                                value={setRazorpayCurrencyName}
                                onChange={(e) => setRazorpayCurrencyName(e.target.value)}


                            >
                                <option value="">Select Currency Name</option>
                                {currencies.map((currency) => (
                                    <option key={currency}

                                        value={currency}>{currency}</option>
                                ))}
                            </select>




                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Currency  Rate:</label>
                            <input type="text"
                                style={{ outline: "none" }}


                                value={razorpayCurrencyRate}
                                onChange={(e) => setRazorpayCurrencyRate(e.target.value)}


                            />
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Razorpay   Key ID:</label>
                            <input type="text"
                                style={{ outline: "none" }}

                                value={razorpayKeyId}
                                onChange={(e) => setRazorpayKeyId(e.target.value)}

                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Razorpay   Key Secret:</label>
                            <input type="text"
                                style={{ outline: "none" }}

                                value={razorpayKeySecret}
                                onChange={(e) => setRazorpayKeySecret(e.target.value)}

                            />
                        </div>
                    </div>



                </div>

                <button type="submit" >Save Changes</button>
            </form>
        </div>

    )



}