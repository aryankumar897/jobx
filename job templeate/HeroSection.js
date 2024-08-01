// HeroSection.js
"use client"
import Image from 'next/image';
import JobSearchForm from './JobSearch';
export default function HeroSection() {
    return (
        <div className="hero-section">
            <Image
                src="/images/de.png" // Path to your background image
                layout="fill"
                objectFit="cover"
                alt="Hero Background"
            />
            <div className="hero-content">
                <h1>JOIN us to explore the job in the world</h1>
                <JobSearchForm />

            </div>
        </div>
    );
};


