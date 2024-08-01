"use  client"

import { useState, useEffect } from 'react';
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





export default function Stripe() {

    const [stripeStatus, setStripeStatus] = useState("")
    const [stripeCurrencyName, setStripeCurrencyName] = useState("")
    const [stripeCurrencyRate, setStripeCurrencyRate] = useState("")
    const [publisableKey, setPublisableKey] = useState("")
    const [stripesecretKey, setStripeSecretKey] = useState("")

    const [stripecountryid, setStripeCountryid] = useState("")


    const { fetchCountryPublic, country } = useCountry()
    console.log(country)
    useEffect(() => {
        fetchData()
        fetchCountryPublic()
    }, [])




    const fetchData = async () => {

        try {
            const response = await fetch(`${process.env.API}/admin/paymentsettings`)

            const data = await response.json()


            if (!response.ok) {

                toast.error(data.err)


            } else {

                console.log("stripe",    data)
              setStripeStatus(data&&data.settings.stripeStatus)

 setStripeCurrencyName(data&&data.settings.stripeCurrencyName)
setStripeCurrencyRate(data&&data.settings.stripeCurrencyRate)
setPublisableKey(data&&data.settings.publisableKey)
setStripeSecretKey(data&&data.settings.stripesecretKey)

setStripeCountryid(data&&data.settings.stripecountryid)


            }

        } catch (err) {

            console.log(err)

        }




    }









 
    const handleSubmit = async (e) => {

        e.preventDefault()


        try {

            const formData = {

                stripecountryid,
                stripeStatus,
                stripeCurrencyName,
                stripeCurrencyRate,
                publisableKey,
                stripesecretKey,

               

            }
            const response = await fetch(`${process.env.API}/admin/paymentsettings`, {


                method: 'POST',

                headers: { "Content-Type": "application/json" },

                body: JSON.stringify(formData),

            })


            if (response.ok) {



                console.log("form submitted")
                toast("form submitted")

             stripeStatus("")

setStripeCurrencyName("")

setStripeCurrencyRate("")
setPublisableKey("")
setStripeSecretKey("")

setStripeCountryid("")


            } else {
                console.log("faield to submit")


            }



        } catch (error) {
            console.log(error)
        }


    }





    return (
        <div>
            <h2>Stripe   Form</h2>
            <form

onSubmit={handleSubmit}


            >
                <div className="row">

                    <div className="col-md-6">
                        <div className="form-group">
                            <label> Status:</label>
                            <select
                                style={{ outline: "none" }}

                                value={stripeStatus}
                                onChange={(e) => setStripeStatus(e.target.value)}

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

                                value={stripecountryid}
                                onChange={(e) => setStripeCountryid(e.target.value)}

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
                            <label> Currency Name:</label>

                            <select
                                style={{ outline: "none" }}


                                value={stripeCurrencyName}
                                onChange={(e) => setStripeCurrencyName(e.target.value)}
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
                            <label> Currency Rate:</label>
                            <input type="text"
                                style={{ outline: "none" }}

                                value={stripeCurrencyRate}
                                onChange={(e) => setStripeCurrencyRate(e.target.value)}

                            />
                        </div>
                    </div>






                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Publisable key:</label>
                            <input type="text"
                                style={{ outline: "none" }}

                                value={publisableKey}

                                onChange={(e) => setPublisableKey(e.target.value)}

                            />
                        </div>
                    </div>




                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Secret Key:</label>
                            <input type="text"
                                style={{ outline: "none" }}

                                value={stripesecretKey}
                                onChange={(e) => setStripeSecretKey(e.target.value)}





                            />
                        </div>
                    </div>




                </div>

                <button type="submit" >Save changes</button>
            </form>
        </div>
    );
};