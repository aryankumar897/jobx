
"use client";
import { useEffect, useState } from "react";
import { useStat } from "@/context/state";
import { useCountry } from "@/context/country";
import { FaRegEdit } from "react-icons/fa";
export default function StateList() {

 const {fetchState,state,setUpdatingState,}=useStat()

    const [searchTerm, setSearchTerm]=useState("")
 const  {fetchCountry,country,setUpdatingCountry}=useCountry()



useEffect(()=>{



fetchCountry()
fetchState()



},[])


 const   filteredState=state.filter((c)=> c.statename.toLowerCase().includes(searchTerm.toLowerCase()))
 console.log(  "state" , state)

    return (
        <div className="my-5">
            {/* {country?.map((c) => (
                <button className="btn" onClick={() => setUpdatingContry(c)}>
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
            <table className="table table-responsive" style={{ width: '80%' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th >Country</th>   <th >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredState?.map((c) => (
                        <tr key={c._id}>
                            <td style={{ width: '50%' }}>{c.statename}</td> {/* Adjust width as needed */}
                            <td style={{ width: '50%', }}>{c?.countryId?.name}</td> {/* Adjust width as needed */}
                            <td>
                                <button
                                    className="btn btn-link bg-success text-light"
                                    onClick={() => setUpdatingState(c)}
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