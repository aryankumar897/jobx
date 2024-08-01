"use client"


import { useEducation } from "@/context/education"

import { MdOutlineClear } from "react-icons/md";

import { MdOutlineDeleteOutline } from "react-icons/md";

export default function SkillCreate() {
    const {
        name,
        setName,
        updatingEducation,
        setUpdatingEducation,
        createEducation,
        updateEducation,
        deleteEducation,

    } = useEducation()





    return (
        <div className="my-5">
            <input
                type="text"
                value={updatingEducation ? updatingEducation?.name : name}

                onChange={(e) => updatingEducation ? setUpdatingEducation({ ...updatingEducation, name: e.target.value }) :

                    setName(e.target.value)



                }


                className=" p-2 my-2"
                style={{ outline: "none" }}
            />
            <div className="d-flex justify-content-between">
                <button


                    style={{ backgroundColor: "green" }}

                    className={`btn bg-${updatingEducation ? "info" : "green"
                        } text-light`}

                    onClick={(e) => {
                        e.preventDefault();
                        updatingEducation ? updateEducation() : createEducation()



                    }}




                >
                    {updatingEducation ? "update" : "create"}
                </button>

                {updatingEducation && (
                    <>
                        <button
                            className={`btn bg-danger text-light`}
                            onClick={(e) => {
                                e.preventDefault();
                                deleteEducation();
                            }}
                        >
                            <MdOutlineDeleteOutline />
                        </button>

                        <button
                            className="btn bg-success text-light"
                            onClick={() => setUpdatingEducation(null)}
                        >
                            <MdOutlineClear />
                        </button>
                    </>
                )}
            </div>
        </div>










    )




}


// technical_topics = [
//     "Computer Science",
//     "Software Development",
//     "Data Science",
//     "Cybersecurity",
//     "Network Administration",
//     "Artificial Intelligence",
//     "Machine Learning",
//     "Cloud Computing",
//     "Database Management",
//     "Web Development",
//     "Mobile App Development",
//     "DevOps",
//     "Internet of Things (IoT)",
//     "Blockchain Technology",
//     "Virtual Reality (VR) and Augmented Reality (AR)",
//     "Robotics",
//     "Systems Engineering",
//     "IT Project Management",
//     "Technical Writing",
//     "User Experience (UX) Design",
//     "Technical Support",
//     "Digital Marketing",
//     "Game Development",
//     "Embedded Systems",
//     "Software Testing and Quality Assurance",
//     "Big Data Analytics"
// ]
