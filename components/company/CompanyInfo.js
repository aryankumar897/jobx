"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import ImageResizer from 'react-image-file-resizer';
import { Image, Transformation } from 'cloudinary-react';
import { useSession, signOut } from "next-auth/react";

export default function CompanyInfo() {

    const { data } = useSession()

    const [name, setName] = useState("")

    const [vision, setvision] = useState("")
    const [loading, setLoading] = useState(false)
    const [loadings, setLoadings] = useState(false)

    const [bio, setBio] = useState("")

    const [logo, setLogo] = useState("")

    const [banner, setBanner] = useState("")





    useEffect(() => {

        fetchData()
    }, [])

    const fetchData = async () => {


        try {

            const response = await fetch(`${process.env.API}/company/register`)

            if (!response.ok) {
                throw new Error("Feaild to fetch comapny data ")
            }
            const data = await   response.json()
            console.log(data)

 setName(data.name)
 setBio(data.bio)
 setBanner(data.banner)
setvision(data.vision)
setLogo(data.logo)

        } catch (err) {

            console.log(err)

        }



    }




    const handleSubmit = async (e) => {

        try {





            e.preventDefault();



            console.log({



                name, bio, vision, logo, banner
            })



            setLoading(true)

            const response = await fetch(`${process.env.API}/company/register`, {



                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({



                    name, bio, vision, logo, banner
                })

            })


            const data = await response.json();
         
            if (!response.ok) {
                toast.error(data.err)
                setLoading(false)
            } else {
                toast.success("save  change   succesfully  ")
                setLoading(false)


            }





        } catch (err) {

            console.log(err)
            setLoading(false)

        }



    }



    const handleUpload = async (e) => {
        try {
            setLoadings(true)

            const file = e.target.files[0]
            //resize image  before uploading

            ImageResizer.imageFileResizer(

                file,
                1280,
                7200,
                "JPEG",
                100,
                0,
                async (uri) => {

                    const response = await fetch(`${process.env.API}/company/upload/image`, {

                        method: "POST",
                        body: JSON.stringify({ logo: uri })
                    })



                    if (response.ok) {
                        const data = await response.json();
                        setLogo(data);
                        toast.success("uploaded")


                    }



                },
                "base64"



            )







        } catch (error) {

            toast.error("upload faild")


        } finally {

            setLoadings(false)

        }





    }

    const handleDelete = async () => {
        setLoadings(true)
        try {
            await fetch(`${process.env.API}/company/upload/image`, {


                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ public_id: logo.public_id })


            })


            setLogo("")
            toast.success("deleted success fully")



        } catch (error) {

            toast.error("delete faild")
            console.log(error)

        } finally {
            setLoadings(false)
        }



    }





    const handleUploadbanner = async (e) => {
        try {
            setLoadings(true)

            const file = e.target.files[0]
            //resize image  before uploading

            ImageResizer.imageFileResizer(

                file,
                1280,
                7200,
                "JPEG",
                100,
                0,
                async (uri) => {

                    const response = await fetch(`${process.env.API}/company/upload/banner`, {

                        method: "POST",
                        body: JSON.stringify({ banner: uri })
                    })



                    if (response.ok) {
                        const data = await response.json();
                        setBanner(data);
                        toast.success("uploaded")


                    }



                },
                "base64"



            )







        } catch (error) {

            toast.error("upload faild")


        } finally {

            setLoadings(false)

        }





    }

    const handleDelet = async () => {
        setLoadings(true)
        try {
            await fetch(`${process.env.API}/company/upload/banner`, {


                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ public_id: banner?.public_id })


            })


            setBanner("")
            toast.success("deleted success fully")



        } catch (error) {

            toast.error("delete faild")
            console.log(error)

        } finally {
            setLoadings(false)
        }



    }






    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="  col   shadow  p-5">
                        <h2 className="mb-4 text-center">Company info</h2>




                        <form onSubmit={handleSubmit}>

                            <div className=" text-center form-group mb-3">



                                <div className="form-group mb-3">
                                    <label
                                        className={`btn btn-primary col-12 ${loading ? "disabled" : ""}`}
                                    >
                                        {loading ? "Processing" : "Upload Logo"}
                                        <input
                                            type="file"

                                            hidden
                                            accept="images/*"
                                            onChange={handleUpload}
                                            disabled={loading}
                                        />
                                    </label>
                                </div>
                                {logo && (
                                    <div>
                                        <h6>Uploaded Logo:</h6>
                                        <Image
                                            src={logo.secure_url}
                                            alt="Description of your image"
                                            width={500} // Desired width of the image
                                            height={300} // Desired height of the image
                                        />
                                        <button
                                            className="text-center pointer"
                                            onClick={handleDelete}>  ❌</button>
                                    </div>
                                )}
                            </div>

                            <div className=" text-center form-group mb-3">



                                <div className="form-group mb-3">
                                    <label
                                        className={`btn btn-primary col-12 ${loading ? "disabled" : ""}`}
                                    >
                                        {loading ? "Processing" : "Upload Banner"}
                                        <input
                                            type="file"

                                            hidden
                                            accept="images/*"
                                            onChange={handleUploadbanner}
                                            disabled={loading}
                                        />
                                    </label>
                                </div>
                                {banner && (
                                    <div>
                                        <h6>Uploaded banner:</h6>
                                        <Image
                                            src={banner.secure_url}
                                            alt="Description of your image"
                                            width={500} // Desired width of the image
                                            height={300} // Desired height of the image
                                        />
                                        <button
                                            className="text-center pointer"
                                            onClick={handleDelet}>  ❌</button>
                                    </div>
                                )}
                            </div>









                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}

                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your company  name"
                            />



                            <textarea
                                text="text"
                                value={bio}

                                onChange={(e) => setBio(e.target.value)}

                                rows={4}
                                cols={50}
                                className="form-control  mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter Company bio"
                            />

                            <textarea
                                text="text"

                                value={vision}
                                onChange={(e) => setvision(e.target.value)}

                                rows={4}
                                cols={50}
                                className="form-control    mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your company vision"
                            />



                            <button
                                type="submit"
                                disabled={loading || !vision || !name || !bio}
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
