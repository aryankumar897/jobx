"use client"
import { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import toast from 'react-hot-toast';
import { Skeleton } from 'antd';
import { useSession, signOut } from "next-auth/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import { MdDateRange } from "react-icons/md";
import { ShareSocial } from 'react-share-social'
import { IoFileTrayFullSharp } from "react-icons/io5";
import { TbCategoryPlus } from "react-icons/tb";
import { GrUserExpert } from "react-icons/gr";
import dynamic from 'next/dynamic'
import { MdMoreTime } from "react-icons/md";
import Link from 'next/link';
import { FaAddressCard } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { LiaCriticalRole } from "react-icons/lia";
import { MdWork } from 'react-icons/md';

import { FaGraduationCap } from 'react-icons/fa';

export default function job({ searchParams }) {

  

    const iconStyle = { color: 'green', fontSize: '24px', marginRight: '5px' };


 

    if (loading) {
        return (
            <div className="text-center  my-5 p-5">  <Skeleton active /></div>
        )
    }


    return (
        <>
            {/* {JSON.stringify({ already }, null, 4)}<hr/>  */}
            {/* {JSON.stringify({ skills }, null, 4)}<hr />
            {JSON.stringify({ benfit }, null, 4)}<hr />  */}

            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '30vh',
                    backgroundImage: 'url("/image/dee.jpg")', // Replace 'background.jpg' with your image file name
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        color: 'white',
                    }}
                >
                    <h6 className="text-white" >Home &gt; Job</h6>
                </div>
            </div>
      

            <h6>

                {/* {JSON.stringify({job},null,4)} */}

            </h6>


            <div
                style={{ margin: '50px' }}

            >
                <img
                    src={job?.company_id?.banner?.secure_url}
                    alt="Banner Image"
                    style={{ height: '40vh', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '80%', objectFit: 'cover' }}
                />

                <h4
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '20px', // Adjust this value as needed
                        marginBottom: '20px', // Adjust this value as needed
                        padding: '10px', // Adjust this value as needed
                        width: '80%'
                    }}
                >
                    {job?.title}
                </h4>

            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>


                <div style={{ display: 'block', alignItems: 'center' }}>

                    <p
                        style={{ display: 'block', margin: '1px', fontSize: '18px', fontWeight: 'bold' }}
                        className="card-text"
                    >
                        <IoFileTrayFullSharp style={{ color: 'green', marginRight: '5px', fontSize: '24px' }} />
                        : {job?.job_type_id?.name}
                    </p>
                    <p
                        style={{ display: 'block', margin: '1px', fontSize: '18px', fontWeight: 'bold' }}
                        className="card-text"
                    >
                        <GrUserExpert style={{ color: 'green', marginRight: '5px', fontSize: '24px' }} />
                        : {job?.jobexperienceid?.name}
                    </p>
                    <p
                        style={{ display: 'block', margin: '1px', fontSize: '18px', fontWeight: 'bold' }}
                        suppressHydrationWarning
                        className="card-text"
                    >
                        <MdMoreTime style={{ color: 'green', marginRight: '5px', fontSize: '24px' }} />
                        : {moment(job?.createdAt).format('MMMM YYYY, h:mm:ss a')}
                    </p>

                  
               
               
               
               
                </div>
              
              
              
              
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>


                    {!already ?


                        <span style={{
                            position: 'relative',
                            display: 'inline-block',
                            padding: '15px 30px',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: '#fff',
                            backgroundColor: '#007bff',
                            borderRadius: '5px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease-in-out',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                            border: 'none',
                        }}
                            onClick={() => handlejob()}
                        >


                            {data ? "Apply" : "login to apply"}


                        </span>

                        :

                        <span style={{
                            position: 'relative',
                            display: 'inline-block',
                            padding: '15px 30px',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: '#fff',
                            backgroundColor: '#8BB3B4',
                            borderRadius: '5px',
                            overflow: 'hidden',

                            transition: 'background-color 0.3s ease-in-out',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                            border: 'none',
                        }}
                        // onClick={() => handlejob()}
                        >Appllied</span>


                    }






                </div>
           
           
           
            </div>

            <hr style={{ marginLeft: 'auto', marginRight: 'auto', width: '75%' }} />









            <hr style={{ marginLeft: 'auto', marginRight: 'auto', width: '75%' }} />



            <div className="container my-4"
                style={{


                    height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '75%',
                }}

            >


                <div className="row"

                >
                    <div className="col-md-8  p-5 ">





                        <div className="card-body   ">
                            <h5
                                className="text-center border"
                                style={{
                                    backgroundColor: '#f8f9fa',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    fontFamily: 'Arial, sans-serif',
                                    color: '#333',
                                    margin: '20px 0'
                                }}
                            >
                                Employment Information
                            </h5>



                            <div className="container border ">
                                <div className="row">
                                    <div className="col-md-6">
                                        <span>
                                            <TbCategoryPlus style={iconStyle} /> Category:
                                        </span>
                                        <span style={{ fontSize: '16px', fontWeight: 'bold', margin: '10px', padding: '7px' }}>
                                            {job?.job_category_id?.name}
                                        </span>
                                        <br />
                                        <span>
                                            <FaMoneyBillWave style={iconStyle} /> Salary:
                                        </span>
                                        <span>
                                            {job?.salary_mode === 'custom' ? (
                                                <span style={{ fontSize: '16px', fontWeight: 'bold', margin: '10px', padding: '7px' }}>
                                                    ${job?.custom_salary}
                                                </span>
                                            ) : (
                                                <span style={{ fontSize: '16px', fontWeight: 'bold', margin: '10px', padding: '7px' }}>
                                                    ${job?.max_salary} - {job?.min_salary}
                                                </span>
                                            )}
                                        </span>
                                        <br />
                                        <span>
                                            <MdWork style={iconStyle} /> Job Type:
                                        </span>
                                        <span style={{ fontSize: '16px', fontWeight: 'bold', margin: '10px', padding: '7px' }}>
                                            {job?.job_type_id?.name}
                                        </span>
                                        <br />
                                        <span>
                                            <FaGraduationCap style={iconStyle} /> Education:
                                        </span>
                                        <span style={{ fontSize: '16px', fontWeight: 'bold', margin: '10px', padding: '7px' }}>
                                            {job?.educationid?.name}
                                        </span>
                                        <br />
                                    </div>
                                    <div className="col-md-6">
                                        <span>
                                            <LiaCriticalRole style={iconStyle} /> Job role:
                                        </span>
                                        <span style={{ fontSize: '16px', fontWeight: 'bold', margin: '10px', padding: '7px' }}>
                                            {job?.job_role_id?.name}
                                        </span>
                                        <br />
                                        <span>
                                            <MdDateRange style={iconStyle} /> Experience:
                                        </span>
                                        <span style={{ fontSize: '16px', fontWeight: 'bold', margin: '10px', padding: '7px' }}>
                                            {job?.jobexperienceid?.name}
                                        </span>
                                        <br />
                                        <span>
                                            <MdDateRange style={iconStyle} /> Deadline:
                                        </span>
                                        <span
                                            style={{ fontSize: '16px', fontWeight: 'bold', margin: '10px', padding: '7px' }}
                                            suppressHydrationWarning
                                        >
                                            {moment(job?.deadline).format('DD')}
                                            {moment(job?.deadline).format('MMMM YYYY')}
                                        </span>
                                        <br />
                                        <span>
                                            <FaAddressCard style={iconStyle} /> Location:
                                        </span>
                                        <span style={{ fontSize: '16px', fontWeight: 'bold', margin: '10px', padding: '7px' }}>
                                            {job?.address}, {job?.city?.name}, {job?.state?.name}
                                            {job?.country?.name}
                                        </span>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div
                                style={{
                                    backgroundColor: '#f0f0f0',
                                    padding: '15px',
                                    borderRadius: '10px',
                                    fontFamily: 'Arial, sans-serif',
                                    color: '#333',
                                    lineHeight: '1.6',
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: job?.description?.replace(/\./g, "<br/><br/>"),
                                }}
                            />
                            <p style={{ fontWeight: 'bold', color: '#555' }}>
                                {job?.company_id?.name}
                            </p>


                            <hr></hr>

                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        {/* <button
                                            style={{
                                                position: 'relative',
                                                display: 'inline-block',
                                                padding: '15px 30px',
                                                fontSize: '18px',
                                                fontWeight: 'bold',
                                                color: '#fff',
                                                backgroundColor: '#007bff',
                                                borderRadius: '5px',
                                                overflow: 'hidden',
                                                cursor: 'pointer',
                                                transition: 'background-color 0.3s ease-in-out',
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                                border: 'none',
                                            }}

                                        >
                                            Apply
                                        </button> */}





                                        <button
                                            style={{
                                                marginLeft: "12px",
                                                position: 'relative',
                                                display: 'inline-block',
                                                padding: '15px 30px',
                                                fontSize: '18px',
                                                fontWeight: 'bold',
                                                color: '#fff',
                                                backgroundColor: '#007bff',
                                                borderRadius: '5px',
                                                overflow: 'hidden',
                                                cursor: 'pointer',
                                                transition: 'background-color 0.3s ease-in-out',
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                                border: 'none',
                                            }}

                                        >
                                            save jobs
                                        </button>
                                    </div>
                                    <div className="col-md-6">
                                        <div style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>
                                            <ShareSocial
                                                onSocialButtonClicked={data => console.log(data)}
                                                url={url}
                                                socialTypes={['facebook', 'twitter', 'reddit', 'linkedin']}
                                            />
                                        </div>
                                    </div>


                                </div>
                            </div>


                            {/* <h5 className="text-center">Comany vision</h5> */}
                            {/* <div
                                dangerouslySetInnerHTML={{
                                    __html: company?.vision.replace(/\./g, "<br/><br/>"),
                                }}
                            /> */}

                        </div>




                    </div>

                    <div className="col-md-4  p-5 border-left  ">
                        <div>



                            <img
                                src={job?.company_id?.logo?.secure_url}
                                alt="Banner Image"
                                style={{
                                    borderRadius: "20px",

                                    height: '10vh', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '40%', objectFit: 'cover'


                                }}
                            />








                            <h5 style={{


                                height: '10vh', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '40%', objectFit: 'cover'


                            }}       >{job?.company_id?.name}</h5>
                            <Link href={`/company/${job?.company_id?.slug}`}>
                                {
                                    count

                                }  job available  </Link>

                            {/* <div>

                                <MdLocationOn size={25} />  <span>{company?.country?.name}</span>

                            </div> */}



                            <div

                                style={{ width: "800", height: "1000", border: ' 0' }}
                            >

                                <iframe
                                    src={job?.company_id?.map_link || ""}




                                    allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>



                            </div>

                          
                            <hr />
                            <div ref={sectionRef}   >
                                <div>
                                    <div style={{ marginBottom: '10px' }}>
                                        <span>
                                            <FaMapMarkerAlt style={iconStyle} /> Address:
                                        </span>
                                        <p style={{ marginLeft: '30px', display: 'inline' }}>
                                            {job?.address}, {job?.state?.statename}, {job?.country?.name}
                                        </p>
                                    </div>
                                    <div style={{ marginBottom: '10px' }}>
                                        <span>
                                            <FaPhoneAlt style={iconStyle} /> Phone:
                                        </span>
                                        <p style={{ marginLeft: '30px', display: 'inline' }}>
                                            {job?.company_id?.phone}
                                        </p>
                                    </div>
                                    <div style={{ marginBottom: '10px' }}>
                                        <span>
                                            <FaEnvelope style={iconStyle} /> Email:
                                        </span>
                                        <p style={{ marginLeft: '30px', display: 'inline' }}>
                                            {job?.company_id?.email}
                                        </p>
                                    </div>
                                </div>

                            </div>



                            <div>


                                <button
                                    style={{
                                        position: 'relative',
                                        display: 'inline-block',
                                        padding: '15px 30px',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        color: '#fff',
                                        backgroundColor: '#007bff',
                                        borderRadius: '5px',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease-in-out',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                        border: 'none',
                                    }}

                                >
                                    Send message
                                </button>

                            </div>






                        </div>

                        <hr></hr>
                        <div  >

                            <p className="border">skills</p>

                            {skills.map((skillItem) => (
                                <div key={skillItem._id}>
                                    {skillItem?.skill_id.map((skillIdItem) => (
                                        <div key={skillIdItem._id} style={{ display: 'inline-block', background: '#007bff', color: '#fff', padding: '5px 10px', borderRadius: '5px', marginRight: '5px', marginBottom: '5px' }}>
                                            <p style={{ margin: '0' }}>{skillIdItem.name}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <hr></hr>
                        <div  >

                            <p className="border">tag</p>
                            {tag?.map((tagItem) => (
                                <div key={tagItem._id}>
                                    {tagItem?.tag_id.map((tagIdItem) => (
                                        <div
                                            style={{ display: 'inline-block', background: '#007bff', color: '#fff', padding: '5px 10px', borderRadius: '5px', marginRight: '5px', marginBottom: '5px' }}
                                            key={tagIdItem._id}>
                                            <p
                                                style={{ margin: '0' }}

                                            >{tagIdItem.name}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}

                        </div>
                        <hr></hr>
                        <div  >

                            <p className="border">benfit</p>
                            {benfit?.map((benfitItem) => (
                                <div


                                    key={benfitItem._id}>
                                    {benfitItem?.benfits_id?.name.map((nameItem, index) => (
                                        <p
                                            style={{ background: '#007bff', color: '#fff', padding: '5px 10px', borderRadius: '5px', display: 'inline-block', marginRight: '5px', marginBottom: '5px' }}
                                            key={index}>{nameItem}</p>
                                    ))}
                                </div>
                            ))}

                        </div>

                    </div>



                </div>





            </div>


        </>
    )

}


