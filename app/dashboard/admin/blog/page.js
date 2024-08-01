"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast"


const uploadImage = async (file) => {

    const formData = new FormData()

    formData.append('file', file)
    formData.append("upload_preset", "ml_default")

    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`, {

        method: "POST",

        body: formData


    })



    const data = await res.json()
 console.log("data",data)
    return data.secure_url
}







const CreateBlog = () => {
    const router = useRouter()
    const [title, setTitle] = useState("")


    const [description, setDescription] = useState("")

    const [image, setImage] = useState("")
    const [imagePreview, setImagePreview] = useState("")

    const handleImageChange = (e) => {

        const file = e.target.files[0];
        setImage(file)

        setImagePreview(URL.createObjectURL(file))


    }


    const handleSubmit = async (e) => {

        e.preventDefault()


        let imageUrl = "";
        if (image) {

            imageUrl = await uploadImage(image)
            toast.success("image uploaded")

        }


        console.log({ title, description, image: imageUrl })

        const res = await fetch(`${process.env.API}/admin/blog`, {




            method: "POST",

            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({ title, description, image: imageUrl })
        })

        const data = await res.json()

        console.log(data)
        if (!res.ok) {

            toast.error(data.err)

        } else {
            toast.success("blog created")
            router.push("/dashboard/admin/blogs")
        }





    }


    return (
        <div className="container mt-5" style={{ maxWidth: '600px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Create New Blog</h1>
            <form

                onSubmit={handleSubmit}


                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group">
                    <label style={{ fontWeight: 'bold', color: '#343a40' }}>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        style={{ borderRadius: '0.3rem', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }}
                        placeholder="Enter blog title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label style={{ fontWeight: 'bold', color: '#343a40' }}>Description</label>
                    <textarea
                        className="form-control"
                        style={{ borderRadius: '0.3rem', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }}
                        placeholder="Enter blog description"
                        rows="5"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label style={{ fontWeight: 'bold', color: '#343a40' }}>Image</label>
                    <input
                        type="file"
                        className="form-control"
                        style={{ borderRadius: '0.3rem', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }}
                        onChange={handleImageChange}
                    />
                    {imagePreview && (
                        <div style={{ marginTop: '10px', textAlign: 'center' }}>
                            <img src={imagePreview} alt="Image Preview" style={{ maxHeight: '200px', borderRadius: '0.3rem', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }} />
                        </div>
                    )}
                </div>
                <button type="submit" style={{ color: "white", backgroundColor: '#007bff', borderColor: '#007bff', transition: 'background-color 0.3s, border-color 0.3s' }}>
                    Create
                </button>
            </form>
        </div>
    );
};

export default CreateBlog;
