"use client";
import { useEffect, useState } from "react";
import { useOrganization } from "@/context/organization"
import { FaRegEdit } from "react-icons/fa";
export default function IndustryList() {
    const { fetchOrganization, organization, setUpdatingOrganization, updatingOrganization } = useOrganization()



    const [searchTerm, setSearchTerm] = useState("")


    useEffect(() => {

        fetchOrganization()

    }, [])

    const filteredOrganization = organization?.filter((c) =>
        c?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log("up", updatingOrganization)
   
    
    console.log("upx", setUpdatingOrganization)


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
                    {filteredOrganization.length > 0 ? (
                        filteredOrganization.map((c) => (
                            <tr key={c._id}>
                                <td>{c.name}</td>
                                <td>
                                    <button
                                        className="btn btn-link bg-success text-light"
                                        onClick={() => setUpdatingOrganization(c)}
                                    >
                                        <FaRegEdit />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No organization found</td>
                        </tr>
                    )}

                </tbody>
            </table>

        </div>
    );
}