"use client"

import Link from "next/link";



export default function Login() {


    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-content-center vh-100 ">
                    <div className="col-lg-5  p-5 shadow">

                        <h2 className="mb-4">Login</h2>
                        <form >

                            <input
                                type="email"
                                placeholder="write your email "
                                style={{ outline: "none" }}
                                className="mb-2"

                            />

                            <input
                                type="password"
                                placeholder="write your password "
                                className="mb-2"
                                style={{ outline: "none" }}
                               
                            />

                            <button
                                type="submit"
                              //  disabled={}
                            >

                           submit
                            </button>
                        </form>
                        {/* <Link className="nav-link mt-2  btn btn-danger" href="/forgot">
                    
                             forgot password

                        </Link> */}
                    </div>
                </div>
            </div>

        </main>
    )
}