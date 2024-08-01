"use client"

import { useState, useEffect } from 'react';
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';

export default function Company() {
    const [jobs, setJobs] = useState([]);
    const router = useRouter()
    useEffect(() => {
      


        fetchData()
    }, []);




    const fetchData = async () => {


        try {


            const response = await fetch(`${process.env.API}/company/jobs/create`)
            const data = await response.json()
            if (!response.ok) {

                toast.error(data.err)
            } else {

                setJobs(data)

            }



        } catch (error) {
            console.log(error);

            toast.error("an error occurred while fetching")
        }

    }




    const handleEdit = (id) => {
        // Handle edit action

        router.push(`/dashboard/company/jobdetails/?id=${id}`)
     
    };

    const handleDelete = async (id) => {
        try {

            const response = await fetch(`${process.env.API}/company/jobs/create/${id}`, {
                method: "DELETE"
            })


            if (!response.ok) {
                toast.error(data.err)
            } else {
                toast.success("job deleted")

                fetchData()
            }


        } catch (error) {
            toast.error(error)
            console.log(error)

        }
    };

    const handleApplication = (id) => {
        // Handle application action
        toast.success(`Apply for job with ID: ${id}`);
    };

    return (
        <main>
            <div className="container">
                {JSON.stringify({ jobs }, null, 4)}
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="col shadow bg-light p-5">
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr>
                                        <th style={{ padding: '12px 15px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Picture</th>
                                        <th style={{ padding: '12px 15px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Title</th>
                                        <th style={{ padding: '12px 15px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Category Name</th>
                                        <th style={{ padding: '12px 15px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Deadline</th>
                                        <th style={{ padding: '12px 15px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Status</th>
                                        <th style={{ padding: '12px 15px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Applications</th>
                                        <th style={{ padding: '12px 15px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobs.map((job, index) => {
                                        const isActive = new Date(job.deadline) > new Date();
                                        return (
                                            <tr key={index} style={{ cursor: 'pointer' }}>
                                                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>
                                                    <img src={job?.company_id.logo.secure_url}
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
                                                    {job?.jobcount} applications
                                                </td>
                                                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>
                                                    <button style={{ marginRight: '8px', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px' }} onClick={() => handleEdit(job?._id)}>Edit</button>
                                                    <button style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px' }} onClick={() => handleDelete(job?._id)}>Delete</button>
                                                    <button style={{ marginLeft: '8px', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px' }} onClick={() => handleApplication(job?._id)}>Application</button>
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
    )
}
