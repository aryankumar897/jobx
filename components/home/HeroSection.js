// HeroSection.js
"use client"
import Image from 'next/image';
import JobSearchForm from './JobSearch';
export default function HeroSection() {
    return (
        <div className="hero-section">
            <Image
                src="/image/job.png" // Path to your background image
                layout="fill"
                objectFit="cover"
                alt="Hero Background"
            />
            <div className="hero-content"     >
                <h1 
                    style={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: '40px',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                        padding: '1px'
                    }} 
                
                >Find Your Dream Job</h1>
                <JobSearchForm />

            </div>
        </div>
    );
};


