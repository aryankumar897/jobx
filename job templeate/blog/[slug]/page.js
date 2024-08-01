"use client"
import React, { useState, useEffect } from 'react';

const ViewBlog = ({ params }) => {
  
    return (
        <div className="container mt-5" style={{ maxWidth: '800px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>{blog.title}</h1>
            {blog.image && (
                <img
                    src={blog.image}
                    alt={blog.title}
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '400px',
                        objectFit: 'cover',
                        borderRadius: '0.5rem',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        marginBottom: '20px',
                    }}
                />
            )}
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>{blog.description}</p>
        </div>
    );
};

export default ViewBlog;
