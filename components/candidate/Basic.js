"use client"
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
//import moment from 'moment';
import ImageResizer from 'react-image-file-resizer';
//import { Image, Transformation } from 'cloudinary-react';
import { useSession, signOut } from "next-auth/react";

import { DatePicker } from 'antd';
import moment from "moment";
export default function Basic() {
    const [loading, setLoading] = useState(false)
    const [dob, setDob] = useState("")

    const [fullname, setFullname] = useState('')
    const [title, setTitle] = useState('')

    const [website, setWebsite] = useState('')

    const [logo, setLogo] = useState('')

    const [file, setFile] = useState(null)


    const [pdfname, setPdfname] = useState('')

    const [cv, setCV] = useState(null)


    const [experience, setExperience] = useState("")

    const router = useRouter()



    useEffect(() => {

        fetchData()
    }, [])
    const fetchData = async () => {



        try {

            const response = await fetch(`${process.env.API}/candidate/basic`)

            const data = await response.json()
            if (!response.ok) {

                throw new Error("Failed to fetch")
            }
            console.log(data)

            setFullname(data.full_name)
            setTitle(data.title)

            setExperience(data.experience_lable)

            setWebsite(data.website)

            setLogo(data?.image)

            setDob(moment(data?.birth_date))
setCV(data?.cv)


        } catch (error) {
            console.log(error)
        }


    }






    const handleDateChange = (date) => {

        setDob(date)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            console.log({




                full_name: fullname,
                birth_date: dob.toISOString(),
                experience_lable: experience,
                title,
                image: logo,
                website,
                cv


            })

            const response = await fetch(`${process.env.API}/candidate/basic`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },


                body: JSON.stringify({




                    full_name: fullname,
                    birth_date: dob.toISOString(),
                    experience_lable: experience,
                    title,
                    image: logo,
                    website,

                    cv

                })
            })

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)
                setLoading(false)
            } else {

                toast.success(data.msg)

                setLoading(false)
            }





        } catch (error) {
            console.log(error)
        }

    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        if (selectedFile && selectedFile.type === "application/pdf") {


            setFile(selectedFile)

        } else {


            alert("Please select a file")
        }



    }


    const handleUploadpdf = async (e) => {

        e.preventDefault()


        if (!file) {
            alert("Please select a file")
            return
        }

        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", "ml_default")



        try {

            const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`, {

                method: 'POST',
                body: formData,
            })

            const data = await response.json()

            console.log(data)


            setCV(data?.secure_url)
            setPdfname(data?.original_filename)
            toast.success("uploded successfully")

        } catch (error) {
            console.log(error)
        }







    }


    const handleUpload = (e) => {

        try {
            e.preventDefault()
            setLoading(true)
            const file = e.target.files[0]

            ImageResizer.imageFileResizer(


                file,
                1280,
                720,
                "JPEG",
                100,
                0,

                async (uri) => {


                    const response = await fetch(`${process.env.API}/candidate/upload/image`, {
                        method: "POST",
                        body: JSON.stringify({ logo: uri })


                    })
                    if (response.ok) {

                        const data = await response.json()
                        setLogo(data);

                        toast.success("picture uploaded")



                    }



                },

                "base64"

            )

        } catch (error) {
            console.log(error)

            toast.error("picture upload failed")
        } finally {
            setLoading(false)

        }

    }


    const handleDelete = async () => {
        try {
            setLoading(true)
            await fetch(`{process.env.API}/candidate/upload/image`, {


                method: "PUT",

                body: JSON.stringify({ public_id: logo.public_id })
            })

            setLogo(""
            )


            toast.success("deleted successfully")
            setLoading(false)
        } catch (error) {
            toast.error("error deleting image")
            setLoading(false)
        }
    }

    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="  col   shadow  p-5">

                        {/* <Cv/> */}
                        <h2 className="mb-1 text-center">Basic  Profile</h2>

                        <form

                            onSubmit={handleSubmit}
                        >


                            <div className="d-flex flex-column flex-md-row justify-content-between">
                                <div className="text-center form-group mb-3">
                                    <div className="form-group mb-3">

                                        <label>
                                            <input
                                                id="fileUpload"
                                                type="file"
                                                accept=".pdf"
                                                onChange={handleFileChange}
                                                hidden
                                            />
                                            select resume
                                        </label>


                                        <button

                                            onClick={handleUploadpdf}

                                            style={{ marginLeft: '10px', padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                                            Upload
                                        </button>
                                    </div>
                                    {cv && (
                                        <div>
                                            <h6>Uploaded resume:</h6>

                                            {pdfname}
                                        </div>
                                    )}
                                </div>



                            </div>




















                            <div className="d-flex flex-column flex-md-row justify-content-between">
                                <div className="text-center form-group mb-3">
                                    <div className="form-group mb-3">
                                        <label className={`btn btn-primary col-12 ${loading ? "disabled" : ""}`}>
                                            {loading ? "Processing" : "Upload Picture"}
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
                                            <h6>Uploaded  Picture:</h6>
                                            <img
                                                src={logo.secure_url}
                                                alt="Description of your image"
                                                width={500}
                                                height={300}
                                            />
                                            <button className="text-center pointer" onClick={handleDelete}> ❌</button>
                                        </div>
                                    )}
                                </div>



                                <div className="text-center form-group mb-3">
                                    <div className="form-group mb-3">
                                        <div className="row align-items-center">
                                            <div className="col-12">
                                                <DatePicker
                                                    placeholder="Select date of birth"
                                                    onChange={handleDateChange}
                                                    value={dob}
                                                    style={{
                                                        width: '100%',
                                                        height: '40px',
                                                        fontSize: '16px',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>










                            <input
                                type="text"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your Full  name"
                            />
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your title  name"
                            />

                            <input
                                type="text"
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                                className="mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your Experience  lable"
                            />


                            <input
                                type="text"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your website name"
                            />







                            <button
                                type="submit"

                            >
                                {loading ? "Please wait.." : "Submit"}
                            </button>
                        </form>


                    </div>
                </div>

            </div>
        </main>
    )

}