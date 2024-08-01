"use client"
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import moment from 'moment';
import ImageResizer from 'react-image-file-resizer';
import { Image, Transformation } from 'cloudinary-react';
import { useSession, signOut } from "next-auth/react";
import Cv from "./cv"
import { DatePicker } from 'antd';
export default function Basic() {

    const { data } = useSession()
    const [dob, setDob] = useState('');
    
    const [fullname, setFullName] = useState("");
    const [userId, setUserId] = useState(data?.user._id)
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);
    const [website, setWebsite] = useState('');
    const [logo, setLogo] = useState('');
    const [file, setFile] = useState(null);


    const [pdfname, setPdfname] = useState('');


    const [cv, setCv] = useState(null);
    const [experience, setExperience] = useState("");
    const router = useRouter();


    // console.log({

    //     fullname,

    //     isoDate: dob?.toISOString(),
    //     experience,
    //     title, 
    //     logo,

    // })

    useEffect(() => {

        fetchData()

    }, [])


    const fetchData = async () => {
        try {
            // Make a request to your backend to fetch  data
            const response = await fetch(`${process.env.API}/candidate/basic`,
                {
                    method: "GET",
                }

            );
            if (!response.ok) {
                throw new Error('Failed to fetch company data');
            }

            // Assuming response.json() contains the company data

            const data = await response.json();

            console.log("basiccc", data)
            setFullName(data.full_name)
            setTitle(data.title)
            setExperience(data.experience_lable)
            setWebsite(data?.website)
            setLogo(data?.image)
            setDob(moment(data?.birth_date))



        } catch (error) {
            console.error('Error fetching company data:', error);
        }
    };



    // Function to handle date change
    const handleDateChange = (date) => {
        setDob(date); // Update the dob state with the selected date
    };


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true)


            const response = await fetch(`${process.env.API}/candidate/basic`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({

                    full_name: fullname,

                    birth_date: dob?.toISOString(),
                    experience_lable: experience,
                    title,
                    image: logo,
                    website,
                    cv
                }),
            });

            //   console.log(response)
            const data = await response.json();
            console.log(data)
            if (!response.ok) {
                toast.error(data.err);
                setLoading(false);
            } else {
                toast.success("sucessfully candidate registerd");
                router.push("/");
            }
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };



    const handleUpload = async (e) => {


        try {

            setLoading(true);
            const file = e.target.files[0];

            // Resize the image before uploading
            ImageResizer.imageFileResizer(
                file,
                1280, // Max width
                7200, // Max height
                'JPEG', // Format
                100, // Quality
                0, // Rotation
                async (uri) => {
                    // Send the resized image to the backend
                    const response = await fetch(`${process.env.API}/candidate/upload/image`, {
                        method: "POST",

                        body: JSON.stringify({ logo: uri }),
                    });

                    if (response.ok) {

                        const data = await response.json();

                        setLogo(data);

                        toast.success("uploded")

                    }
                },
                "base64" // Output type
            );
        } catch (error) {
            toast.error("upload  faild")
            console.error('Error resizing image:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        setLoading(true);
        try {
            // Send request to delete the image
            await fetch(`${process.env.API}/candidate/upload/image`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ public_id: logo.public_id }),
            });
            setLogo('');
            toast.success("deleted succussfully")

        } catch (error) {
            toast.error("deleted faiel")
            console.error('Error deleting image:', error);
        } finally {
            setLoading(false);
        }
    };



    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
        } else {
            alert('Please select a PDF file.');
        }
    };

    const handleUploadpdf = async (e) => {
        e.preventDefault();
        // alert('Please select a file to upload.');
        if (!file) {
            alert('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'ml_default');

        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`,
                {
                    method: 'POST',
                    body: formData,
                }
            );
            const data = await response.json();
            console.log(data);
            setCv(data.secure_url);

            setPdfname(data?.original_filename)
            toast.success("upload    succussfully")


        } catch (error) {
            console.error('Error uploading file:', error);

        }
    };




    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="  col   shadow  p-5">

                        {/* <Cv/> */}
                        <h2 className="mb-1 text-center">Profile</h2>

                        <form onSubmit={handleSubmit}>


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
                                            select pdf
                                        </label>


                                        <button onClick={handleUploadpdf} style={{ marginLeft: '10px', padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                                            Upload
                                        </button>
                                    </div>
                                    {cv && (
                                        <div>
                                            <h6>Uploaded pdf:</h6>

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
                                            <Image
                                                src={logo.secure_url}
                                                alt="Description of your image"
                                                width={500} // Desired width of the image
                                                height={300} // Desired height of the image
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
                                onChange={(e) => setFullName(e.target.value)}
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



                            {/* <textarea
                                text="text"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                rows={4}
                                cols={50}
                                className="form-control mb-4"
                                placeholder="Enter Company bio"
                            />

                            <textarea
                                text="text"
                                value={vision}
                                onChange={(e) => setVision(e.target.value)}
                                rows={4}
                                cols={50}
                                className="form-control mb-4"
                                placeholder="Enter your company vision"
                            /> */}



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