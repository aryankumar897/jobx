
" use client"


import { createContext, useState, useContext } from "react"
import toast from "react-hot-toast"


export const SkillContext = createContext();


export const SkillProvider = ({ children }) => {

    const [name, setName] = useState("")
    const [skill, setSkill] = useState([])
    const [updatingSkill, setUpdatingSkill] = useState(null)



    const createSkill= async () => {
        try {


            const response = await fetch(`${process.env.API}/admin/skill`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name }),
            });

            const data = await response.json();

            if (!response.ok) {
                toast.error(data.err)
            } else {



                toast.success("skill created")
                setName("")
                setSkill([data, ...skill])
            }



        } catch (err) {

            console.log(err)
            toast.error("an error occurd try again")




        }




    }
    const fetchSkill = async () => {

        try {

            const response = await fetch(`${process.env.API}/admin/skill`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setSkill(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }



    }



    const fetchSkillPublic = async () => {

        try {

            const response = await fetch(`${process.env.API}/skill`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setSkill(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }




    }


    const updateSkill = async () => {



        try {

            const response = await fetch(
                `${process.env.API}/admin/skill/${updatingSkill?._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatingSkill),
                }
            );

            const data = await response.json();
            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success('skill Updated')
                setUpdatingSkill(null)


                setSkill(skill.map(((t) => t._id === updatingSkill._id ? data : t)))

                setUpdatingSkill(null)



            }





        } catch (err) {


            console.log(err)
            toast.error("an error occurd try again")



        }









    }


    const deleteSkill = async () => {


        try {
            const response = await fetch(
                `${process.env.API}/admin/skill/${updatingSkill?._id}`,
                {
                    method: "DELETE",
                }
            );
            const data = await response.json()

            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success("skill deletd")


                setSkill(skill.filter((t) => t._id !== updatingSkill._id))

                setUpdatingSkill(null)

            }






        } catch (error) {


            console.log(err)
            toast.error("an error occurd try again")





        }


    }





    return (

        <SkillContext.Provider

            value={{

                name, setName,

                skill, setSkill,

                updatingSkill, setUpdatingSkill,

                createSkill, fetchSkill,
                fetchSkillPublic,
                 updateSkill, deleteSkill







            }}





        >

            {children}

        </SkillContext.Provider>
    )



}


export const useSkill = () => useContext(SkillContext);