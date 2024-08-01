"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import toast from 'react-hot-toast';

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append("upload_preset", "ml_default");

    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`, {
        method: 'POST',
        body: formData,
    });

    const data = await response.json();
    return data.secure_url;
};

const EditBlog = ({ params }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const router = useRouter();
    const slug = params.slug
    console.log("search", params.slug)

    useEffect(() => {
        fetchBlog();
    }, []);

    const fetchBlog = async () => {
        const res = await fetch(`${process.env.API}/admin/blog/${slug}`);
        const data = await res.json();

        console.log("x", data)

        setTitle(data?.title);
        setDescription(data?.description);
        setImagePreview(data?.image);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let imageUrl = imagePreview;
        if (image) {
            imageUrl = await uploadImage(image);
            toast.success("Image uploaded");
        }

        if (!imageUrl) return


        const formdata = { title, description, image: imageUrl }
        const res = await fetch(`${process.env.API}/admin/blog/${slug}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
        });

        const data = await res.json();

        if (!res.ok) {
            toast.error(data.err);
        } else {
            toast.success("Blog updated");
            router.push('/dashboard/admin/blogs'); // Redirect to home or another page after update
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '600px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Edit Blog</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
                            <img src={imagePreview} alt="Image Preview" style={{ height: '200px', width: '100%', objectFit: 'cover', borderRadius: '0.3rem', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }} />
                        </div>
                    )}
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ backgroundColor: '#007bff', borderColor: '#007bff', transition: 'background-color 0.3s, border-color 0.3s' }}>
                    Update
                </button>
            </form>
        </div>
    );
};

export default EditBlog;
