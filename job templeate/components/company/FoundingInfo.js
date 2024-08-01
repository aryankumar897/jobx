"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

export default function FoundingInfo() {

 
    const router = useRouter();







    return (
        <main className="mb-5">
            <div className="container  ">
                <div className="row d-flex justify-content-center align-items-center ">
                    <div className="  col   shadow p-5">
                        <h2 className="mb-4 text-center">Founding info</h2>

                        <form onSubmit={handleSubmit}>






                            <select
                                className=" mb-4"
                                placeholder="Enter your Industry name"

                                style={{
                                    width: 'calc(100% - 20px)',
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
                             
                             
                             
                                <option value="">Select an industry Type</option>



                           





                                {/* Add more options as needed */}
                            </select>




                            <select
                                className=" mb-4"
                                style={{
                                    width: 'calc(100% - 20px)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    fontSize: '15px',
                                    appearance: 'none',
                                    outline: "none"
                                    // Hide the default arrow icon
                                }}
                                placeholder="Enter your Organization type"
                              
                                
                                >
                                <option value="">Select an  Organization type</option>
                           
                                {/* Add more options as needed */}
                            </select>







                            <select
                                className=" mb-4"
                                placeholder="Enter your Team size"
                             

                                style={{
                                    width: 'calc(100% - 20px)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    fontSize: '15px',
                                    outline: "none",
                                    appearance: 'none', // Hide the default arrow icon
                                }}

                             
                                
                                >
                                <option value="">Select an team size</option>
                              
                                {/* Add more options as needed */}
                            </select>




                            <div className="datePickerContainer">
                                <label for="birthday"> company establishment date</label>
                                <input
                                    type="date"
                               
                                    className="mb-4 
                                  datePickerInput   
                                "



                                />
                            </div>
                            <input
                                type="text"
                            
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your website  name"
                            />


                            <input
                                type="email"
                             
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your email  name"
                            />

                            <input
                                type="tel"
                              
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your phone  name"
                            />


                            <select
                                className=" mb-4"

                                style={{
                                    width: 'calc(100% - 20px)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    outline: "none",
                                    fontSize: '15px',
                                    appearance: 'none', // Hide the default arrow icon
                                }}

                            
                            >
                                <option value="">Select an country name</option>
                             
                                {/* Add more options as needed */}
                            </select>



                            <select
                                className=" mb-4"
                                style={{
                                    width: 'calc(100% - 20px)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    fontSize: '15px',
                                    outline: "none",
                                    appearance: 'none', // Hide the default arrow icon
                                }}
                             
                                
                                >
                                <option value="">Select an state name</option>

                            



                                {/* Add more options as needed */}
                            </select>



                            <select
                                className=" mb-4"
                                style={{
                                    width: 'calc(100% - 20px)',
                                    padding: '10px',
                                    outline: "none",
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    fontSize: '15px',
                                    appearance: 'none',
                                }}
                               
                            >
                                <option value="">Select a city</option>
                              
                            </select>








                            <input
                                type="text"
                              
                              
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your address  name"
                            />
                            <input
                                type="text"
                               
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your Map link"
                            />

                            <button
                                type="submit"

                            >
                               submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </main>
    );
}
