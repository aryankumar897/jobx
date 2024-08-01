"use client"


import { useTag } from "@/context/tag"

import { MdOutlineClear } from "react-icons/md";

import { MdOutlineDeleteOutline } from "react-icons/md";

export default function TagCreate() {
    const {
        name,
        setName,
        updatingTag,
        setUpdatingTag,
        createTag,
        updateTag,
        deleteTag,

    } = useTag()





    return (
        <div className="my-5">
            <input
                type="text"
                value={updatingTag ? updatingTag?.name : name}

                onChange={(e) => updatingTag ? setUpdatingTag({ ...updatingTag, name: e.target.value }) :

                    setName(e.target.value)



                }


                className=" p-2 my-2"
                style={{ outline: "none" }}
            />
            <div className="d-flex justify-content-between">
                <button


                    style={{ backgroundColor: "green" }}

                    className={`btn bg-${updatingTag ? "info" : "green"
                        } text-light`}

                    onClick={(e) => {
                        e.preventDefault();
                        updatingTag ? updateTag() : createTag()



                    }}




                >
                    {updatingTag ? "update" : "create"}
                </button>

                {updatingTag && (
                    <>
                        <button
                            className={`btn bg-danger text-light`}
                            onClick={(e) => {
                                e.preventDefault();
                                deleteTag();
                            }}
                        >
                            <MdOutlineDeleteOutline />
                        </button>

                        <button
                            className="btn bg-success text-light"
                            onClick={() => setUpdatingTag(null)}
                        >
                            <MdOutlineClear />
                        </button>
                    </>
                )}
            </div>
        </div>










    )




}




// const jobTags = [
//     // Job Roles
//     "Software Developer",
//     "Data Scientist",
//     "Product Manager",
//     "Graphic Designer",
//     "Marketing Specialist",
//     "Sales Executive",
//     "Customer Support",
//     "Human Resources",
//     "Project Manager",
//     "Content Writer",
//     "Business Analyst",
//     "Financial Analyst",
//     "IT Support",
//     "Operations Manager",
//     "UX/UI Designer",
//     "Network Engineer",
//     "Database Administrator",
//     "Quality Assurance",
//     "Legal Advisor",
//     "Research Scientist",

//     // Industries
//     "Technology",
//     "Healthcare",
//     "Finance",
//     "Education",
//     "Retail",
//     "Manufacturing",
//     "Hospitality",
//     "Construction",
//     "Transportation",
//     "Telecommunications",
//     "Media",
//     "Entertainment",
//     "Real Estate",
//     "Energy",
//     "Public Sector",
//     "Non-Profit",
//     "Aerospace",
//     "Automotive",
//     "Pharmaceuticals",
//     "Agriculture",

//     // Skills
//     "JavaScript",
//     "Python",
//     "Java",
//     "SQL",
//     "HTML",
//     "CSS",
//     "Machine Learning",
//     "Digital Marketing",
//     "SEO",
//     "Data Analysis",
//     "Project Management",
//     "Public Speaking",
//     "Copywriting",
//     "Graphic Design",
//     "Networking",
//     "Cloud Computing",
//     "Cybersecurity",
//     "Agile Methodology",
//     "Scrum",
//     "Negotiation",

//     // Locations
//     "New York",
//     "San Francisco",
//     "Los Angeles",
//     "Chicago",
//     "Houston",
//     "Miami",
//     "Seattle",
//     "Boston",
//     "Austin",
//     "Denver",
//     "Washington, D.C.",
//     "Atlanta",
//     "Philadelphia",
//     "Phoenix",
//     "Dallas",
//     "San Diego",
//     "San Jose",
//     "Las Vegas",
//     "Portland",
//     "Orlando",

//     // Employment Types
//     "Full-Time",
//     "Part-Time",
//     "Contract",
//     "Temporary",
//     "Freelance",
//     "Internship",
//     "Remote",
//     "On-site",
//     "Hybrid"
// ];
