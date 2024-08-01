"use client";
import { useEffect, useState } from "react";

import { FaRegEdit } from "react-icons/fa";
export default function IndustryList() {
  

    return (
        <div className="my-5">
          
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search country"
                 
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
                    {filteredIndustry.length > 0 ? (
                        filteredIndustry.map((c) => (
                            <tr key={c._id}>
                                <td>{c.name}</td>
                                <td>
                                    <button
                                        className="btn btn-link bg-success text-light"
                                        onClick={() => setUpdatingIndustry(c)}
                                    >
                                        <FaRegEdit />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No industries found</td>
                        </tr>
                    )}

                </tbody>
            </table>


        </div>
    );
}