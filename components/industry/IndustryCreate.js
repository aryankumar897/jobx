"use client"


import { useIndustry } from "@/context/industry"

import { MdOutlineClear } from "react-icons/md";

import { MdOutlineDeleteOutline } from "react-icons/md";

export default function IndustryCreate() {
    const { name, setName, updatingIndustry,

        setUpdatingIndustry,
        createIndustry, updateIndustry, deleteIndustry


    } = useIndustry()





    return (
        <div className="my-5">
            <input
                type="text"
                value={updatingIndustry ? updatingIndustry?.name : name}

                onChange={(e) => updatingIndustry ? setUpdatingIndustry({ ...updatingIndustry, name: e.target.value }) :

                    setName(e.target.value)



                }


                className=" p-2 my-2"
                style={{ outline: "none" }}
            />
            <div className="d-flex justify-content-between">
                <button


 style={{backgroundColor:"green"}}
 
                    className={`btn bg-${updatingIndustry ? "info" : "green"
                        } text-light`}

                    onClick={(e) => {
                        e.preventDefault();
                        updatingIndustry ? updateIndustry() : createIndustry()



                    }}




                >
                    {updatingIndustry ? "update":"create"}
                </button>

                {updatingIndustry && (
                    <>
                        <button
                            className={`btn bg-danger text-light`}
                            onClick={(e) => {
                                e.preventDefault();
                                deleteIndustry();
                            }}
                        >
                            <MdOutlineDeleteOutline />
                        </button>

                        <button
                            className="btn bg-success text-light"
                            onClick={() => setUpdatingIndustry(null)}
                        >
                            <MdOutlineClear />
                        </button>
                    </>
                )}
            </div>
        </div>










    )




}