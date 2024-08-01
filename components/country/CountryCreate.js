"use client"


import { useCountry } from "@/context/country"

import { MdOutlineClear } from "react-icons/md";

import { MdOutlineDeleteOutline } from "react-icons/md";

export default function CountryCreate() {
    const {
        
 name,setName,updatingCountry,
 setUpdatingCountry,

 createCountry, updateCountry,deleteCountry



    } = useCountry()





    return (
        <div className="my-5">

         

            <input
                type="text"
                value={updatingCountry ? updatingCountry?.name : name}

                onChange={(e) => updatingCountry ? setUpdatingCountry({ ...updatingCountry, name: e.target.value }) :

                    setName(e.target.value)



                }


                className=" p-2 my-2"
                style={{ outline: "none" }}
            />
            <div className="d-flex justify-content-between">
                <button


                    style={{ backgroundColor: "green" }}

                    className={`btn bg-${updatingCountry ? "info" : "green"
                        } text-light`}

                    onClick={(e) => {
                        e.preventDefault();
                        updatingCountry ? updateCountry() : createCountry()



                    }}




                >
                    {updatingCountry ? "update" : "create"}
                </button>

                {updatingCountry && (
                    <>
                        <button
                            className={`btn bg-danger text-light`}
                            onClick={(e) => {
                                e.preventDefault();
                                deleteCountry();
                            }}
                        >
                            <MdOutlineDeleteOutline />
                        </button>

                        <button
                            className="btn bg-success text-light"
                            onClick={() => setUpdatingCountry(null)}
                        >
                            <MdOutlineClear />
                        </button>
                    </>
                )}
            </div>
        </div>










    )




}





// const countries = [
//     "Canada",
//     "Brazil",
//     "Japan",
//     "Australia",
//     "Germany",
//     "India",
//     "United States",
//     "United Kingdom",
//     "China",
//     "South Korea",
//     "France",
//     "Italy",
//     "Mexico",
//     "Russia",
//     "South Africa",
//     "Spain",
//     "Argentina",
//     "Saudi Arabia",
//     "Nigeria",
//     "Indonesia"
// ];
