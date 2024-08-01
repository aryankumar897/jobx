"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Register() {
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [loading, setLoading] = useState("")

    const handleSubmit = async (e) => {


        try {



            e.preventDefault()

            setLoading(true)
            if (password != cpassword) {
                toast.error("invalid credential")
return
            }

            const response = await fetch(`${process.env.API}/company/password`, {

                method: "PUT",
                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({ password })
            })


            const data = await response.json()

            if (!response.ok) {
                toast.error(data.success)
                setLoading(false)
            } else {

                toast.success("password updated")
            }


        } catch (error) {
            console.log(error)
        }

    }

    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="col shadow  p-5">
                        <h2 className="m-4 text-center">Password Update</h2>

                        <form onSubmit={handleSubmit}>



                            <input
                                type="password"
                                value={password}

                                onChange={(e) => setPassword(e.target.value)} className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your password"
                            />

                            <input
                                type="password"

                                value={cpassword}
                                onChange={(e) => setCpassword(e.target.value)}
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
