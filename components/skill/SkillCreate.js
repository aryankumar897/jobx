"use client"


import { useSkill } from "@/context/skill"

import { MdOutlineClear } from "react-icons/md";

import { MdOutlineDeleteOutline } from "react-icons/md";

export default function SkillCreate() {
    const {
        name,
        setName,
        updatingSkill,
        setUpdatingSkill,
        createSkill,
        updateSkill,
        deleteSkill,

    } = useSkill()





    return (
        <div className="my-5">
            <input
                type="text"
                value={updatingSkill ? updatingSkill?.name : name}

                onChange={(e) => updatingSkill ? setUpdatingSkill({ ...updatingSkill, name: e.target.value }) :

                    setName(e.target.value)



                }


                className=" p-2 my-2"
                style={{ outline: "none" }}
            />
            <div className="d-flex justify-content-between">
                <button


                    style={{ backgroundColor: "green" }}

                    className={`btn bg-${updatingSkill ? "info" : "green"
                        } text-light`}

                    onClick={(e) => {
                        e.preventDefault();
                        updatingSkill ? updateSkill() : createSkill()



                    }}




                >
                    {updatingSkill ? "update" : "create"}
                </button>

                {updatingSkill && (
                    <>
                        <button
                            className={`btn bg-danger text-light`}
                            onClick={(e) => {
                                e.preventDefault();
                                deleteSkill();
                            }}
                        >
                            <MdOutlineDeleteOutline />
                        </button>

                        <button
                            className="btn bg-success text-light"
                            onClick={() => setUpdatingSkill(null)}
                        >
                            <MdOutlineClear />
                        </button>
                    </>
                )}
            </div>
        </div>










    )




}



// skills = [
//     "Python",
//     "Java",
//     "JavaScript",
//     "HTML/CSS",
//     "SQL",
//     "Project Management",
//     "Data Analysis",
//     "Machine Learning",
//     "Digital Marketing",
//     "SEO",
//     "Content Writing",
//     "Graphic Design",
//     "UX/UI Design",
//     "Web Development",
//     "Mobile App Development",
//     "Cloud Computing",
//     "DevOps",
//     "Cybersecurity",
//     "Business Analysis",
//     "Financial Modeling",
//     "Salesforce",
//     "Customer Service",
//     "Human Resources",
//     "Public Relations",
//     "Copywriting",
//     "Accounting",
//     "Leadership",
//     "Team Management",
//     "Agile Methodologies",
//     "Scrum Master",
//     "Product Management",
//     "Microsoft Office Suite",
//     "Adobe Creative Suite",
//     "R",
//     "MATLAB",
//     "SAP",
//     "Tableau",
//     "Big Data",
//     "Blockchain",
//     "Networking",
//     "Technical Support",
//     "Software Testing",
//     "Quality Assurance",
//     "IT Management",
//     "Supply Chain Management",
//     "Foreign Languages",
//     "Teaching",
//     "Health and Safety"
// ]
