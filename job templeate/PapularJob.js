// PopularJobsSection.js
"use client"
import { useState } from 'react';
import { FaBriefcase, FaDesktop, FaBuilding, FaChalkboardTeacher, FaMedkit, FaUserTie } from 'react-icons/fa';

export default function PopularJobsSection() {
    // Define popular job categories
    const jobCategories = [
        { name: 'Finance', icon: FaBriefcase },
        { name: 'Technology', icon: FaDesktop },
        { name: 'Construction', icon: FaBuilding },
        { name: 'Education', icon: FaChalkboardTeacher },
        { name: 'Healthcare', icon: FaMedkit },
        { name: 'Business', icon: FaUserTie },
        { name: 'Finance', icon: FaBriefcase },
        { name: 'Technology', icon: FaDesktop },
        { name: 'Construction', icon: FaBuilding },
        { name: 'Education', icon: FaChalkboardTeacher },
        { name: 'Healthcare', icon: FaMedkit },
        { name: 'Business', icon: FaUserTie },
        { name: 'Finance', icon: FaBriefcase },
        { name: 'Technology', icon: FaDesktop },
        { name: 'Construction', icon: FaBuilding },
        { name: 'Education', icon: FaChalkboardTeacher },
        { name: 'Healthcare', icon: FaMedkit },
        { name: 'Business', icon: FaUserTie },
    ];

    return (
        <div className="popular-jobs-section m-5">
            <h2>Popular Job Categories</h2>
            <div className="job-category-row">
                {jobCategories.slice(0, 6).map((category, index) => (
                    <div key={index} className="job-category">
                        <category.icon />
                        <h6>12 job available</h6>
                        <span>{category.name}</span>
                    </div>
                ))}
            </div>
            <div className="job-category-row">
                {jobCategories.slice(6, 12).map((category, index) => (
                    <div key={index} className="job-category">
                        <category.icon />
                        <h6>12 job available</h6>
                        <span>{category.name}</span>
                    </div>
                ))}
            </div>
            <div className="job-category-row">
                {jobCategories.slice(12, 18).map((category, index) => (
                    <div key={index} className="job-category">
                        <category.icon />
                        <h6>12 job available</h6>
                        <span>{category.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};


