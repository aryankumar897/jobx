"use client"

import { useState, useEffect } from 'react';
import { Switch } from 'antd';

import toast from "react-hot-toast";
import { useRouter } from 'next/navigation'

export default function Alljobs() {

    const router = useRouter();

    const [switchStates, setSwitchStates] = useState({})
    const [jobs, setJobs] = useState([])
  



    useEffect(() => {
        fetchData()

    }, [])
    const fetchData = async () => {
        try {


            const response = await fetch(`${process.env.API}/admin/jobs/create`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)
            }
            else {
                setJobs(data)
            }

        } catch (error) {
            console.log(error)
        }

    }
    const handleDelete = async job => {
        try {
            const response = await fetch(`${process.env.API}/admin/jobs/create/${job}`, {
                method: "DELETE"
            })
            if (!response.ok) {
                toast.error(data.err)
            } else {
                fetchData()
                toast.success("job deleted")
            }



        } catch (error) {

        }


    }

    const handleEdit = (job) => {

        router.push(`/dashboard/admin/jobdetails/?id=${job}`)
    }

    const handleSwitchChange = async (value, jobId) => {
        try {


            const response = await fetch(`${process.env.API}/admin/status`, {

                method: "POST",
                headers: { "Content-Type": "application/json" },

                body: JSON.stringify({ value, jobId })



            })

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)
            }

            setSwitchStates(p => ({

                ...p, [jobId]: value



            }))


            fetchData()

        } catch (error) {
            console.log(error)
        }
    }



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
                                    {jobs&&    jobs.map((job, index) => {
                                        const isActive = new Date(job.deadline) > new Date();
                                        return (
                                            <tr key={index} style={{ cursor: 'pointer' }}>


                                                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>
                                                    <img src={job?.company_id?.logo?.secure_url}
                                                        style={{ height: '50px', width: '50px', borderRadius: '50%' }} /><br />

                                                    {job?.company_id?.name}
                                                </td>



                                                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>{job?.title}</td>
                                                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>{job?.job_category_id?.name}</td>
                                                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>

                                                    {new Date(job.deadline).toLocaleDateString()}
                                                </td>



                                                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>
                                                    {job?.status === 'pending' ? (
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
                                                    $  {job?.salary_mode === 'range' ?
                                                        `${job?.min_salary} - ${job?.max_salary}` :
                                                        job?.custom_salary
                                                    }
                                                </td>


                                                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>

                                                    <div style={{ padding: '1px' }}>
                                                        <Switch
                                                             defaultChecked={job?.status == "active" ? true : false}
                                                            checked={switchStates[job?._id]}

                                                            onChange={(value) => handleSwitchChange(value, job?._id)}

                                                        />
                                                        {/* <p>{switchStates[job?._id] ? 'On' : 'Off'}</p> */}
                                                        {/* <p>{switchStates[job._id] ? '' : ''}</p> */}
                                                    </div>
                                                </td>




                                                <td style={{ padding: '10px 10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>
                                                    <button style={{ marginRight: '8px', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px' }}
                                                        onClick={() => handleEdit(job?._id)}

                                                    >Edit</button>
                                                    <button style={{ margin: '2px', backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px' }}
                                                        onClick={() => handleDelete(job?._id)}
                                                    >Delete</button>
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
