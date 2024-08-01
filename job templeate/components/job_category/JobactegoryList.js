"use client";
import { useEffect, useState } from "react";
import { useJob_category } from "@/context/job_categories";
import { FaRegEdit } from "react-icons/fa";
import IconPicker from 'react-icons-picker';
export default function IndustryList() {


    const {

        job_categories,
        setUpdatingJob_categories,
        fetchJob_categories,
    } = useJob_category();



    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        fetchJob_categories();
    }, []);
    const filteredjob_categories = job_categories?.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );



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
                        <th    >Icon</th> {"        "}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredjob_categories.length > 0 ? (
                        filteredjob_categories.map((c) => (
                            <tr key={c._id}>
                                <td>{c.name}  jobs</td>
                                <td>



                                    <div

                                        className="pick mr-5"
                                        style={{
                                            pointerEvents: 'none', opacity: 0.4,
                                            color: 'red',
                                            fontSize: "100002px"
                                        }}   >





                                        <IconPicker

                                            value={c.icon}
                                            color={true}
                                            size={34}

                                        />




                                    </div>





                                </td>
                                <td>
                                    <button
                                        className="btn btn-link bg-success text-light"
                                        onClick={() => setUpdatingJob_categories(c)}
                                    >
                                        <FaRegEdit />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No job_categories found</td>
                        </tr>
                    )}

                </tbody>
            </table>


        </div>
    );
}