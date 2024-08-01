"use client";
import { useEffect, useState } from "react";
import { useJobexperience } from "@/context/jobexperiences"
import { FaRegEdit } from "react-icons/fa";
export default function SkillList() {
    const { fetchJobexperience,
         jobexperience,
          setUpdatingJobexperience
        
        } = useJobexperience()



    const [searchTerm, setSearchTerm] = useState("")


    useEffect(() => {

        fetchJobexperience()

    }, [])

    const filteredTag = jobexperience?.filter((c) =>
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
                    placeholder="Search tag"
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
                    {filteredTag.length > 0 ? (
                        filteredTag.map((c) => (
                            <tr key={c._id}>
                                <td>{c.name}{" "} </td>
                                <td>
                                    <button
                                        className="btn btn-link bg-success text-light"
                                        onClick={() => setUpdatingJobexperience(c)}
                                    >
                                        <FaRegEdit />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No  job experience  found</td>
                        </tr>
                    )}

                </tbody>
            </table>

        </div>
    );
}