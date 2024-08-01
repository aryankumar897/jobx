"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Register() {
    const { data, status } = useSession()
    let username = data && data?.user?.name
    let useremail = data && data?.user?.email
    const [name, setName] = useState(username)

    const [email, setEmail] = useState(useremail)

    const [loading, setLoading] = useState(false)


     console.log("dataxxxx",data)

    const handleSubmit = async (e) => {
        try {



            e.preventDefault()

            setLoading(true)


            const response = await fetch(`${process.env.API}/company/account`, {

                method: "PUT",
                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({ name, email })
            })


            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)
                setLoading(false)
            } else {
                setLoading(false)
                toast.success(data.success)
            }


        } catch (error) {
            console.log(error)
        }


    }



    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center ">
                    <div className="col shadow  p-5">
                        <h2 className="m-3 text-center">Update Detail</h2>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter user name"
                            />

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your email"
                            />





                            <br />
                            <button
                                type="submit"

                            >

                                {loading ? "please wait" : "submit"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
