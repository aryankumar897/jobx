"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import ImageResizer from 'react-image-file-resizer';
import { Image, Transformation } from 'cloudinary-react';
import { useSession, signOut } from "next-auth/react";

export default function CompanyInfo() {

    const { data } = useSession()
   














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
                               
                               
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your company  name"
                            />



                            <textarea
                                text="text"
                              
                               
                                rows={4}
                                cols={50}
                                className="form-control  mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter Company bio"
                            />

                            <textarea
                                text="text"


                             
                                rows={4}
                                cols={50}
                                className="form-control    mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your company vision"
                            />



                            <button
                                type="submit"

                            >
                             submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
