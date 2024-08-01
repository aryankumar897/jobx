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
                logo: '/image/de.jpg',
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
                logo: '/image/dee.jpg',
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
                logo: '/image/dee.jpg',
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
                logo: '/image/de.jpg',
                postedDate: '2024-03-07',
                jobType: 'Full-time'
            }, {
                title: 'Sales Manager',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 50,
                logo: '/image/dee.jpg',
                postedDate: '2024-03-07',
                jobType: 'Full-time'
            }, {
                title: 'Sales Manager',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 50,
                logo: '/image/dee.jpg',
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
                logo: '/image/de.jpg',
                postedDate: '2024-03-06',
                jobType: 'Remote'
            }, {
                title: 'HR Coordinator',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 22,
                logo: '/image/de.jpg',
                postedDate: '2024-03-06',
                jobType: 'Remote'
            }, {
                title: 'HR Coordinator',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 22,
                logo: '/image/dee.jpg',
                postedDate: '2024-03-06',
                jobType: 'Remote'
            }, {
                title: 'HR Coordinator',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 22,
                logo: '/image/dee.jpg',
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
                logo: '/image/dee.jpg',
                postedDate: '2024-03-05',
                jobType: 'Full-time'
            }, {
                title: 'Teacher',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 28,
                logo: '/image/dee.jpg',
                postedDate: '2024-03-05',
                jobType: 'Full-time'
            }, {
                title: 'Teacher',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 28,
                logo: '/image/de.jpg',
                postedDate: '2024-03-05',
                jobType: 'Full-time'
            }, {
                title: 'Teacher',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 28,
                logo: '/image/dee.jpg',
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
                logo: '/image/dee.jpg',
                postedDate: '2024-03-04',
                jobType: 'Part-time'
            },
            {
                title: 'Registered Nurse',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 36,
                logo: '/image/dee.jpg',
                postedDate: '2024-03-04',
                jobType: 'Part-time'
            }, {
                title: 'Registered Nurse',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 36,
                logo: '/image/dee.jpg',
                postedDate: '2024-03-04',
                jobType: 'Part-time'
            }, {
                title: 'Registered Nurse',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 36,
                logo: '/image/dee.jpg',
                postedDate: '2024-03-04',
                jobType: 'Part-time'
            },
            {
                title: 'Registered Nurse',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 36,
                logo: '/image/dee.jpg',
                postedDate: '2024-03-04',
                jobType: 'Part-time'
            },
            {
                title: 'Registered Nurse',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                pricePerHour: 36,
                logo: '/image/dee.jpg',
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
        <div style={{
            width: '90%',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
            <h2 style={{
                textAlign: 'center',
                color: '#333',
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '20px',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
            }}>Popular Featured Jobs</h2>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px',
                flexWrap: 'wrap',
            }}>
                {dummyData.map((categoryData, index) => (
                    <button
                        key={index}
                        style={{
                            margin: '5px',
                            padding: '10px 20px',
                            fontSize: '16px',
                            fontWeight: '600',
                            backgroundColor: selectedCategory === categoryData.category ? '#4CAF50' : '#007BFF',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s',
                            boxShadow: selectedCategory === categoryData.category ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
                        }}
                        onClick={() => handleCategoryClick(categoryData.category)}
                    >
                        {categoryData.category}
                    </button>
                ))}
            </div>

            <div>
                {showAllCategories && (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: '20px',
                    }}>
                        {dummyData.map((categoryData, index) => (
                            <button
                                key={index}
                                style={{
                                    margin: '5px',
                                    padding: '8px 16px',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    backgroundColor: '#007BFF',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s',
                                }}
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
                        <h2 style={{
                            textAlign: 'center',
                            color: '#333',
                            fontSize: '24px',
                            fontWeight: '700',
                            marginBottom: '20px',
                        }}>{selectedCategory}</h2>

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around',
                        }}>
                            {dummyData.find((categoryData) => categoryData.category === selectedCategory).jobs.map((job, jobIndex) => (
                                <div key={jobIndex} style={{
                                    width: '300px',
                                    margin: '10px',
                                    padding: '15px',
                                    backgroundColor: '#fff',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    textAlign: 'center',
                                }}>
                                    <img src={job.logo} alt="Company Logo" style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        marginBottom: '10px',
                                    }} />
                                    <h3 style={{
                                        color: '#333',
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        marginBottom: '10px',
                                    }}>{job.title}</h3>
                                    <p style={{
                                        color: '#666',
                                        fontSize: '14px',
                                        marginBottom: '10px',
                                    }}>{job.description}</p>
                                    <p style={{
                                        color: '#333',
                                        fontSize: '14px',
                                        marginBottom: '10px',
                                    }}>Price per Hour: ${job.pricePerHour}</p>
                                    <p style={{
                                        color: '#333',
                                        fontSize: '14px',
                                        marginBottom: '10px',
                                    }}>Posted: {job.postedDate}</p>
                                    <p style={{
                                        color: '#333',
                                        fontSize: '14px',
                                        marginBottom: '10px',
                                    }}>Job Type: {job.jobType}</p>
                                    <button style={{
                                        padding: '10px 20px',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        backgroundColor: '#4CAF50',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s',
                                    }}>Apply Now</button>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};


