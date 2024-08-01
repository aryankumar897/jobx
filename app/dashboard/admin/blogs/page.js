"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Home = () => {

    const [blogs, setBlogs] = useState([])

    const router = useRouter()

    useEffect(() => {

        fetchBlogs()

    }, [])



    const fetchBlogs = async () => {

        const res = await fetch(`${process.env.API}/admin/blog`)
        const data = await res.json()

        setBlogs(data)


    }


    const handleDelete = async (id) => {
        if (confirm("are  you sure  you want to delete  thid blog")) {

            await fetch(`${process.env.API}/admin/blog/${id}`, {


                method: "DELETE"
            })
            fetchBlogs()

        }




    }


    return (
        <div className="container mt-5">
            <h1>All Blogs</h1>
            <div className="row">
                {blogs && blogs.map((blog) => (
                    <div className="col-md-4" key={blog._id}>
                        <div className="card mb-4">
                            <img
                                src={blog.image}
                                className="card-img-top"
                                alt={blog.title}
                                style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                            />

                            <div className="card-body">
                                <h5 className="card-title">{blog.title}</h5>
                                <p className="card-text">{blog.description.substring(0, 100)}...</p>
                                <Link href={`/dashboard/admin/editblog/${blog._id}`} className="btn btn-primary mr-2">

                                    <FaEdit /> Edit

                                </Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(blog._id)}
                                >
                                    <FaTrash /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
