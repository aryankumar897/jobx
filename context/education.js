
" use client"


import { createContext, useState, useContext } from "react"
import toast from "react-hot-toast"


export const EducationContext = createContext();


export const EducationProvider = ({ children }) => {

    const [name, setName] = useState("")
    const [educations, setEducations] = useState([])
    const [updatingEducation, setUpdatingEducation] = useState(null)



    const createEducation = async () => {
        try {


            const response = await fetch(`${process.env.API}/admin/education`, {
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



                toast.success(" education created")
                setName("")
                setEducations([data, ...educations])
            }



        } catch (err) {

            console.log(err)
            toast.error("an error occurd try again")




        }




    }
    const fetchEducation = async () => {

        try {

            const response = await fetch(`${process.env.API}/admin/education`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setEducations(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }



    }



    const fetchEducationPublic = async () => {

        try {

            const response = await fetch(`${process.env.API}/education`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setEducations(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }




    }


    const updateEducation = async () => {



        try {

            const response = await fetch(
                `${process.env.API}/admin/education/${updatingEducation?._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatingEducation),
                }
            );

            const data = await response.json();
            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success('education Updated')
                setUpdatingEducation(null)


                setEducations(educations.map(((t) => t._id === updatingEducation._id ? data : t)))

                setUpdatingEducation(null)



            }





        } catch (err) {


            console.log(err)
            toast.error("an error occurd try again")



        }









    }


    const deleteEducation = async () => {


        try {
            const response = await fetch(
                `${process.env.API}/admin/education/${updatingEducation?._id}`,
                {
                    method: "DELETE",
                }
            );
            const data = await response.json()

            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success(" education deletd")


                setEducations(educations.filter((t) => t._id !== updatingEducation._id))

                setUpdatingEducation(null)

            }






        } catch (error) {


            console.log(err)
            toast.error("an error occurd try again")





        }


    }





    return (

        <EducationContext.Provider

            value={{

                name, setName,

                educations, setEducations,

                updatingEducation, setUpdatingEducation,

                createEducation, 
                fetchEducation,
                fetchEducationPublic,
                updateEducation,
                 deleteEducation







            }}





        >

            {children}

        </EducationContext.Provider>
    )



}


export const useEducation = () => useContext(EducationContext);