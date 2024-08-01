"use client"


import { useJobrole } from "@/context/jobrole"

import { MdOutlineClear } from "react-icons/md";

import { MdOutlineDeleteOutline } from "react-icons/md";

export default function JobroleCreate() {
    const {
        name,
        setName,
        updatingJobrole,
        setUpdatingJobrole,
        createJobrole,
        updateJobrole,
        deleteJobrole,

    } = useJobrole()





    return (
        <div className="my-5">
            <input
                type="text"
                value={updatingJobrole ? updatingJobrole?.name : name}

                onChange={(e) => updatingJobrole ? setUpdatingJobrole({ ...updatingJobrole, name: e.target.value }) :

                    setName(e.target.value)



                }


                className=" p-2 my-2"
                style={{ outline: "none" }}
            />
            <div className="d-flex justify-content-between">
                <button


                    style={{ backgroundColor: "green" }}

                    className={`btn bg-${updatingJobrole ? "info" : "green"
                        } text-light`}

                    onClick={(e) => {
                        e.preventDefault();
                        updatingJobrole ? updateJobrole() : createJobrole()



                    }}




                >
                    {updatingJobrole ? "update" : "create"}
                </button>

                {updatingJobrole && (
                    <>
                        <button
                            className={`btn bg-danger text-light`}
                            onClick={(e) => {
                                e.preventDefault();
                                deleteJobrole();
                            }}
                        >
                            <MdOutlineDeleteOutline />
                        </button>

                        <button
                            className="btn bg-success text-light"
                            onClick={() => setUpdatingJobrole(null)}
                        >
                            <MdOutlineClear />
                        </button>
                    </>
                )}
            </div>
        </div>










    )




}




const jobRoles = [
    "Software Developer",
    "Data Scientist",
    "Project Manager",
    "UX/UI Designer",
    "Marketing Manager",
    "Financial Analyst",
    "Sales Representative",
    "Human Resources Manager",
    "Product Manager",
    "Content Writer",
    "Graphic Designer",
    "IT Support Specialist",
    "Business Analyst",
    "Operations Manager",
    "Digital Marketing Specialist",
    "Customer Service Representative",
    "Network Engineer",
    "Accountant",
    "Social Media Manager",
    "Mechanical Engineer"
];
