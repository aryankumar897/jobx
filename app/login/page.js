"use client"

import Link from "next/link";

import { signIn } from "next-auth/react"

import { useState } from "react"
import toast from "react-hot-toast"

import { useRouter } from "next/navigation"
export default function Login() {

    const router = useRouter()

    const [email, setEmail] = useState('test1@gmail.com')
    const [password, setPassword] = useState("111111")
    const [loading, setLoading] = useState(false)


    const handleSubmit = async (e) => {

        e.preventDefault()

        setLoading(true)
        const response = await signIn("credentials", {

            redirect: false
            ,
            email, password

        })

        setLoading(false)
        if (response?.error) {
            toast.error(response.error)

        } else {
            toast.success("login success")
            router.push("/")
        }


    }

    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-content-center vh-100 ">
                    <div className="col-lg-5  p-5 shadow">
                        <h6>{JSON.stringify({ email, password }, null, 4)}</h6>
                        <h2 className="mb-4">Login</h2>
                        <form onSubmit={handleSubmit}>

                            <input
                                type="email"

                                value={email}

                                onChange={(e) => setEmail(e.target.value)}



                                placeholder="write your email "
                                style={{ outline: "none" }}
                                className="mb-2"

                            />

                            <input
                                type="password"

                                value={password}

                                onChange={(e) => setPassword(e.target.value)}

                                placeholder="write your password "
                                className="mb-2"
                                style={{ outline: "none" }}

                            />

                            <button
                                type="submit"
                                disabled={loading || !password || !email}
                            >

                                {loading ? "please wait" : "submit"}
                            </button>
                        </form>

                    </div>
                </div>
            </div>

        </main>
    )
}