"use client"


import React, { useState } from 'react';
const dummyData = [
    {
        category: 'Software Development',
        jobs: [
            {
                title: 'Frontend Developer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 30,
                logo: '/company_logo.png',
                postedDate: '2024-03-13',
                jobType: 'Full-time'
            },
            // Add more jobs...
        ]
    },

    {
        category: 'Web Design',
        jobs: [
            {
                title: 'UI/UX Designer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 25,
                logo: '/company_logo.png',
                postedDate: '2024-03-11',
                jobType: 'Full-time'
            },
            // Add more jobs...
        ]
    },


    {
        category: 'Finance',
        jobs: [
            {
                title: 'Financial Analyst',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 45,
                logo: '/company_logo.png',
                postedDate: '2024-03-08',
                jobType: 'Part-time'
            },
            // Add more jobs...
        ]
    },
    {
        category: 'Sales',
        jobs: [
            {
                title: 'Sales Manager',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 50,
                logo: '/company_logo.png',
                postedDate: '2024-03-07',
                jobType: 'Full-time'
            }, {
                title: 'Sales Manager',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 50,
                logo: '/company_logo.png',
                postedDate: '2024-03-07',
                jobType: 'Full-time'
            }, {
                title: 'Sales Manager',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 50,
                logo: '/company_logo.png',
                postedDate: '2024-03-07',
                jobType: 'Full-time'
            },
            // Add more jobs...
        ]
    },
    {
        category: 'Human Resources',
        jobs: [
            {
                title: 'HR Coordinator',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 22,
                logo: '/company_logo.png',
                postedDate: '2024-03-06',
                jobType: 'Remote'
            }, {
                title: 'HR Coordinator',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 22,
                logo: '/company_logo.png',
                postedDate: '2024-03-06',
                jobType: 'Remote'
            }, {
                title: 'HR Coordinator',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 22,
                logo: '/company_logo.png',
                postedDate: '2024-03-06',
                jobType: 'Remote'
            }, {
                title: 'HR Coordinator',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 22,
                logo: '/company_logo.png',
                postedDate: '2024-03-06',
                jobType: 'Remote'
            },
            // Add more jobs...
        ]
    },
    {
        category: 'Education',
        jobs: [
            {
                title: 'Teacher',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 28,
                logo: '/company_logo.png',
                postedDate: '2024-03-05',
                jobType: 'Full-time'
            }, {
                title: 'Teacher',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 28,
                logo: '/company_logo.png',
                postedDate: '2024-03-05',
                jobType: 'Full-time'
            }, {
                title: 'Teacher',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 28,
                logo: '/company_logo.png',
                postedDate: '2024-03-05',
                jobType: 'Full-time'
            }, {
                title: 'Teacher',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 28,
                logo: '/company_logo.png',
                postedDate: '2024-03-05',
                jobType: 'Full-time'
            },
            // Add more jobs...
        ]
    },
    {
        category: 'Healthcare',
        jobs: [
            {
                title: 'Registered Nurse',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 36,
                logo: '/company_logo.png',
                postedDate: '2024-03-04',
                jobType: 'Part-time'
            },
            {
                title: 'Registered Nurse',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 36,
                logo: '/company_logo.png',
                postedDate: '2024-03-04',
                jobType: 'Part-time'
            }, {
                title: 'Registered Nurse',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 36,
                logo: '/company_logo.png',
                postedDate: '2024-03-04',
                jobType: 'Part-time'
            }, {
                title: 'Registered Nurse',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 36,
                logo: '/company_logo.png',
                postedDate: '2024-03-04',
                jobType: 'Part-time'
            },
            {
                title: 'Registered Nurse',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 36,
                logo: '/company_logo.png',
                postedDate: '2024-03-04',
                jobType: 'Part-time'
            },
            {
                title: 'Registered Nurse',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 36,
                logo: '/company_logo.png',
                postedDate: '2024-03-04',
                jobType: 'Part-time'
            },

            // Add more jobs...
        ]
    },
    // Add more categories...
];


export default function FeaturedJob() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showAllCategories, setShowAllCategories] = useState(false);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const toggleShowAllCategories = () => {
        setShowAllCategories(!showAllCategories);
    };
    return (
        <div className="container">
            <h2 className="text-center">some papular featured job</h2>
            <div className="categories">
                {dummyData.map((categoryData, index) => (
                    <button
                        key={index}
                        className={`category ${selectedCategory === categoryData.category ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(categoryData.category)}
                    >
                        {categoryData.category}
                    </button>
                ))}

            </div>
            <div className="jobs">
                {showAllCategories && (
                    <div className="category-dropdown ">
                        {dummyData.map((categoryData, index) => (
                            <button
                                key={index}
                                className="category"
                                onClick={() => {
                                    handleCategoryClick(categoryData.category);
                                    toggleShowAllCategories();
                                }}
                            >
                                {categoryData.category}
                            </button>
                        ))}
                    </div>
                )}
                {selectedCategory && (
                    <>
                        <h2>{selectedCategory}</h2>
                        <div className="job-grid m-5">
                            {dummyData.find((categoryData) => categoryData.category === selectedCategory).jobs.map((job, jobIndex) => (
                                <div className="job" key={jobIndex}>
                                    <img src={job.logo} alt="Company Logo" />
                                    <div>
                                        <h3>{job.title}</h3>
                                        <p>{job.description}</p>
                                        <p>Price per Hour: ${job.pricePerHour}</p>
                                        <p>Posted: {job.postedDate}</p>
                                        <p>Job Type: {job.jobType}</p>
                                        <button className="apply-button">Apply Now</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

        </div>
    );
};


