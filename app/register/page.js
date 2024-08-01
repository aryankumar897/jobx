"use client";

import { useState, useEffect } from "react"
import toast from 'react-hot-toast';

import { useRouter } from "next/navigation";

export default function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [userType, setUserType] = useState("")

    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true)

        try {
         
            if (password != cpassword) {
                toast.error("invalid credentioal")
                return

            }
            const response = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({
                    name, email, password, role: userType
                })
            });
            console.log(response)

            const data = await response.json()
            if (!response.ok) {
                toast.error(data.err)
                setLoading(false)
            } else {
                toast.success(data.success)


            }


        } catch (err) {
            console.log(err)

            setLoading(false)
        }

    }





    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="col-lg-5 shadow  p-5">


                        <h6 style={{ color: "blue" }}   >  {JSON.stringify({ name, email, password, cpassword, userType }, null, 4)}   </h6>

                        <h2 className="mb-4 text-center">Register</h2>

                        <form onSubmit={handleSubmit} >
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your name"
                            />

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your email"
                            />

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
                                className=" mb-4"
                                style={{ outline: "none" }}

                                placeholder="Enter your cpassword"
                            />

                            <label>
                                <input
                                    style={{ outline: "none" }}

                                    type="radio"
                                    value="candidate"
                                    checked={userType === 'candidate'}
                                    onChange={(e) => setUserType(e.target.value)}
                                    className="radio-wrapper m-1 "
                                />
                                Candidate
                            </label>

                            <label>
                                <input
                                    style={{ outline: "none" }}

                                    type="radio"
                                    value="company"
                                    checked={userType === 'company'}
                                    onChange={(e) => setUserType(e.target.value)}
                                    className="radio-wrapper  m-2"
                                />
                                Company
                            </label>
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
