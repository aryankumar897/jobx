"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Register() {
    const { data, status } = useSession()
 




    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center ">
                    <div className="col shadow  p-5">
                        <h2 className="m-3 text-center">Update Detail</h2>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                           
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter user name"
                            />

                            <input
                                type="email"
                              
                            
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your email"
                            />





                            <br />
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
