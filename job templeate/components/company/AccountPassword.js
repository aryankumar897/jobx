"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Register() {




    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="col shadow  p-5">
                        <h2 className="m-4 text-center">Password Update</h2>

                        <form onSubmit={handleSubmit}>



                            <input
                                type="password"
                             
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your password"
                            />

                            <input
                                type="password"

                             
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your cpassword"
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
