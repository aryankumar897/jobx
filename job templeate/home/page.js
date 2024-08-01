"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);
        const data = await res.json();



        setBlogs(data);
    };

    return (
        <div className="container mt-5">
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>All Blogs</h1>
            <div className="row justify-content-center">
                {blogs && blogs.map((blog) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={blog._id}>
                        <Link href={`/blog/${blog._id}`} style={{ textDecoration: 'none' }}>
                            <div className="card" style={{ borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                <img
                                    src={blog.image}
                                    className="card-img-top"
                                    alt={blog.title}
                                    style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{blog.title}</h5>
                                    <p className="card-text" style={{ fontSize: '1rem', color: '#6c757d' }}>{blog.description.substring(0, 100)}...</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
