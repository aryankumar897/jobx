"use client"
import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FaMapMarker, FaStar } from 'react-icons/fa';
import Link from 'next/link';


export default function CandidateCard({ candidat, searchParams }) {

    













    return (
        <Container className="py-4">
            <div className="row">

                <div key={candidat._id} className="col-12  mb-4   box  ">
                    <Link href={`/candidate/${candidat.slug}`}
                        style={{ textDecoration: 'none' }}

                    >

                        <Card className="mb-4">
                            <div className="d-flex justify-content-center align-items-center mt-3">
                                <img
                                    c
                                    src={candidat.image.secure_url}
                                    alt={candidat.name}
                                    style={{ width: '100px', borderRadius: '50%' }}
                                />
                            </div>
                            <Card.Body>
                                <Card.Title
                                    style={{ fontSize: '18px', fontWeight: 'bold', }}
                                    className="text-center">{candidat.full_name}</Card.Title>
                                <Card.Title
                                    style={{ fontSize: '20px', fontWeight: 'bold', }}
                                    className="text-center">{candidat.title}</Card.Title>


                                <Card.Title style={{ textAlign: 'center' }}>
                                    {candidat.status}
                                </Card.Title>
                                <div className="d-flex justify-content-center mb-3">

                                    <div>
                                        <div className="m-1 p-1">

                                            {data && data.map(skillData => (
                                                <div key={skillData._id}>
                                                    {skillData.skill_id.map(skill => (
                                                        <span key={skill._id}
                                                            className="badge badge-primary m-1"



                                                        >{skill.name}</span>
                                                    ))}
                                                </div>
                                            ))}


                                        </div>
                                    </div>



                                </div>

                                <Row className="mb-3">
                                    <Col
                                        style={{ fontSize: '15px', fontWeight: 'bold', }}
                                        className="text-center">
                                        <FaMapMarker
                                            size={25}
                                            style={{
                                                color: 'green',      // Green color for the icon
                                                marginRight: '10px'  // Space between the icon and text
                                            }}

                                        /> {candidat.address}, {candidat?.state?.statename}, {candidat?.country.name}
                                    </Col>
                                </Row>
                                <Row>
                                    <span
                                        style={{
                                            backgroundColor: 'green', // Green background color
                                            color: 'white',           // White text color
                                            padding: '5px 10px',      // Padding around the text
                                            borderRadius: '5px',      // Rounded corners
                                            fontSize: '16px',         // Font size
                                            fontWeight: 'bold',       // Bold text
                                            display: 'inline-block',  // Ensure the span has block-like behavior
                                            textAlign: 'center',      // Center align text within the span
                                            cursor: 'pointer'         // Change cursor to pointer on hover
                                        }}
                                    >
                                        View
                                    </span>


                                </Row>
                            </Card.Body>
                        </Card>

                    </Link>
                </div>

            </div>
        </Container>
    )
}