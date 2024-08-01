"use client"

import { useState, useEffect } from 'react';
import { Switch } from 'antd';

import toast from "react-hot-toast";
import { useRouter } from 'next/navigation'

export default function Alljobs() {
   
    const jobs = [
        {
            company_id: {
                logo: {
                    secure_url: 'https://via.placeholder.com/50'
                },
                name: 'Tech Innovators Inc.'
            },
            title: 'Frontend Developer',
            job_category_id: {
                name: 'Development'
            },
            deadline: '2024-07-15',
            status: 'active',
            salary_mode: 'range',
            min_salary: 60000,
            max_salary: 80000,
            custom_salary: null,
            _id: '1'
        },
        {
            company_id: {
                logo: {
                    secure_url: 'https://via.placeholder.com/50'
                },
                name: 'Creative Solutions Ltd.'
            },
            title: 'Graphic Designer',
            job_category_id: {
                name: 'Design'
            },
            deadline: '2024-06-20',
            status: 'pending',
            salary_mode: 'custom',
            min_salary: null,
            max_salary: null,
            custom_salary: 50000,
            _id: '2'
        },
        {
            company_id: {
                logo: {
                    secure_url: 'https://via.placeholder.com/50'
                },
                name: 'Business Corp.'
            },
            title: 'Data Analyst',
            job_category_id: {
                name: 'Analytics'
            },
            deadline: '2024-08-01',
            status: 'active',
            salary_mode: 'range',
            min_salary: 55000,
            max_salary: 75000,
            custom_salary: null,
            _id: '3'
        },
        {
            company_id: {
                logo: {
                    secure_url: 'https://via.placeholder.com/50'
                },
                name: 'Health Plus'
            },
            title: 'Medical Researcher',
            job_category_id: {
                name: 'Research'
            },
            deadline: '2024-05-30',
            status: 'active',
            salary_mode: 'custom',
            min_salary: null,
            max_salary: null,
            custom_salary: 70000,
            _id: '4'
        },
        {
            company_id: {
                logo: {
                    secure_url: 'https://via.placeholder.com/50'
                },
                name: 'EduTech StartUp'
            },
            title: 'Software Engineer',
            job_category_id: {
                name: 'Engineering'
            },
            deadline: '2024-09-10',
            status: 'pending',
            salary_mode: 'range',
            min_salary: 80000,
            max_salary: 100000,
            custom_salary: null,
            _id: '5'
        }
    ];

  




    return (

        <main>


            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="col shadow  p-5">

                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr>   <th style={{ padding: '12px 15px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Picture</th>
                                        <th style={{ padding: '12px 15px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Title</th>
                                        <th style={{ padding: '12px 15px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Category Name</th>
                                        <th style={{ padding: '12px 15px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Deadline</th>
                                        <th style={{ padding: '12px 15px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Status</th>
                                        <th style={{ padding: '12px 15px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Salary</th>

                                        <th style={{ padding: '12px 15px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Approve</th>

                                        <th style={{ padding: '12px 15px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobs.map((job, index) => {
                                        const isActive = new Date(job.deadline) > new Date();
                                        return (
                                            <tr key={index} style={{ cursor: 'pointer' }}>


                                                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>
                                                    <img src={job?.company_id?.logo?.secure_url}
                                                        style={{ height: '50px', width: '50px', borderRadius: '50%' }} /><br />

                                                    {job?.company_id?.name}
                                                </td>



                                                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>{job.title}</td>
                                                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>{job.job_category_id.name}</td>
                                                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>

                                                    {new Date(job.deadline).toLocaleDateString()}
                                                </td>



                                                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>
                                                    {job.status === 'pending' ? (
                                                        <span style={{ display: 'inline-block', padding: '4px 8px', borderRadius: '4px', backgroundColor: '#ffc107', color: '#212529' }}>
                                                            pending
                                                        </span>
                                                    ) : (
                                                        <span style={{ display: 'inline-block', padding: '4px 8px', borderRadius: '4px', backgroundColor: isActive ? '#4caf50' : '#f44336', color: '#fff' }}>
                                                            {isActive ? 'Active' : 'Expired'}
                                                        </span>
                                                    )}
                                                </td>


                                                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>
                                                    $  {job.salary_mode === 'range' ?
                                                        `${job.min_salary} - ${job.max_salary}` :
                                                        job.custom_salary
                                                    }
                                                </td>


                                                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>

                                                    <div style={{ padding: '1px' }}>
                                                        <Switch
                                                            defaultChecked={job.status == "active" ? true : false}
                                                            checked={switchStates[job?._id]}

                                                            onChange={(value) => handleSwitchChange(value, job?._id)}

                                                        />
                                                        {/* <p>{switchStates[job?._id] ? 'On' : 'Off'}</p> */}
                                                        <p>{switchStates[job._id] ? '' : ''}</p>
                                                    </div>
                                                </td>




                                                <td style={{ padding: '10px 10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>
                                                    <button style={{ marginRight: '8px', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px' }} onClick={() => handleEdit(job?._id)}>Edit</button>
                                                    <button style={{ margin: '2px', backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px' }} onClick={() => handleDelete(job?._id)}>Delete</button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
};
