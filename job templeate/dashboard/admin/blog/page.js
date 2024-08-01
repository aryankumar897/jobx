"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast"



const CreateBlog = () => {


    return (
        <div className="container mt-5" style={{ maxWidth: '600px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Create New Blog</h1>
            <form

                //    onSubmit={handleSubmit}


                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group">
                    <label style={{ fontWeight: 'bold', color: '#343a40' }}>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        style={{ borderRadius: '0.3rem', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }}
                        placeholder="Enter blog title"

                    />
                </div>
                <div className="form-group">
                    <label style={{ fontWeight: 'bold', color: '#343a40' }}>Description</label>
                    <textarea
                        className="form-control"
                        style={{ borderRadius: '0.3rem', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }}
                        placeholder="Enter blog description"
                        rows="5"

                    ></textarea>
                </div>
                <div className="form-group">
                    <label style={{ fontWeight: 'bold', color: '#343a40' }}>Image</label>
                    <input
                        type="file"
                        className="form-control"
                        style={{ borderRadius: '0.3rem', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }}
                    //   onChange={handleImageChange}
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
