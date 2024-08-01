"use client";
import { useEffect, useState } from "react";
import { useLanguage} from "@/context/language"
import { FaRegEdit } from "react-icons/fa";
export default function LanguageList() {
    const { fetchLanguage,
         language,
         setUpdatingLanguage} = useLanguage()



    const [searchTerm, setSearchTerm] = useState("")


    useEffect(() => {

        fetchLanguage()

    }, [])

    const filteredLanguage = language?.filter((c) =>


        c?.name?.toLowerCase().includes(searchTerm.toLowerCase()))



    return (
        <div className="my-5">

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search industry"

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
                    {filteredLanguage.length > 0 ? (
                        filteredLanguage.map((c) => (
                            <tr key={c._id}>
                                <td>{c.name}</td>
                                <td>
                                    <button
                                        className="btn btn-link bg-success text-light"
                                        onClick={() => setUpdatingLanguage(c)}
                                    >
                                        <FaRegEdit />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No language found</td>
                        </tr>
                    )}

                </tbody>
            </table>


        </div>
    );
}