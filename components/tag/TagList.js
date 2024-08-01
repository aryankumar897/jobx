"use client";
import { useEffect, useState } from "react";
import { useTag } from "@/context/tag"
import { FaRegEdit } from "react-icons/fa";
export default function SkillList() {
    const { fetchTag, tag, setUpdatingTag } = useTag()



    const [searchTerm, setSearchTerm] = useState("")


    useEffect(() => {

        fetchTag()

    }, [])

    const filteredTag = tag?.filter((c) =>
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
                                        onClick={() => setUpdatingTag(c)}
                                    >
                                        <FaRegEdit />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No Tag found</td>
                        </tr>
                    )}

                </tbody>
            </table>

        </div>
    );
}