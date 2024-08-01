"use client";

import { MdOutlineClear } from "react-icons/md";

import { MdOutlineDeleteOutline } from "react-icons/md";

export default function IndustryCreate() {
    // context
   
    return (
        <div className="my-5">
            <input
                type="text"
            
                className=" p-2 my-2"
                style={{ outline: "none" }}
            />
            <div className="d-flex justify-content-between">
                <button

                    className={`btn bg-${updatingIndustry ? "info" : "primary"
                        } text-light`}
                  
                >
                   create or update
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
    );
}