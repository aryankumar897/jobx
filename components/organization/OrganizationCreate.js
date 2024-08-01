"use client"


import { useOrganization } from "@/context/organization"

import { MdOutlineClear } from "react-icons/md";

import { MdOutlineDeleteOutline } from "react-icons/md";

export default function IndustryCreate() {
    const {
        name,
        setName,
        updatingOrganization,
        setUpdatingOrganization,
        createOrganization,
        updateOrganization,
        deleteOrganization,

    } = useOrganization()


   


    return (
        <div className="my-5">
            <input
                type="text"
                value={updatingOrganization ? updatingOrganization?.name : name}

                onChange={(e) => updatingOrganization ? setUpdatingOrganization({ ...updatingOrganization, name: e.target.value }) :

                    setName(e.target.value)



                }


                className=" p-2 my-2"
                style={{ outline: "none" }}
            />
            <div className="d-flex justify-content-between">
                <button


                    style={{ backgroundColor: "green" }}

                    className={`btn bg-${updatingOrganization ? "info" : "green"
                        } text-light`}

                    onClick={(e) => {
                        e.preventDefault();
                        updatingOrganization ? updateOrganization() : createOrganization()



                    }}




                >
                    {updatingOrganization ? "update" : "create"}
                </button>

                {updatingOrganization && (
                    <>
                        <button
                            className={`btn bg-danger text-light`}
                            onClick={(e) => {
                                e.preventDefault();
                                deleteOrganization();
                            }}
                        >
                            <MdOutlineDeleteOutline />
                        </button>

                        <button
                            className="btn bg-success text-light"
                            onClick={() => setUpdatingOrganization(null)}
                        >
                            <MdOutlineClear />
                        </button>
                    </>
                )}
            </div>
        </div>










    )




}




// const organizations = [


//     "Google",
//     "Amazon",
//     "Microsoft",
//     "Apple",
//     "Facebook",
//     "IBM",
//     "Tesla",
//     "Netflix",
//     "Salesforce",
//     "Adobe",
//     "Intel",
//     "Cisco",
//     "Oracle",
//     "Spotify",
//     "LinkedIn",
//     "Uber",
//     "Twitter",
//     "Airbnb",
//     "PayPal",
//     "Square"
// ];
