"use client";
import { useEffect, useState } from "react";

import { FaRegEdit } from "react-icons/fa";
export default function CityList() {
  

    const filteredState = city?.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    //console.log("setUpdating City",  updatingCity)

    return (
        <div className="my-5">
            {/* {city?.map((c) => (
                <button className="btn" onClick={() => setUpdatingCity(c)}>
                    {c.name}
                </button>

            ))}  */}


            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search city"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <table className="table table-responsive" style={{ width: '80%' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>State</th>
                        <th style={{ marginLeft: '10%' }}>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredState && filteredState?.map((c) => (
                        <tr key={c._id}>
                            <td style={{ width: '33%' }}>{c?.name}</td> {/* Adjust width as needed */}
                            <td style={{ width: '33%' }}>{c?.state_Id?.statename}</td> {/* Adjust width as needed */}
                            <td style={{ width: '33%', }}>{c?.country_Id?.name}</td> {/* Adjust width as needed */}
                            <td>
                                <button
                                    className="btn btn-link bg-success text-light ml-5"
                                    onClick={() => setUpdatingCity(c)}
                                >
                                    <FaRegEdit />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>






        </div>
    );
}