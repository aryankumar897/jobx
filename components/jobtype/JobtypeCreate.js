"use client"


import { useJobtype } from "@/context/job_type"

import { MdOutlineClear } from "react-icons/md";

import { MdOutlineDeleteOutline } from "react-icons/md";

export default function JobtypeCreate() {
    const {
        name,
        setName,
        updatingJobtype,
        setUpdatingJobtype,
        createJobtype,
        updateJobtype,
        deleteJobtype,

    } = useJobtype()





    return (
        <div className="my-5">
            <input
                type="text"
                value={updatingJobtype ? updatingJobtype?.name : name}

                onChange={(e) => updatingJobtype ? setUpdatingJobtype({ ...updatingJobtype, name: e.target.value }) :

                    setName(e.target.value)



                }


                className=" p-2 my-2"
                style={{ outline: "none" }}
            />
            <div className="d-flex justify-content-between">
                <button


                    style={{ backgroundColor: "green" }}

                    className={`btn bg-${updatingJobtype ? "info" : "green"
                        } text-light`}

                    onClick={(e) => {
                        e.preventDefault();
                        updatingJobtype ? updateJobtype() : createJobtype()



                    }}




                >
                    {updatingJobtype ? "update" : "create"}
                </button>

                {updatingJobtype && (
                    <>
                        <button
                            className={`btn bg-danger text-light`}
                            onClick={(e) => {
                                e.preventDefault();
                                deleteJobtype();
                            }}
                        >
                            <MdOutlineDeleteOutline />
                        </button>

                        <button
                            className="btn bg-success text-light"
                            onClick={() => setUpdatingJobtype(null)}
                        >
                            <MdOutlineClear />
                        </button>
                    </>
                )}
            </div>
        </div>










    )




}


// const jobTypes = [
//     "Software Developer",
//     "Data Scientist",
//     "Registered Nurse",
//     "Project Manager",
//     "Graphic Designer",
//     "Marketing Specialist",
//     "Human Resources Manager",
//     "Accountant",
//     "Sales Representative",
//     "Mechanical Engineer",
//     "Electrician",
//     "Teacher",
//     "Lawyer",
//     "Financial Analyst",
//     "Pharmacist",
//     "Architect",
//     "Customer Service Representative",
//     "Chef",
//     "Journalist",
//     "Environmental Scientist",
//     "Web Developer",
//     "Social Worker",
//     "Physical Therapist",
//     "Administrative Assistant",
//     "Construction Manager"
// ];
