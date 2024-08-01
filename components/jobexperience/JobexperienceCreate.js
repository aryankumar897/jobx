"use client"


import { useJobexperience } from "@/context/jobexperiences"

import { MdOutlineClear } from "react-icons/md";

import { MdOutlineDeleteOutline } from "react-icons/md";

export default function TagCreate() {
    const {
        name,
        setName,
        updatingJobexperience,
        setUpdatingJobexperience,
        createJobexperience,
        updateJobexperience,
        deleteJobexperience,

    } = useJobexperience()





    return (
        <div className="my-5">
            <input
                type="text"
                value={updatingJobexperience ? updatingJobexperience?.name : name}

                onChange={(e) => updatingJobexperience ? setUpdatingJobexperience({ ...updatingJobexperience, name: e.target.value }) :

                    setName(e.target.value)



                }


                className=" p-2 my-2"
                style={{ outline: "none" }}
            />
            <div className="d-flex justify-content-between">
                <button


                    style={{ backgroundColor: "green" }}

                    className={`btn bg-${updatingJobexperience ? "info" : "green"
                        } text-light`}

                    onClick={(e) => {
                        e.preventDefault();
                        updatingJobexperience ? updateJobexperience() : createJobexperience()



                    }}




                >
                    {updatingJobexperience ? "update" : "create"}
                </button>

                {updatingJobexperience && (
                    <>
                        <button
                            className={`btn bg-danger text-light`}
                            onClick={(e) => {
                                e.preventDefault();
                                deleteJobexperience();
                            }}
                        >
                            <MdOutlineDeleteOutline />
                        </button>

                        <button
                            className="btn bg-success text-light"
                            onClick={() => setUpdatingJobexperience(null)}
                        >
                            <MdOutlineClear />
                        </button>
                    </>
                )}
            </div>
        </div>










    )




}





// job_names = [
//     "Software Engineer",
//     "Marketing Manager",
//     "Data Analyst",
//     "Product Designer",
//     "Financial Analyst",
//     "HR Specialist",
//     "Sales Representative",
//     "Graphic Designer",
//     "Operations Manager",
//     "Content Writer",
//     "Software Developer",
//     "Research Scientist",
//     "UX/UI Designer",
//     "Business Analyst",
//     "Project Manager",
//     "Content Strategist",
//     "Quality Assurance Engineer",
//     "Customer Success Manager",
//     "Digital Marketing Specialist",
//     "Operations Analyst"
// ]
