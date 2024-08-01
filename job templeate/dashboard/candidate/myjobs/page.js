"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const dummyJobs = [
            {
                job_id: {
                    company_id: {
                        name: "Company A",
                        logo: {
                            secure_url: "https://via.placeholder.com/50",
                        },
                        slug: "company-a",
                    },
                    salary_mode: "range",
                    min_salary: 50000,
                    max_salary: 70000,
                    custom_salary: "",
                    status: "active",
                },
                createdAt: "2024-07-01T00:00:00Z",
                deadline: "2024-08-01T00:00:00Z",
            },
            {
                job_id: {
                    company_id: {
                        name: "Company B",
                        logo: {
                            secure_url: "https://via.placeholder.com/50",
                        },
                        slug: "company-b",
                    },
                    salary_mode: "fixed",
                    min_salary: "",
                    max_salary: "",
                    custom_salary: 80000,
                    status: "pending",
                },
                createdAt: "2024-06-15T00:00:00Z",
                deadline: "2024-07-15T00:00:00Z",
            },
            // Add more dummy jobs as needed
        ];

        setJobs(dummyJobs);
    }, []);

    return (
        <div>
            <h5>Jobs</h5>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="col shadow bg-light p-5">
                        <div style={{ overflowX: "auto" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead>
                                    <tr>
                                        <th
                                            style={{
                                                padding: "12px 15px",
                                                backgroundColor: "#f2f2f2",
                                                fontWeight: "bold",
                                                textAlign: "left",
                                                borderBottom: "1px solid #ddd",
                                            }}
                                        >
                                            Company
                                        </th>
                                        <th
                                            style={{
                                                padding: "12px 15px",
                                                backgroundColor: "#f2f2f2",
                                                fontWeight: "bold",
                                                textAlign: "left",
                                                borderBottom: "1px solid #ddd",
                                            }}
                                        >
                                            Salary
                                        </th>
                                        <th
                                            style={{
                                                padding: "12px 15px",
                                                backgroundColor: "#f2f2f2",
                                                fontWeight: "bold",
                                                textAlign: "left",
                                                borderBottom: "1px solid #ddd",
                                            }}
                                        >
                                            Date
                                        </th>
                                        <th
                                            style={{
                                                padding: "12px 15px",
                                                backgroundColor: "#f2f2f2",
                                                fontWeight: "bold",
                                                textAlign: "left",
                                                borderBottom: "1px solid #ddd",
                                            }}
                                        >
                                            Status
                                        </th>
                                        <th
                                            style={{
                                                padding: "12px 15px",
                                                backgroundColor: "#f2f2f2",
                                                fontWeight: "bold",
                                                textAlign: "left",
                                                borderBottom: "1px solid #ddd",
                                            }}
                                        >
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobs.map((job, index) => {
                                        const isActive = new Date(job.deadline) > new Date();
                                        return (
                                            <tr key={index} style={{ cursor: "pointer" }}>
                                                <td
                                                    style={{
                                                        padding: "12px 15px",
                                                        borderBottom: "1px solid #ddd",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <img
                                                        src={job.job_id.company_id.logo.secure_url}
                                                        style={{
                                                            height: "50px",
                                                            width: "50px",
                                                            borderRadius: "50%",
                                                        }}
                                                    />
                                                    <br />
                                                    {job.job_id.company_id.name}
                                                </td>
                                                <td
                                                    style={{
                                                        padding: "12px 15px",
                                                        borderBottom: "1px solid #ddd",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    $
                                                    {job.job_id.salary_mode === "range"
                                                        ? `${job.job_id.min_salary} - ${job.job_id.max_salary}`
                                                        : job.job_id.custom_salary}
                                                </td>
                                                <td
                                                    style={{
                                                        padding: "1px 10px",
                                                        borderBottom: "1px solid #ddd",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    {new Date(job.createdAt).toLocaleDateString()}
                                                </td>
                                                <td
                                                    style={{
                                                        padding: "12px 15px",
                                                        borderBottom: "1px solid #ddd",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    {job.job_id.status === "pending" ? (
                                                        <span
                                                            style={{
                                                                display: "inline-block",
                                                                padding: "4px 8px",
                                                                borderRadius: "4px",
                                                                backgroundColor: "#ffc107",
                                                                color: "#212529",
                                                            }}
                                                        >
                                                            Pending
                                                        </span>
                                                    ) : (
                                                        <span
                                                            style={{
                                                                display: "inline-block",
                                                                padding: "4px 8px",
                                                                borderRadius: "4px",
                                                                backgroundColor: isActive
                                                                    ? "#4caf50"
                                                                    : "#f44336",
                                                                color: "#fff",
                                                            }}
                                                        >
                                                            {isActive ? "Active" : "Expired"}
                                                        </span>
                                                    )}
                                                </td>
                                                <td
                                                    style={{
                                                        padding: "12px 15px",
                                                        borderBottom: "1px solid #ddd",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <Link
                                                        style={{
                                                            marginRight: "8px",
                                                            backgroundColor: "#007bff",
                                                            color: "#fff",
                                                            border: "none",
                                                            padding: "8px 16px",
                                                            borderRadius: "4px",
                                                        }}
                                                        href={`/company/${job?.job_id?.company_id?.slug}`}
                                                    >
                                                        View
                                                    </Link>
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
        </div>
    );
}
