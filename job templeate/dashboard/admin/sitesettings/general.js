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




const currencySymbols = [
    "$",   // United States Dollar
    "€",   // Euro
    "£",   // British Pound Sterling
    "¥",   // Japanese Yen
    "¥",   // Chinese Yuan
    "$",   // Canadian Dollar
    "$",   // Australian Dollar
    "Fr.", // Swiss Franc
    "HK$", // Hong Kong Dollar
    "NZ$", // New Zealand Dollar
    "₩",   // South Korean Won
    "$",   // Singapore Dollar
    "kr",  // Norwegian Krone
    "kr",  // Swedish Krona
    "$",   // Mexican Peso
    "₹",   // Indian Rupee
    "₽",   // Russian Ruble
    "R",   // South African Rand
    "R$",  // Brazilian Real
    "₺",   // Turkish Lira
    "NT$", // New Taiwan Dollar
    "kr",  // Danish Krone
    "zł",  // Polish Złoty
    "฿",   // Thai Baht
    "Rp",  // Indonesian Rupiah
    "Ft",  // Hungarian Forint
    "Kč",  // Czech Koruna
    "₪",   // Israeli New Shekel
    "$",   // Chilean Peso
    "₱",   // Philippine Peso
    "د.إ", // United Arab Emirates Dirham
    "$",   // Colombian Peso
    "﷼",   // Saudi Riyal
    "RM",  // Malaysian Ringgit
    "lei", // Romanian Leu
    "₫",   // Vietnamese Đồng
    "$",   // Argentine Peso
    "₦",   // Nigerian Naira
    "£",   // Egyptian Pound
    "₨",   // Pakistani Rupee
    "ع.د", // Iraqi Dinar
    "د.ك", // Kuwaiti Dinar
    "﷼",   // Qatari Riyal
    "₴",   // Ukrainian Hryvnia
    "BD",  // Bahraini Dinar
    "ر.ع.",// Omani Rial
    "Ksh", // Kenyan Shilling
    "USh"  // Ugandan Shilling
];

// You can use this array in your application to display currency symbols as needed








export default function Paypal() {
  


    



    return (
        <div>
            <h2>Form</h2>
            <form     
            
            
          
            
            
              >
                <div className="row">



                    <div className="col-md-6">
                        <div className="form-group">
                            <label>site Name</label>
                            <input type="text"
                                style={{ outline: 'none' }}

                                 
                                  />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label> site email</label>
                            <input type="text"
                                style={{ outline: 'none' }}

                               
                                  />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>site phone</label>
                            <input type="text"
                                style={{ outline: 'none' }}

                               
                                
                                 />
                        </div>
                    </div>










                    <div className="col-md-6">
                        <div className="form-group">
                            <label>site  currency  icon</label>
                            <select
                                style={{ outline: 'none' }}

                               
                                 
                                 >
                                <option value=""></option>
                                {/* {currencySymbols.map((country) => (
                                    <option key={country}

                                        value={country}>{country}</option>
                                ))} */}
                            </select>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="form-group">
                            <label> site  default  currency </label>




                            <select
                                style={{ outline: 'none' }}

                              
                                
                                  >
                                <option value=""></option>
                                {/* {currencies.map((currency) => (
                                    <option key={currency}

                                        value={currency}>{currency}</option>
                                ))} */}
                            </select>

                        </div>
                    </div>
                     
                </div>

                <button type="submit" >Submit</button>
            </form>
        </div>
    );
};