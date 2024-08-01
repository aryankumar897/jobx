"use client";
import { useEffect, useState } from "react";
import { useCountry } from "@/context/country"
import { FaRegEdit } from "react-icons/fa";
export default function IndustryList() {
    const { 
        
  fetchCountry, country,setUpdatingCountry

     } = useCountry()



    const [searchTerm, setSearchTerm] = useState("")


    useEffect(() => {

        fetchCountry()

    }, [])

    const filteredCountry = country?.filter((c) =>


        c?.name.toLowerCase().includes(searchTerm.toLowerCase()))



    return (
        <div className="my-5">
      
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
                    {filteredCountry.length > 0 ? (
                        filteredCountry.map((c) => (
                            <tr key={c._id}>
                                <td>{c.name}</td>
                                <td>
                                    <button
                                        className="btn btn-link bg-success text-light"
                                        onClick={() => setUpdatingCountry(c)}
                                    >
                                        <FaRegEdit />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No  country found</td>
                        </tr>
                    )}

                </tbody>
            </table>


        </div>
    );
}