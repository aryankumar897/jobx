"use client";
import { useEffect, useState } from "react";
import { useEducation } from "@/context/education"
import { FaRegEdit } from "react-icons/fa";
export default function EducationList() {
    const { fetchEducation, educations, setUpdatingEducation } = useEducation()



    const [searchTerm, setSearchTerm] = useState("")


    useEffect(() => {

        fetchEducation()

    }, [])

    const filteredSkill = educations?.filter((c) =>
        c?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );



    return (
        <div className="my-5">
            {/* {organization?.map((c) => (
                <button className="btn" onClick={() => setUpdatingOrganization(c)}>
                    {c.name}
                </button>
            ))} */}

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search country"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>


            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSkill.length > 0 ? (
                        filteredSkill.map((c) => (
                            <tr key={c._id}>
                                <td>{c.name}{" "} </td>
                                <td>
                                    <button
                                        className="btn btn-link bg-success text-light"
                                        onClick={() => setUpdatingEducation(c)}
                                    >
                                        <FaRegEdit />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No  education found</td>
                        </tr>
                    )}

                </tbody>
            </table>

        </div>
    );
}