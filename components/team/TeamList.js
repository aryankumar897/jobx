"use client";
import { useEffect, useState } from "react";
import { useTeam} from "@/context/team"
import { FaRegEdit } from "react-icons/fa";
export default function TeamList() {
    const { fetchTeam,  team, setUpdatingTeam } = useTeam()



    const [searchTerm, setSearchTerm] = useState("")


    useEffect(() => {

        fetchTeam()

    }, [])

    const filteredTeam = team?.filter((c) =>
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
                    {filteredTeam.length > 0 ? (
                        filteredTeam.map((c) => (
                            <tr key={c._id}>
                                <td>{c.name}{" "}  size</td>
                                <td>
                                    <button
                                        className="btn btn-link bg-success text-light"
                                        onClick={() => setUpdatingTeam(c)}
                                    >
                                        <FaRegEdit />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No team found</td>
                        </tr>
                    )}

                </tbody>
            </table>

        </div>
    );
}