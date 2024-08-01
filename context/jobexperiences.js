
" use client"


import { createContext, useState, useContext } from "react"
import toast from "react-hot-toast"


export const JobexperienceContext = createContext();


export const JobexperienceProvider = ({ children }) => {

    const [name, setName] = useState("")
    const [jobexperience, setJobexperience] = useState([])
    const [updatingJobexperience, setUpdatingJobexperience] = useState(null)



    const createJobexperience = async () => {
        try {


            const response = await fetch(`${process.env.API}/admin/jobexperience`, {
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



                toast.success(" job experience created")
                setName("")
                setJobexperience([data, ...jobexperience])
            }



        } catch (err) {

            console.log(err)
            toast.error("an error occurd try again")




        }




    }
    const fetchJobexperience = async () => {

        try {

            const response = await fetch(`${process.env.API}/admin/jobexperience`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setJobexperience(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }



    }



    const fetchJobexperiencePublic = async () => {

        try {

            const response = await fetch(`${process.env.API}/jobexperience`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setJobexperience(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }




    }


    const updateJobexperience = async () => {



        try {

            const response = await fetch(
                `${process.env.API}/admin/jobexperience/${updatingJobexperience?._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatingJobexperience),
                }
            );

            const data = await response.json();
            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success('job experience  Updated')
                setUpdatingJobexperience(null)


                setJobexperience(jobexperience.map(((t) => t._id === updatingJobexperience._id ? data : t)))

                setUpdatingJobexperience(null)



            }





        } catch (err) {


            console.log(err)
            toast.error("an error occurd try again")



        }









    }


    const deleteJobexperience = async () => {


        try {
            const response = await fetch(
                `${process.env.API}/admin/jobexperience/${updatingJobexperience?._id}`,
                {
                    method: "DELETE",
                }
            );
            const data = await response.json()

            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success(" job experience deletd")


                setJobexperience(jobexperience.filter((t) => t._id !== updatingJobexperience._id))

                setUpdatingJobexperience(null)

            }






        } catch (error) {


            console.log(err)
            toast.error("an error occurd try again")





        }


    }





    return (

        <JobexperienceContext.Provider

            value={{

                name, setName,

                jobexperience, setJobexperience,

                updatingJobexperience, setUpdatingJobexperience,

                createJobexperience, fetchJobexperience,
                fetchJobexperiencePublic,
                updateJobexperience, deleteJobexperience







            }}





        >

            {children}

        </JobexperienceContext.Provider>
    )



}


export const useJobexperience = () => useContext(JobexperienceContext);