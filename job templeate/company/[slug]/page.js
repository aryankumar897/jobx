"use client";
import { useRef } from 'react';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { FaIndustry, FaPhone, FaAddressCard } from 'react-icons/fa';
import { CgOrganisation } from "react-icons/cg";
import { RiTeamLine } from "react-icons/ri";
import moment from 'moment';

const dummyCompany = {
    name: "Dummy Company",
    banner: { secure_url: "/path/to/dummy/banner.jpg" },
    logo: { secure_url: "/path/to/dummy/logo.jpg" },
    country: { name: "Dummy Country" },
    bio: "Dummy company bio. This is a placeholder text for the company's biography.",
    vision: "Dummy company vision. This is a placeholder text for the company's vision.",
    map_link: "https://www.google.com/maps",
    industry_type_id: { name: "Dummy Industry" },
    organization_type_id: { name: "Dummy Organization Type" },
    establishmentDate: "2022-01-01",
    team_type_id: { name: "10-50" },
    address: "123 Dummy Street",
    state: { statename: "Dummy State" },
    phone: "123-456-7890",
    email: "dummy@company.com"
};

const dummyData = [
    { id: 1, jobTitle: "Dummy Job 1", description: "Job description 1" },
    { id: 2, jobTitle: "Dummy Job 2", description: "Job description 2" }
];

export default function CompanyViewPage() {
    const sectionRef = useRef(null);

    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '50vh',
                    backgroundImage: 'url("/image/dee.jpg")',
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
                    <h6 className="text-white">Home &gt; Company &gt; Dummy Company</h6>
                </div>
            </div>

            <div style={{ margin: '50px' }}>
                <img
                    src={dummyCompany.banner.secure_url}
                    alt="Banner Image"
                    style={{ height: '40vh', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '80%', objectFit: 'cover' }}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                <div style={{ display: 'block', alignItems: 'center' }}>
                    <img
                        src={dummyCompany.logo.secure_url}
                        alt="Company Logo"
                        style={{
                            width: '130px',
                            height: '130px',
                            marginRight: '10px',
                            objectFit: 'cover',
                            borderRadius: '8px'
                        }}
                    />
                    <span
                        style={{
                            display: 'block',
                            margin: '10px 0',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: '#333',
                            textAlign: 'center',
                            lineHeight: '1.4'
                        }}
                    >
                        {dummyCompany.name}
                    </span>
                    <span
                        style={{
                            display: 'block',
                            fontSize: '18px',
                            color: '#555',
                            textAlign: 'center',
                            lineHeight: '1.4'
                        }}
                    >
                        {dummyCompany.country.name}
                    </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <span
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
                            border: 'none',
                        }}
                        onClick={scrollToSection}
                    >
                        Open Position
                    </span>
                </div>
            </div>

            <div
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '75%',
                    height: '2px',
                    backgroundColor: 'green',
                    borderRadius: '1px'
                }}
            />

            <div className="container my-4" style={{ height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                <div className="row">
                    <div className="col-md-8 p-5">
                        <div className="card-body">
                            <h5 className="text-center">About Us</h5>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: dummyCompany.bio.replace(/\./g, "<br/><br/>"),
                                }}
                            />
                            <div
                                style={{
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    width: '100%',
                                    marginTop: "3px",
                                    height: '1px',
                                    backgroundColor: 'green',
                                    borderRadius: '1px'
                                }}
                            />
                            <h5 className="text-center">Company Vision</h5>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: dummyCompany.vision.replace(/\./g, "<br/><br/>"),
                                }}
                            />
                            <div
                                style={{
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    width: '100%',
                                    marginTop: "3px",
                                    height: '1px',
                                    backgroundColor: 'green',
                                    borderRadius: '1px'
                                }}
                            />
                            {dummyData.length > 0 ? (
                                dummyData.map((ca, i) => (
                                    <div key={i} className="card mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">{ca.jobTitle}</h5>
                                            <p className="card-text">{ca.description}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div style={{ textAlign: 'center', marginTop: '50px' }}>No data found</div>
                            )}
                        </div>
                    </div>

                    <div className="col-md-4 p-5 border-left">
                        <div>
                            <h5 style={{ color: '#333', fontSize: '24px', fontWeight: 'bold', margin: '10px 0' }}>{dummyCompany.name}</h5>
                            <div>
                                <MdLocationOn size={25} style={{ color: 'green' }} />
                                <span style={{ fontSize: '18px', color: '#333' }}>{dummyCompany.country.name}</span>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#f0f0f0',
                                    padding: '20px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '10px',
                                }}
                            >
                                <iframe
                                    src={dummyCompany.map_link}
                                    style={{ width: "700px", height: "500px", border: '0' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div className="pt-3" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                                <FaIndustry size={25} style={{ marginRight: '10px', color: 'green' }} />
                                <div>
                                    <span style={{ fontWeight: 'bold', color: '#343a40' }}>Industry Type</span>
                                    <p style={{ marginLeft: '30px', color: '#6c757d' }}>{dummyCompany.industry_type_id.name}</p>
                                </div>
                            </div>
                            <div className="pt-3" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                                <CgOrganisation size={25} style={{ marginRight: '10px', color: 'green' }} />
                                <div>
                                    <span style={{ fontWeight: 'bold', color: '#343a40' }}>Organization Type</span>
                                    <p style={{ marginLeft: '30px', color: '#6c757d' }}>{dummyCompany.organization_type_id.name}</p>
                                </div>
                            </div>
                            <div className="pt-3" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                                <FaAddressCard size={25} style={{ marginRight: '10px', color: 'green' }} />
                                <div>
                                    <span style={{ fontWeight: 'bold', color: '#343a40' }}>Establishment Date</span>
                                    <p style={{ marginLeft: '30px', color: '#6c757d' }}>{moment(dummyCompany.establishmentDate).format("MMMM D, YYYY")}</p>
                                </div>
                            </div>
                            <div className="pt-3" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                                <RiTeamLine size={25} style={{ marginRight: '10px', color: 'green' }} />
                                <div>
                                    <span style={{ fontWeight: 'bold', color: '#343a40' }}>Company Size</span>
                                    <p style={{ marginLeft: '30px', color: '#6c757d' }}>{dummyCompany.team_type_id.name} employees</p>
                                </div>
                            </div>
                            <div className="pt-3" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                                <FaAddressCard size={25} style={{ marginRight: '10px', color: 'green' }} />
                                <div>
                                    <span style={{ fontWeight: 'bold', color: '#343a40' }}>Address</span>
                                    <p style={{ marginLeft: '30px', color: '#6c757d' }}>{dummyCompany.address}, {dummyCompany.state.statename}</p>
                                </div>
                            </div>
                            <div className="pt-3" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                                <FaPhone size={25} style={{ marginRight: '10px', color: 'green' }} />
                                <div>
                                    <span style={{ fontWeight: 'bold', color: '#343a40' }}>Phone</span>
                                    <p style={{ marginLeft: '30px', color: '#6c757d' }}>{dummyCompany.phone}</p>
                                </div>
                            </div>
                            <div className="pt-3" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                                <MdEmail size={25} style={{ marginRight: '10px', color: 'green' }} />
                                <div>
                                    <span style={{ fontWeight: 'bold', color: '#343a40' }}>Email</span>
                                    <p style={{ marginLeft: '30px', color: '#6c757d' }}>{dummyCompany.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
