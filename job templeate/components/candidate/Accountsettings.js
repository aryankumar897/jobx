"use client"
import { useState, useEffect } from "react"

import toast from "react-hot-toast";
//import AccountPassword from "./AccountPassword"
export default function Account() {










    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="  col   shadow  p-5">
                        <h2 className="mb-2 ">Lacation</h2>


                        <form 
                  
                        >



                            <div className="row">
                                <div className="col-md-4">
                                    <select
                                        className=" mb-4"
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '5px',
                                            border: '2px solid #ccc',
                                            backgroundColor: '#fff',
                                            color: '#333',
                                            fontSize: '15px',
                                            outline: "none",
                                            appearance: 'none',
                                        }}


                                     
                                    >
                                        <option value="">Select a country</option>
                                        {/* {country && country.map((country) =>
                                            <option
                                                key={country._id}
                                                value={country._id}>
                                                {country.name}
                                            </option>
                                        )} */}
                                    </select>
                                </div>

                                <div className="col-md-4">
                                    <select
                                        className=" mb-4"
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '5px',
                                            border: '2px solid #ccc',
                                            backgroundColor: '#fff',
                                            color: '#333',
                                            fontSize: '15px',
                                            outline: "none",
                                            appearance: 'none',
                                        }}
                                       
                                 
                                    >
                                        <option value="">Select a state</option>

                                        {/* {state && state.map((state) =>


                                            <option
                                                key={state._id}
                                                value={state._id}
                                            >
                                                {state.statename}
                                            </option>



                                        )} */}


                                    </select>
                                </div>

                                <div className="col-md-4">



                                    <select
                                        className="mb-4"
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '5px',
                                            border: '2px solid #ccc',
                                            backgroundColor: '#fff',
                                            color: '#333',
                                            fontSize: '15px',
                                            appearance: 'none',
                                            outline: "none"
                                        }}
                                       
                                   
                                    >
                                        <option value="">Select a city</option>
                                        {/* {city.map((city) => (
                                            <option
                                                key={city._id}
                                                value={city._id}
                                            >
                                                {city.name}
                                            </option>
                                        ))} */}
                                    </select>



                                </div>
                            </div>



                            <textarea
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    fontSize: '15px',
                                    appearance: 'none',
                                    outline: "none"
                                }}
                                className=" mb-4"
                              
                             
                                placeholder=" address "
                            />

                            <h2 className="mb-5 ">Contact details </h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <input
                                        placeholder=" phone  one "
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '5px',
                                            border: '2px solid #ccc',
                                            backgroundColor: '#fff',
                                            color: '#333',
                                            fontSize: '15px',
                                            appearance: 'none',
                                            outline: "none"
                                        }}


                                        type="tel"
                                        className="  mb-4"

                                       
                                   
                                    />
                                </div>

                                <div className="col-md-6">
                                    <input
                                        placeholder=" phone email "
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '5px',
                                            border: '2px solid #ccc',
                                            backgroundColor: '#fff',
                                            color: '#333',
                                            fontSize: '15px',
                                            appearance: 'none',
                                            outline: "none"
                                        }}

                                        type="tel"
                                        className=" mb-4"

                                     
                                   
                                    />
                                </div>


                            </div>

                            <input
                                placeholder="  enter email "

                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    fontSize: '15px',
                                    appearance: 'none',
                                    outline: "none",
                                }}

                                type="email"
                                className="  mb-4"

                               
                           
                            />



                            <button
                                type="submit"

                            >
                                {loadings ? "Please wait.." : "Save changes"}
                            </button>

                        </form>
                        {/* <AccountPassword /> */}

                    </div>
                </div>

            </div>
        </main>
    )

}