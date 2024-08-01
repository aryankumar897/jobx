"use client"


import { useTeam } from "@/context/team"

import { MdOutlineClear } from "react-icons/md";

import { MdOutlineDeleteOutline } from "react-icons/md";

export default function IndustryCreate() {
    const {
        name,
        setName,
  updatingTeam,
  setUpdatingTeam,
  createTeam,
  updateTeam,
  deleteTeam

    } = useTeam()





    return (
        <div className="my-5">
            <input
                type="text"
                value={updatingTeam ? updatingTeam?.name : name}

                onChange={(e) => updatingTeam ? setUpdatingTeam({ ...updatingTeam, name: e.target.value }) :

                    setName(e.target.value)



                }


                className=" p-2 my-2"
                style={{ outline: "none" }}
            />
            <div className="d-flex justify-content-between">
                <button


                    style={{ backgroundColor: "green" }}

                    className={`btn bg-${updatingTeam ? "info" : "green"
                        } text-light`}

                    onClick={(e) => {
                        e.preventDefault();
                        updatingTeam ? updateTeam() : createTeam()



                    }}




                >
                    {updatingTeam ? "update" : "create"}
                </button>

                {updatingTeam && (
                    <>
                        <button
                            className={`btn bg-danger text-light`}
                            onClick={(e) => {
                                e.preventDefault();
                                deleteTeam();
                            }}
                        >
                            <MdOutlineDeleteOutline />
                        </button>

                        <button
                            className="btn bg-success text-light"
                            onClick={() => setUpdatingTeam(null)}
                        >
                            <MdOutlineClear />
                        </button>
                    </>
                )}
            </div>
        </div>










    )




}




//  const team =

// [
//     "1-2",
//     "3-4",
//     "5-6",
//     "7-8",
//     "9-10",
//     "11-12",
//     "13-14",
//     "15-16",
//     "17-18",
//     "19-20"
// ];

