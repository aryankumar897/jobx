"use client"
import { MdLocationOn } from 'react-icons/md';
import { FaIndustry } from 'react-icons/fa';
import Image from 'next/image';
import moment from 'moment';
import React, { useRef, useState, useEffect } from 'react';



async function getCandidate(slug) {


    try {

        const response = await fetch(`${process.env.API}/candidat/${slug}`, {

            method: 'GET',
            next: { revalidate: 1 }


        })

        console.log(response)


        if (!response.ok) {
            throw new Error("Failed to fetch company")
        }

        const data = await response.json()

        return data


    } catch (err) {

        console.log(err)

    }



}

export default async function CandidateViewPage({ params }) {

    const sectionRef = useRef(null);

    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };



    const { candidate, candidateskill, candidateLanguage, experience, education } = await getCandidate(params.slug)

 



    return (
        <>

            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '45vh',
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
                    <h6 className="text-white" >Home &gt;  Candidate &gt;  {params.slug}  </h6>
                </div>
            </div>


            {/* <h4>{JSON.stringify({ candidate, candidateskill, candidateLanguage, experience, education }, null, 4)}</h4> */}

            <h5
                className='text-center p-3 m-3'
                style={{
                    color: '#333',            // Dark gray color for text
                    backgroundColor: '#f8f9fa', // Light background color for contrast
                    borderRadius: '8px',       // Rounded corners
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Subtle shadow for depth
                    fontWeight: 'bold',        // Bold text for emphasis
                    textTransform: 'uppercase', // Uppercase text
                    letterSpacing: '0.5px',
                    borderBottom: "2px solid  green",     // Slightly increased letter spacing for readability
                }}
            >
                Candidate Profile
            </h5>

            <div className='my-5' style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>

                {/* Your company logo or image */}
                <div style={{ display: 'block', alignItems: 'center' }}>
                    <img
                        src={candidate?.image?.secure_url}
                        alt="Candidate Logo"
                        style={{
                            width: '130px',
                            height: '130px',
                            marginRight: '10px',
                            objectFit: 'cover', // Ensures the image covers the dimensions without distortion
                            borderRadius: '8px' // Optional: adds rounded corners to the image
                        }}
                    />


                    <span
                        style={{
                            display: 'block',
                            margin: '10px 0',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: '#333', // Dark gray color for better readability
                            textAlign: 'center', // Center aligns the text
                            lineHeight: '1.4' // Adjusts line height for better spacing
                        }}
                    >
                        {candidate.full_name}
                    </span>

                    <span
                        style={{
                            display: 'block',
                            fontSize: '18px',
                            color: '#555', // Slightly lighter gray for secondary text
                            textAlign: 'center', // Center aligns the text
                            lineHeight: '1.4' // Matches line height for consistency
                        }}
                    >
                        {candidate?.title}
                    </span>


                    {/* <span style={{ display: 'block', fontSize: '18px',  }}>  {candidate?.status}      </span> */}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    {/* Contact information */}

                    <span style={{
                        position: 'relative',
                        display: 'inline-block',
                        padding: '15px 30px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#fff',
                        backgroundColor: 'green',
                        borderRadius: '5px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease-in-out',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        border: 'none', // Add this line to remove button border
                    }}
                       // onClick={scrollToSection}
                    >

                        <a
                        className="text-white"
                        
                         href={candidate.cv} download="resume.pdf">open cv</a>

                    </span>

                </div>
            </div>


            <div
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '75%',
                    height: '2px', // Thickness of the line
                    backgroundColor: 'green', // Line color
                    borderRadius: '1px' // Optional: rounded edges
                }}
            />


            <div className="container my-4"
                style={{


                    height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '75%',
                }}

            >


                <div className="row"

                >
                    <div className="col-md-8  p-5 ">





                        <div className="card-body">
                            <h5 className="text-center">Biography</h5>

                            <div
                                dangerouslySetInnerHTML={{
                                    __html: candidate?.bio.replace(/\./g, "<br/><br/>"),
                                }}
                            />
                            <div
                                style={{
                                    marginLeft: 'auto',
                                    marginRight: 'auto',

                                    height: '1px', // Thickness of the line
                                    backgroundColor: 'green', // Line color
                                    borderRadius: '1px' // Optional: rounded edges
                                }}
                            />

                            <h5 className="text-center p-3"> Professionnal skills</h5>
                            <div
                                style={{
                                    marginLeft: 'auto',
                                    marginRight: 'auto',

                                    height: '1px', // Thickness of the line
                                    backgroundColor: 'green', // Line color
                                    borderRadius: '1px' // Optional: rounded edges
                                }}
                            />

                            <h5 className="text-center p-1"> Experience</h5>



                            {experience.map((exp, index) => (
                                <div key={index}>
                                    <div>
                                        <p>{exp.designation} |   {exp.company}    </p>

                                        <p>    {exp.department}</p>


                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: exp?.responsibilities.replace(/\./g, "<br/><br/>"),
                                            }}

                                        />


                                    </div>
                                    <div>
                                        <p>Start Date: {new Date(exp.start).toLocaleDateString()}</p>
                                        {exp.currently_working ? (
                                            <p>Currently working</p>
                                        ) : (
                                            <p>End Date: {new Date(exp.end).toLocaleDateString()}</p>
                                        )}
                                    </div>
                                    <div
                                        style={{
                                            marginLeft: 'auto',
                                            marginRight: 'auto',

                                            height: '1px', // Thickness of the line
                                            backgroundColor: 'green', // Line color
                                            borderRadius: '1px' // Optional: rounded edges
                                        }}
                                    />
                                </div>

                            ))}






                            <h5 className="text-center p-1"> Education</h5>
                            {education.map((edu, index) => (
                                <div key={index}>
                                    <p> {edu.degree}</p>
                                    <p>     {edu.degree}| {edu.level}  </p>
                                    <p> {new Date(edu.year).toLocaleDateString()}</p>


                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: edu.notes.replace(/\./g, "<br/><br/>"),
                                        }}

                                    />
                                    <div
                                        style={{
                                            marginLeft: 'auto',
                                            marginRight: 'auto',

                                            height: '1px', // Thickness of the line
                                            backgroundColor: 'green', // Line color
                                            borderRadius: '1px' // Optional: rounded edges
                                        }}
                                    />
                                </div>
                            ))}

                        </div>




                    </div>

                    <div className="col-md-4  p-5 border-left  ">
                        <div>
                            <div>
                                <h3
                                    style={{
                                        color: '#333',            // Dark gray for the heading
                                        fontSize: '24px',         // Slightly larger font size
                                        fontWeight: 'bold',       // Bold text for emphasis
                                        margin: '20px 0',         // Margin for spacing
                                        // Center-align the heading
                                    }}
                                >
                                    Overview
                                </h3>
                                <h5
                                    style={{
                                        color: '#555',            // Lighter gray for the subheading
                                        fontSize: '20px',         // Font size slightly smaller than <h3>
                                        fontWeight: 'normal',     // Normal weight for subheading
                                        margin: '10px 0',         // Margin for spacing
                                        // Center-align the name
                                    }}
                                >
                                    {candidate.full_name}
                                </h5>
                                <div
                                    style={{
                                        // Horizontally center the content
                                        margin: '10px 0'          // Margin for spacing
                                    }}
                                >
                                    <MdLocationOn
                                        size={25}
                                        style={{
                                            color: 'green',         // Green color for the icon
                                            // Space between the icon and text
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontSize: '18px',       // Font size for the location name
                                            color: '#333'           // Dark gray color for the text
                                        }}
                                    >
                                        {candidate?.country?.name}
                                    </span>
                                </div>
                            </div>




                            <div>




                            </div>

                            <div
                                style={{
                                    paddingTop: '15px',        // Padding at the top
                                    display: 'flex',           // Use flexbox for layout
                                    alignItems: 'center',      // Vertically center the icon and text
                                    marginBottom: '20px'       // Margin at the bottom for spacing
                                }}
                            >
                                <FaIndustry
                                    size={25}
                                    style={{
                                        color: 'green',          // Green color for the icon
                                        marginRight: '10px'      // Space between the icon and text
                                    }}
                                />
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <span
                                        style={{
                                            fontSize: '18px',        // Font size for the label
                                            color: '#333',           // Dark gray color for the text
                                            marginBottom: '5px'      // Space below the label
                                        }}
                                    >
                                        Experience Level
                                    </span>
                                    <p
                                        style={{
                                            fontSize: '16px',        // Font size for the experience level
                                            color: '#555',           // Slightly lighter gray for the text
                                            margin: 0                // Remove default margin for the paragraph
                                        }}
                                    >
                                        {candidate?.experience_lable}
                                    </p>
                                </div>
                            </div>




                            <div
                                style={{
                                    padding: '15px',          // Add padding around the div
                                    display: 'flex',          // Use flexbox for layout
                                    flexDirection: 'column',  // Stack items vertically
                                    alignItems: 'flex-start', // Align items to the start
                                    marginBottom: '20px'      // Margin at the bottom for spacing
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',  // Vertically center the icon and text
                                        marginBottom: '10px'   // Margin below the header
                                    }}
                                >
                                    <FaIndustry
                                        size={25}
                                        style={{
                                            color: 'green',      // Green color for the icon
                                            marginRight: '10px'  // Space between the icon and text
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontSize: '18px',    // Font size for the skills label
                                            color: '#333'        // Dark gray color for the text
                                        }}
                                    >
                                        Skills
                                    </span>
                                </div>
                                {candidateskill && candidateskill.map(skillData => (
                                    <div key={skillData._id} style={{ marginBottom: '10px' }}>
                                        {skillData.skill_id.map(skill => (
                                            <span
                                                key={skill._id}
                                                style={{
                                                    marginLeft: '10px',   // Margin between badges
                                                    backgroundColor: '#007bff', // Bootstrap primary color
                                                    color: 'white',       // White text color
                                                    padding: '5px 10px',  // Padding inside the badge
                                                    borderRadius: '12px'  // Rounded corners for badges
                                                }}
                                                className="badge"
                                            >
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            <div
                                style={{
                                    padding: '15px',          // Padding around the div
                                    display: 'flex',          // Use flexbox for layout
                                    flexDirection: 'column',  // Stack items vertically
                                    alignItems: 'flex-start', // Align items to the start
                                    marginBottom: '20px'      // Margin at the bottom for spacing
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',  // Vertically center the icon and text
                                        marginBottom: '10px'   // Margin below the header
                                    }}
                                >
                                    <FaIndustry
                                        size={25}
                                        style={{
                                            color: 'green',      // Green color for the icon
                                            marginRight: '10px'  // Space between the icon and text
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontSize: '18px',    // Font size for the language label
                                            color: '#333'        // Dark gray color for the text
                                        }}
                                    >
                                        Language
                                    </span>
                                </div>
                                {candidateLanguage && candidateLanguage.map(skillData => (
                                    <div key={skillData._id} style={{ marginBottom: '10px' }}>
                                        {skillData.lang_id.map(skill => (
                                            <span
                                                key={skill._id}
                                                style={{
                                                    marginLeft: '10px',   // Margin between badges
                                                    backgroundColor: '#007bff', // Badge background color (Bootstrap primary color)
                                                    color: 'white',       // White text color
                                                    padding: '5px 10px',  // Padding inside each badge
                                                    borderRadius: '12px'  // Rounded corners for badges
                                                }}
                                                className="badge"
                                            >
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            <div
                                style={{
                                    padding: '15px',          // Padding around the div
                                    display: 'flex',          // Use flexbox for layout
                                    flexDirection: 'column',  // Stack items vertically
                                    alignItems: 'flex-start', // Align items to the start
                                    marginBottom: '20px'      // Margin at the bottom for spacing
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',  // Vertically center the icon and text
                                        marginBottom: '10px'   // Margin below the header
                                    }}
                                >
                                    <FaIndustry
                                        size={25}
                                        style={{
                                            color: 'green',      // Green color for the icon
                                            marginRight: '10px'  // Space between the icon and text
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontSize: '18px',    // Font size for the profession label
                                            color: '#333'        // Dark gray color for the text
                                        }}
                                    >
                                        Profession
                                    </span>
                                </div>
                                {candidate && candidate.profession_id.map((profession, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            marginLeft: '10px',   // Margin between badges
                                            backgroundColor: '#007bff', // Badge background color (Bootstrap primary color)
                                            color: 'white',       // White text color
                                            padding: '5px 10px',  // Padding inside each badge
                                            borderRadius: '12px'  // Rounded corners for badges
                                        }}
                                        className="badge"
                                    >
                                        {profession.name}
                                    </span>
                                ))}
                            </div>


                            <div
                                style={{
                                    padding: '15px',          // Padding around the div
                                    display: 'flex',          // Use flexbox for layout
                                    flexDirection: 'column',  // Stack items vertically
                                    alignItems: 'flex-start', // Align items to the start
                                    marginBottom: '20px'      // Margin at the bottom for spacing
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',  // Vertically center the icon and text
                                        marginBottom: '10px'   // Margin below the header
                                    }}
                                >
                                    <FaIndustry
                                        size={25}
                                        style={{
                                            color: 'green',      // Green color for the icon
                                            marginRight: '10px'  // Space between the icon and text
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontSize: '18px',    // Font size for the DOB label
                                            color: '#333'        // Dark gray color for the text
                                        }}
                                    >
                                        DOB
                                    </span>
                                </div>
                                <p
                                    style={{
                                        marginLeft: '30px',   // Margin to the left of the date text
                                        fontSize: '16px',     // Font size for the date text
                                        color: '#555',        // Slightly lighter gray color for the text
                                        margin: 0             // Remove default margin for the paragraph
                                    }}
                                >
                                    {moment(candidate?.birth_date).format('YYYY MMMM')}
                                </p>
                            </div>

                            <div
                                style={{
                                    paddingTop: '15px',    // Padding on top of the div
                                    display: 'flex',       // Use flexbox for layout
                                    flexDirection: 'column', // Stack items vertically
                                    alignItems: 'flex-start', // Align items to the start
                                    marginBottom: '20px'   // Margin at the bottom for spacing
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',  // Vertically center the icon and text
                                        marginBottom: '10px'   // Margin below the header
                                    }}
                                >
                                    <FaIndustry
                                        size={25}
                                        style={{
                                            color: 'green',      // Green color for the icon
                                            marginRight: '10px'  // Space between the icon and text
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontSize: '18px',    // Font size for the Gender label
                                            color: '#333'        // Dark gray color for the text
                                        }}
                                    >
                                        Gender
                                    </span>
                                </div>
                                <p
                                    style={{
                                        marginLeft: '30px',   // Margin to the left of the gender text
                                        fontSize: '16px',     // Font size for the gender text
                                        color: '#555',        // Slightly lighter gray color for the text
                                        margin: 0             // Remove default margin for the paragraph
                                    }}
                                >
                                    {candidate?.gender}
                                </p>
                            </div>
                            <div
                                style={{
                                    padding: '15px',         // Add padding around the div
                                    display: 'flex',         // Use flexbox for layout
                                    flexDirection: 'column', // Stack items vertically
                                    alignItems: 'flex-start',// Align items to the start
                                    marginBottom: '20px'     // Margin at the bottom for spacing
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',  // Vertically center the icon and text
                                        marginBottom: '10px'   // Margin below the header
                                    }}
                                >
                                    <FaIndustry
                                        size={25}
                                        style={{
                                            color: 'green',      // Green color for the icon
                                            marginRight: '10px'  // Space between the icon and text
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontSize: '18px',    // Font size for the marital status label
                                            color: '#333'        // Dark gray color for the text
                                        }}
                                    >
                                        Marital Status
                                    </span>
                                </div>
                                <p
                                    style={{
                                        marginLeft: '30px',   // Margin to the left of the status text
                                        fontSize: '16px',     // Font size for the status text
                                        color: '#555',        // Slightly lighter gray color for the text
                                        margin: 0             // Remove default margin for the paragraph
                                    }}
                                >
                                    {candidate?.marital_status}
                                </p>
                            </div>
                            <hr />


                            <div
                                ref={sectionRef}
                                style={{
                                    padding: '15px',         // Padding around the div
                                    display: 'flex',         // Use flexbox for layout
                                    flexDirection: 'column', // Stack items vertically
                                    alignItems: 'flex-start',// Align items to the start
                                    marginBottom: '20px'     // Margin at the bottom for spacing
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: '18px',      // Font size for the address label
                                        fontWeight: 'bold',    // Bold font for the address label
                                        color: '#333'          // Dark gray color for the text
                                    }}
                                >
                                    Address
                                </span>
                                <p
                                    style={{
                                        marginLeft: '30px',   // Margin to the left of the address text
                                        fontSize: '16px',     // Font size for the address text
                                        color: '#555',        // Slightly lighter gray color for the text
                                        margin: 0             // Remove default margin for the paragraph
                                    }}
                                >
                                    {candidate.address}, {candidate?.state?.statename}, {candidate?.country.name}
                                </p>
                                <p
                                    style={{
                                        marginLeft: '30px',   // Margin to the left of the phone text
                                        fontSize: '16px',     // Font size for the phone text
                                        color: '#555',        // Slightly lighter gray color for the text
                                        margin: 0             // Remove default margin for the paragraph
                                    }}
                                >
                                    Phone: {candidate.phone_one}, {candidate.phone_two}
                                </p>
                                <p
                                    style={{
                                        marginLeft: '30px',   // Margin to the left of the email text
                                        fontSize: '16px',     // Font size for the email text
                                        color: '#555',        // Slightly lighter gray color for the text
                                        margin: 0             // Remove default margin for the paragraph
                                    }}
                                >
                                    Email: {candidate.email}
                                </p>
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
                                        backgroundColor: 'green',
                                        borderRadius: '5px',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease-in-out',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                        border: 'none', // Add this line to remove button border
                                    }}

                                >
                                    Send message
                                </button>

                            </div>






                        </div>


                    </div>



                </div>





            </div>





        </>
    );
}