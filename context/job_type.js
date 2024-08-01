
" use client"


import { createContext, useState, useContext } from "react"
import toast from "react-hot-toast"


export const JobtypeContext = createContext();


export const JobtypeProvider = ({ children }) => {

    const [name, setName] = useState("")
    const [jobtype,setJobtype] = useState([])
    const [updatingJobtype, setUpdatingJobtype] = useState(null)



    const createJobtype = async () => {
        try {


            const response = await fetch(`${process.env.API}/admin/jobtype`, {
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



                toast.success("jobtype  created")
                setName("")
                setJobtype([data, ...jobtype])
            }



        } catch (err) {

            console.log(err)
            toast.error("an error occurd try again")




        }




    }
    const fetchJobtype = async () => {

        try {

            const response = await fetch(`${process.env.API}/admin/jobtype`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setJobtype(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }



    }



    const fetchJobtypePublic = async () => {

        try {

            const response = await fetch(`${process.env.API}/jobtype`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setJobtype(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }




    }


    const updateJobtype = async () => {



        try {

            const response = await fetch(
                `${process.env.API}/admin/jobtype/${updatingJobtype?._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatingJobtype),
                }
            );

            const data = await response.json();
            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success('jobtype Updated')
                setUpdatingJobtype(null)


                setJobtype(jobtype.map(((t) => t._id === updatingJobtype._id ? data : t)))

               
                setUpdatingJobtype(null)


            }





        } catch (err) {


            console.log(err)
            toast.error("an error occurd try again")



        }









    }


    const deleteJobtype = async () => {


        try {
            const response = await fetch(
                `${process.env.API}/admin/jobtype/${updatingJobtype?._id}`,
                {
                    method: "DELETE",
                }
            );
            const data = await response.json()

            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success("jobtype deletd")


                setJobtype(jobtype.filter((t) => t._id !== updatingJobtype._id))

                setUpdatingJobtype(null)

            }






        } catch (error) {


            console.log(err)
            toast.error("an error occurd try again")





        }


    }





    return (

        <JobtypeContext.Provider

            value={{

                name, setName,

               jobtype, setJobtype,

                updatingJobtype, setUpdatingJobtype,

                createJobtype, fetchJobtype,
                fetchJobtypePublic,
                updateJobtype, deleteJobtype







            }}





        >

            {children}

        </JobtypeContext.Provider>
    )



}


export const useJobtype = () => useContext(JobtypeContext);