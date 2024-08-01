// TopRecruiters.js
"use client"

// TopRecruiters.js

import React from 'react';
import Image from 'next/image';
// recruitersData.js

const recruitersData = [
    {
        id: 1,
        image: 'recruiter1.jpg',
        title: 'ABC Corporation',
        rating: 4.5,
        numRatings: 120,
        location: 'New York',
        jobAvailability: 30,
    },
    {
        id: 2,
        image: 'recruiter2.jpg',
        title: 'XYZ Solutions',
        rating: 4.2,
        numRatings: 80,
        location: 'Los Angeles',
        jobAvailability: 25,
    }, {
        id: 2,
        image: 'recruiter2.jpg',
        title: 'XYZ Solutions',
        rating: 4.2,
        numRatings: 80,
        location: 'Los Angeles',
        jobAvailability: 25,
    }, {
        id: 2,
        image: 'recruiter2.jpg',
        title: 'XYZ Solutions',
        rating: 4.2,
        numRatings: 80,
        location: 'Los Angeles',
        jobAvailability: 25,
    }, {
        id: 2,
        image: 'recruiter2.jpg',
        title: 'XYZ Solutions',
        rating: 4.2,
        numRatings: 80,
        location: 'Los Angeles',
        jobAvailability: 25,
    }, {
        id: 2,
        image: 'recruiter2.jpg',
        title: 'XYZ Solutions',
        rating: 4.2,
        numRatings: 80,
        location: 'Los Angeles',
        jobAvailability: 25,
    }, {
        id: 2,
        image: 'recruiter2.jpg',
        title: 'XYZ Solutions',
        rating: 4.2,
        numRatings: 80,
        location: 'Los Angeles',
        jobAvailability: 25,
    },
    {
        id: 2,
        image: 'recruiter2.jpg',
        title: 'XYZ Solutions',
        rating: 4.2,
        numRatings: 80,
        location: 'Los Angeles',
        jobAvailability: 25,
    },
    {
        id: 2,
        image: 'recruiter2.jpg',
        title: 'XYZ Solutions',
        rating: 4.2,
        numRatings: 80,
        location: 'Los Angeles',
        jobAvailability: 25,
    },
    // Add more dummy data as needed
];





export default function TopRecruiters() {
    return (

        <>    <h2 className="text-center p-4 m-3"  
        
            style={{
                textAlign: 'center',
                color: 'black',
                fontSize: '24px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                padding: '1px'
            }}
        >Top Recruiters</h2>
            <div className="topRecruiters">

                {recruitersData.map((recruiter) => (
                    <div key={recruiter.id} className="recruiter ">
                        <div className="image">
                            <Image
                                src="/image/dee.jpg"
                                alt="title"
                                width={100}
                                height={100}
                                layout='fixed'
                                className='x'
                            />
                        </div>
                        <div className="details">
                            <h3 style={{
                                textAlign: 'center',
                                color: 'black',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                                padding: '1px'
                            }}>{recruiter.title}</h3>
                            <div className="rating">
                                <span className="starIcon">★</span>
                                <span className="starIcon">★</span>
                                <span className="starIcon">★</span>
                                <span className="starIcon">★</span>
                                <span className="starIcon">★</span>
                                <span>{recruiter.rating}</span>
                                <span style={{
                                    textAlign: 'center',
                                    color: 'black',
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                                    padding: '1px'
                                }}>({recruiter.numRatings})</span>
                            </div>
                            <div className="location">
                                <span className="locationIcon">📍</span>
                                <span style={{
                                    textAlign: 'center',
                                    color: 'black',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                                    padding: '1px'
                                }}   >{recruiter.location}</span>
                            </div>
                            <div className="jobAvailability">
                                <span 
                                
                                    style={{
                                        textAlign: 'center',
                                        color: 'black',
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        letterSpacing: '1px',
                                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                                        padding: '1px'
                                    }}
                                
                                  >{recruiter.jobAvailability} jobs available</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};


