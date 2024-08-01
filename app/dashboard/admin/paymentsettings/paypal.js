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





export default function Paypal() {

    const [paypalStatus, setPaypalStatus] = useState("")

    const [paypalMode, setPaypalMode] = useState("")
    const [paypalCurrencyName, setPaypalCurrencyName] = useState("")

    const [paypalCurrencyRate, setPaypalCurrencyRate] = useState("")
    const [clientId, setClientId] = useState("")
    const [appId, setAppId] = useState("")
    const [countryid, setCountryid] = useState("")


    const [secretKey, setSecretKey] = useState("")


    const { fetchCountryPublic, country } = useCountry()
    useEffect(() => {
        fetchCountryPublic()
        fetchData()
    }, [])





 const  fetchData=async()=>{

 try{
  const  response = await fetch(`${process.env.API}/admin/paymentsettings`)

 const  data =await response.json()


  if(!response.ok){

 toast.error(data.err)


  }else{

 console.log(data)
      setPaypalStatus(data && data.settings.paypalStatus)
      setPaypalMode(data && data.settings.paypalMode)
      setPaypalCurrencyName(data && data.settings.paypalCurrencyName)
      setPaypalCurrencyRate(data && data.settings.paypalCurrencyRate)

      setClientId(data && data.settings.clientId)
      setSecretKey(data && data.settings.secretKey)
      setAppId(data && data.settings.appId)
      setCountryid(data && data.settings.countryid)


  }

 }catch(err){

console.log(err)
 
 }




 }






    const handleSubmit = async (e) => {

        e.preventDefault()


        try {

            const formData = {


                paypalStatus,
                paypalMode,
                paypalCurrencyName,
                paypalCurrencyRate,
                clientId,
                secretKey,
                appId,
                countryid,

            }
            const response = await fetch(`${process.env.API}/admin/paymentsettings`, {


                method: 'POST',

                headers: { "Content-Type": "application/json" },

                body: JSON.stringify(formData),

            })


            if (response.ok) {



                console.log("form submitted")
                toast("form submitted")

                setPaypalStatus()
                setPaypalMode("")
                setPaypalCurrencyName("")
                setPaypalCurrencyRate("")

                setClientId()
                setSecretKey()
                setAppId()
                setCountryid("")

            } else {
                console.log("faield to submit")


            }



        } catch (error) {
            console.log(error)
        }


    }





    return (
        <div>
            <h2>   paypal Form</h2>
            <form

                onSubmit={handleSubmit}


            >
                <div className="row">









                    <div className="col-md-6">
                        <div className="form-group">
                            <label> Status:</label>
                            <select
                                style={{ outline: "none" }}


                                value={paypalStatus}
                                onChange={(e) => setPaypalStatus(e.target.value)}



                            >

                                <option value=""></option>
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </select>
                        </div>
                    </div>







                    <div className="col-md-6">
                        <div className="form-group">
                            <label> Mode:</label>
                            <select
                                style={{ outline: "none" }}
                                value={paypalMode}
                                onChange={(e) => setPaypalMode(e.target.value)}

                            >
                                <option value=""> </option>
                                <option value="sandbox">Sandbox</option>
                                <option value="live">Live</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Country Name:</label>
                            <select

                                style={{ outline: "none" }}

                                value={countryid}
                                onChange={(e) => setCountryid(e.target.value)}
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

                                value={paypalCurrencyName}

                                onChange={(e) => setPaypalCurrencyName(e.target.value)}


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

                                value={paypalCurrencyRate}
                                onChange={(e) => setPaypalCurrencyRate(e.target.value)}

                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Client ID:</label>
                            <input type="text"
                                style={{ outline: "none" }}

                                value={clientId}
                                onChange={(e) => setClientId(e.target.value)}


                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Secret Key:</label>
                            <input type="text"
                                style={{ outline: "none" }}

                                value={secretKey}
                                onChange={(e) => setSecretKey(e.target.value)}

                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>App ID:</label>
                            <input type="text"
                                style={{ outline: "none" }}

                                value={appId}

                                onChange={(e) => setAppId(e.target.value)} />
                        </div>
                    </div>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};