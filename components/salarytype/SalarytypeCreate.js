"use client"


import { useSalarytype } from "@/context/salartype"

import { MdOutlineClear } from "react-icons/md";

import { MdOutlineDeleteOutline } from "react-icons/md";

export default function SkillCreate() {
    const {
        name,
        setName,
        updatingSalarytype,
        setUpdatingSalarytype,
        createSalarytype,
        updateSalarytype,
        deleteSalarytype,

    } = useSalarytype()





    return (
        <div className="my-5">
            <input
                type="text"
                value={updatingSalarytype ? updatingSalarytype?.name : name}

                onChange={(e) => updatingSalarytype ? setUpdatingSalarytype({ ...updatingSalarytype, name: e.target.value }) :

                    setName(e.target.value)



                }


                className=" p-2 my-2"
                style={{ outline: "none" }}
            />
            <div className="d-flex justify-content-between">
                <button


                    style={{ backgroundColor: "green" }}

                    className={`btn bg-${updatingSalarytype ? "info" : "green"
                        } text-light`}

                    onClick={(e) => {
                        e.preventDefault();
                        updatingSalarytype ? updateSalarytype() : createSalarytype()



                    }}




                >
                    {updatingSalarytype ? "update" : "create"}
                </button>

                {updatingSalarytype && (
                    <>
                        <button
                            className={`btn bg-danger text-light`}
                            onClick={(e) => {
                                e.preventDefault();
                                deleteSalarytype();
                            }}
                        >
                            <MdOutlineDeleteOutline />
                        </button>

                        <button
                            className="btn bg-success text-light"
                            onClick={() => setUpdatingSalarytype(null)}
                        >
                            <MdOutlineClear />
                        </button>
                    </>
                )}
            </div>
        </div>










    )




}


const salaryTypes = [
    'hourly',
    'monthly',
    'annual',
    'contract',
    'daily',
    'weekly',
    'bi-weekly',
    'commission',
    'stipend',
    'bonus',
    'internship',
    'freelance',
    'part-time',
    'royalty',
    'piecework',
    'sales',
    'performance',
    'residual',
    'grant',
    'scholarship',
    'retainer',
    'endowment'
];

