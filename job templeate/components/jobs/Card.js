"use client"
import Image from "next/image";
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FaMapMarker, FaStar } from 'react-icons/fa';
import { useState, useEffect } from "react"
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import moment from 'moment'
import toast from "react-hot-toast";
export default function JobsCard({ jobs }) {




    return (
        <>
            {/* {JSON.stringify({ jobboookmark },null,4)} */}




            <div className="card mb-3  boxx ">
                <div className="row g-0">

                    <div className="col-md-9  ">
                        <div className="card-body">
                            <div className="rounded-circle overflow-hidden border border-secondary" style={{ width: '50px', height: '50px' }}>
                                <img src={jobs?.company_id?.logo?.secure_url || ""}
                                    alt={`${jobs?.company_id?.name} logo`}

                                />
                            </div>

                            <Link
                                style={{ textDecoration: 'none' }}

                                href={`/company/${jobs?.company_id?.slug}`}


                            >
                                <h5

                                    style={{ fontSize: '25px', fontWeight: 'bold' }}
                                    className="card-title">{jobs?.company_id?.name}</h5>
                            </Link>

                            <p

                                style={{ fontSize: '18px', fontWeight: 'bold', }}

                                className="card-text"><strong>Location:</strong> {jobs?.country?.name}</p>

                            <p className="card-text"
                                style={{ fontSize: '26px', fontWeight: 'bold', color: "green", cursor: 'pointer' }}
                                onClick={() => handleClick(jobs?.slug)}
                            > {jobs?.title}</p>


                            <p
                                style={{ fontSize: '15px', fontWeight: 'bold', }}

                                className="card-text"><strong>Job Type:</strong> {jobs?.job_type_id?.name}</p>
                            <p

                                style={{ fontSize: '15px', fontWeight: 'bold', }}
                                className="card-text"><strong>jobexperience :</strong> {jobs?.jobexperienceid?.name}</p>



                            <p
                                style={{ fontSize: '15px', fontWeight: 'bold', }}
                                className="card-text"><strong>Created:</strong>
                                {
                                    moment(jobs?.createdAt).format('MMMM YYYY, h:mm:ss a')
                                }
                            </p>

                            <span
                                style={{ fontSize: '20px', fontWeight: 'bold' }}

                                className="card-text"><strong>skills</strong> </span>
                            {skills.map((skill) => (
                                <div key={skill._id}>
                                    {skill.skill_id.map((s) => (
                                        <span key={s._id} className=" p-1 m-1"
                                            style={{
                                                fontSize: '15px', fontWeight: 'bold', color: "white",
                                                backgroundColor: "green", borderRadius: "55px"
                                            }}

                                        >{s.name}</span>
                                    ))}
                                </div>
                            ))}
                            <p

                                style={{ fontSize: '20px', fontWeight: 'bold' }}
                                className="card-text"><strong>Salary:</strong>

                                {jobs?.salary_mode === "custom" ? <p>${jobs?.custom_salary} /hours </p> :
                                    <p>${jobs?.max_salary} -$ {jobs?.min_salary} / hours  </p>

                                }

                            </p>

                        </div>
                    </div>
                    <div
                        className="col-md-3"
                    >

                        <div className="row mt-auto justify-content-end">
                            <div className="col-md-4 d-flex align-items-end justify-content-end">

                                {jobs?.featured ? (
                                    <button
                                        style={{
                                            padding: '10px 30px',
                                            fontSize: '16px',
                                            color: '#fff',
                                            backgroundColor: 'green',
                                            border: 'none',
                                            borderRadius: '25px',
                                            cursor: 'pointer',
                                            outline: 'none',
                                            transition: 'background-color 0.3s ease',
                                            marginTop: '190px',
                                            marginRight: "50px",

                                        }}

                                        className="featured">Featured</button>
                                ) : (
                                    ""
                                )}
                                {jobs?.highlight ? (
                                    <button
                                        style={{
                                            padding: '10px 30px',
                                            fontSize: '16px',
                                            color: '#fff',
                                            backgroundColor: 'green',
                                            border: 'none',
                                            borderRadius: '25px',
                                            cursor: 'pointer',
                                            outline: 'none',
                                            transition: 'background-color 0.3s ease',
                                            marginTop: '190px',
                                            marginRight: "50px",

                                        }}

                                        className="highlight">Highlight</button>
                                ) : (
                                    ""
                                )}







                            </div>
                        </div>







                    </div>
                </div>
            </div>








        </>



    )


}