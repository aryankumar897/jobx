"use client"


import { useProfession } from "@/context/profession"

import { MdOutlineClear } from "react-icons/md";

import { MdOutlineDeleteOutline } from "react-icons/md";

export default function ProfessionCreate() {
    const {
        name,
        setName,
        updatingProfession,
        setUpdatingProfession,
        createProfession,
        updateProfession,
        deleteProfession,

    } = useProfession()





    return (
        <div className="my-5">
            <input
                type="text"
                value={updatingProfession ? updatingProfession?.name : name}

                onChange={(e) => updatingProfession ? setUpdatingProfession({ ...updatingProfession, name: e.target.value }) :

                    setName(e.target.value)



                }


                className=" p-2 my-2"
                style={{ outline: "none" }}
            />
            <div className="d-flex justify-content-between">
                <button


                    style={{ backgroundColor: "green" }}

                    className={`btn bg-${updatingProfession ? "info" : "green"
                        } text-light`}

                    onClick={(e) => {
                        e.preventDefault();
                        updatingProfession ? updateProfession() : createProfession()



                    }}




                >
                    {updatingProfession ? "update" : "create"}
                </button>

                {updatingProfession && (
                    <>
                        <button
                            className={`btn bg-danger text-light`}
                            onClick={(e) => {
                                e.preventDefault();
                                deleteProfession();
                            }}
                        >
                            <MdOutlineDeleteOutline />
                        </button>

                        <button
                            className="btn bg-success text-light"
                            onClick={() => setUpdatingProfession(null)}
                        >
                            <MdOutlineClear />
                        </button>
                    </>
                )}
            </div>
        </div>










    )




}





// [
//     "Doctor",
//     "Nurse",
//     "Pharmacist",
//     "Software Developer",
//     "Data Scientist",
//     "Cybersecurity Analyst",
//     "Accountant",
//     "Financial Analyst",
//     "Marketing Manager",
//     "Teacher",
//     "Professor",
//     "Instructional Designer",
//     "Graphic Designer",
//     "Writer/Author",
//     "Musician",
//     "Civil Engineer",
//     "Mechanical Engineer",
//     "Electrical Engineer",
//     "Social Worker",
//     "Counselor/Therapist"
// ]
