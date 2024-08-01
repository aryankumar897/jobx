"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Register() {

    const [loading, setLoading] = useState(false)
    

    const [password, setPassword] = useState("")

    const [cpassword, setCpassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            setLoading(true)
            if (password != cpassword) {
                toast.error("invalid creadential")
                return
            }

            const response = await fetch(`${process.env.API}/candidate/password`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ password })
            })
            const data = await response.json()
            if (!response.ok) {
                setLoading(false)
                toast.error(data.err)
            } else {
                setLoading(false)
                toast.success("password updated")

            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="col shadow  p-5">
                        <h2 className="m-1 text-center">Password Update</h2>

                        <form


                            onSubmit={handleSubmit}

                        >



                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your password"
                            />

                            <input
                                type="password"
                                value={cpassword}
                                onChange={(e) => setCpassword(e.target.value)}
                                className="mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your cpassword"
                            />




                            <br />
                            <button
                                type="submit"
                                disabled={loading || !password || !cpassword}
                            >
                                {loading ? "Please wait.." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}