"use client"
import Image from "next/image";
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FaMapMarker, FaStar } from 'react-icons/fa';
import Link from 'next/link';

export default function CompanyCard({ company }) {

    return (
        <>

            <Container className="py-4">
                <div className="row">
                 
                            <div key={company._id} className="col-12   mb-2">
                                <Link href={`/company/${company?.slug}`}

                                    style={{ textDecoration: 'none' }}
                                >

                                    <Card className="mb-4">
                                        <div className="d-flex justify-content-center align-items-center mt-3">

                                            <img
                                                src={company?.logo?.secure_url} // Accessing logo from the company data
                                                alt={company.name}
                                                style={{ width: '100px', borderRadius: '50%' }}
                                            />



                                        </div>
                                        <Card.Body>
                                            <Card.Title

                                                style={{ fontSize: '20px', fontWeight: 'bold' }}
                                                className="text-center">{company.name}</Card.Title>
                                            <div className="d-flex justify-content-center mb-3">

                                            </div>
                                            <Row className="mb-3">
                                                <Col
                                                    style={{ fontSize: '18px', fontWeight: 'bold' }}

                                                    className="text-center">
                                                    <FaMapMarker

                                                        size="25"
                                                        style={{ color: "green" }}

                                                    /> {company?.country?.name} ,<br />

                                                    {company?.state?.statename}
                                                    ,{company?.city?.name}
                                                </Col>
                                            </Row>
                                            <Row>
                                                {/* <Col
                                                    style={{ fontSize: '15px', fontWeight: 'bold' }}

                                                    xs={12} className="mb-3 text-center">
                                                    12 Job Available
                                                </Col> */}
                                            </Row>
                                        </Card.Body>
                                    </Card>

                                </Link>
                            </div>

                      
                </div>
            </Container>


        </>



    )


}