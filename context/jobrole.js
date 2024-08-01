
" use client"


import { createContext, useState, useContext } from "react"
import toast from "react-hot-toast"


export const JobroleContext = createContext();


export const JobroleProvider = ({ children }) => {

    const [name, setName] = useState("")
    const [jobrole, setJobrole] = useState([])
    const [updatingJobrole, setUpdatingJobrole] = useState(null)



    const createJobrole = async () => {
        try {


            const response = await fetch(`${process.env.API}/admin/jobrole`, {
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



                toast.success("jobrole created")
                setName("")
                setJobrole([data, ...jobrole])
            }



        } catch (err) {

            console.log(err)
            toast.error("an error occurd try again")




        }




    }
    const fetchJobrole = async () => {

        try {

            const response = await fetch(`${process.env.API}/admin/jobrole`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setJobrole(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }



    }



    const fetchJobrolePublic = async () => {

        try {

            const response = await fetch(`${process.env.API}/jobrole`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setJobrole(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }




    }


    const updateJobrole = async () => {



        try {

            const response = await fetch(
                `${process.env.API}/admin/jobrole/${updatingJobrole?._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatingJobrole),
                }
            );

            const data = await response.json();
            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success('job role   Updated')
                setUpdatingJobrole(null)


                setJobrole(jobrole.map(((t) => t._id === updatingJobrole._id ? data : t)))

                setUpdatingJobrole(null)



            }





        } catch (err) {


            console.log(err)
            toast.error("an error occurd try again")



        }









    }


    const deleteJobrole = async () => {


        try {
            const response = await fetch(
                `${process.env.API}/admin/jobrole/${updatingJobrole?._id}`,
                {
                    method: "DELETE",
                }
            );
            const data = await response.json()

            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success("job role deletd")

 
                setJobrole(jobrole.filter((t) => t._id !== updatingJobrole._id))

                setUpdatingJobrole(null)

            }






        } catch (error) {


            console.log(err)
            toast.error("an error occurd try again")





        }


    }





    return (

        <JobroleContext.Provider

            value={{

                name, setName,

                jobrole, setJobrole,

                updatingJobrole, setUpdatingJobrole,

                createJobrole, fetchJobrole,
                fetchJobrolePublic,
                updateJobrole, deleteJobrole







            }}





        >

            {children}

        </JobroleContext.Provider>
    )



}


export const useJobrole = () => useContext(JobroleContext);