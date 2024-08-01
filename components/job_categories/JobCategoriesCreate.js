"use client";
import { useJob_category } from "@/context/job_categories";
import IconPicker from 'react-icons-picker';
import React, { useState, useEffect } from 'react';
import { MdOutlineClear } from "react-icons/md";

import { MdOutlineDeleteOutline } from "react-icons/md";

export default function TeamCreate() {

const { 

icon,setIcon,name,setName,updatingJob_categories,
setUpdatingJob_categories,createJob_categories,
updateJob_categories,deleteJob_categories




  }=useJob_category()



 const  handleIconSelect=(icon)=>{



     setIcon(icon);
    

     updatingJob_categories?
         setUpdatingJob_categories({ ...updatingJob_categories, icon: icon })
         : setIcon(icon)



 }

    const handleSave = () => {

        console.log('Selected Icon:', icon);

    };



    return (
        <div className="my-5">




            {updatingJob_categories &&

                <div

                    className="pick mr-5"
                    style={{
                        pointerEvents: 'none',
                        color: 'red',
                        fontSize: "12px"
                    }}   >
                    <IconPicker

                        value={
                            updatingJob_categories ?
                                updatingJob_categories?.icon : icon

                        }
                        color={true}
                        size={34}

                    />
                </div>
            }



            <input
                type="text"
                value={updatingJob_categories ? updatingJob_categories?.name : name}
                onChange={(e) =>
                    updatingJob_categories
                        ? setUpdatingJob_categories({ ...updatingJob_categories, name: e.target.value })
                        : setName(e.target.value)
                }
                className=" p-2 my-2"
                style={{ outline: "none" }}
            />

            <div>
                <IconPicker
                    value={icon}
                    onChange={handleIconSelect}
                    closeOnSelect={true}
                />



            </div>





            <div className="d-flex justify-content-between">
                <button
                    className={`btn bg-${updatingJob_categories ? "info" : "primary"
                        } text-light`}
                    onClick={(e) => {
                        e.preventDefault();
                        updatingJob_categories ? updateJob_categories() : createJob_categories();
                    }}
                >
                    {updatingJob_categories ? "Update" : "Create"}
                </button>

                {updatingJob_categories && (
                    <>
                        <button
                            className={`btn bg-danger text-light`}
                            onClick={(e) => {
                                e.preventDefault();
                                deleteJob_categories();
                            }}
                        >
                            <MdOutlineDeleteOutline />
                        </button>

                        <button
                            className="btn bg-success text-light"
                            onClick={() => setUpdatingJob_categories(null)}
                        >
                            <MdOutlineClear />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}




// const jobCategoryNames = [
//     'Engineering',
//     'Marketing',
//     'Sales',
//     'Finance',
//     'Human Resources',
//     'Customer Support',
//     'IT',
//     'Legal',
//     'Operations',
//     'Product Management',
//     'Design',
//     'Business Development',
//     'Quality Assurance',
//     'Research and Development',
//     'Administration',
//     'Purchasing',
//     'Public Relations',
//     'Supply Chain',
//     'Training and Development',
//     'Logistics',
//     'Consulting'
// ];
