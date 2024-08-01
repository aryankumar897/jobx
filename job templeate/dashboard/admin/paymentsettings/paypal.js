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
  


   


    return (
        <div>
            <h2>Form</h2>
            <form 
     
            
            
            
            >
                <div className="row">









                    <div className="col-md-6">
                        <div className="form-group">
                            <label> Status:</label>
                            <select
                                style={{ outline: "none" }}

                              
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
                              
                                
                                >
                                <option value="">Select Country</option>
                                {/* {country.map((country) => (
                                    <option key={country._id}

                                        value={country.name}>{country.name}</option>
                                ))} */}
                            </select>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="form-group">
                            <label> Currency Name:</label>




                            <select
                                style={{ outline: "none" }}

                             
                                
                                >
                                <option value="">Select Currency Name</option>
                                {/* {currencies.map((currency) => (
                                    <option key={currency}

                                        value={currency}>{currency}</option>
                                ))} */}
                            </select>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label> Currency Rate:</label>
                            <input type="text"
                                style={{ outline: "none" }}

                              
                                 
                                  />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Client ID:</label>
                            <input type="text"
                                style={{ outline: "none" }}

         


                                />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Secret Key:</label>
                            <input type="text"
                                style={{ outline: "none" }}

            

                                 />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>App ID:</label>
                            <input type="text"
                                style={{ outline: "none" }}

                                
                                  />
                        </div>
                    </div>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};