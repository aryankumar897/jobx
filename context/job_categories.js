
" use client"


import { createContext, useState, useContext } from "react"
import toast from "react-hot-toast"


export const Job_categoriesContext = createContext();


export const Job_categoriesProvider = ({ children }) => {

    const [icon, setIcon] = useState(null)

    const [name, setName] = useState("")



    const [job_categories, setJob_categories] = useState([])



    const [updatingJob_categories, setUpdatingJob_categories] = useState(null)



    const createJob_categories = async () => {
        try {


            const response = await fetch(`${process.env.API}/admin/job_categories`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, icon }),
            });

            const data = await response.json();

            if (!response.ok) {
                toast.error(data.err)
            } else {



                toast.success(" job category created")
                setName("")
                setIcon(null)
                setJob_categories([data, ...job_categories])
            }



        } catch (err) {

            console.log(err)
            toast.error("an error occurd try again")




        }




    }
    const fetchJob_categories = async () => {

        try {

            const response = await fetch(`${process.env.API}/admin/job_categories`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setJob_categories(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }



    }



    const fetchJob_categoriesPublic = async () => {

        try {

            const response = await fetch(`${process.env.API}/job_categories`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setJob_categories(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }




    }


    const updateJob_categories = async () => {



        try {

            const response = await fetch(
                `${process.env.API}/admin/job_categories/${updatingJob_categories?._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatingJob_categories),
                }
            );

            const data = await response.json();
            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success('job categry Updated')
                setUpdatingJob_categories(null)


                setJob_categories(job_categories.map(((t) => t._id === updatingJob_categories._id ? data : t)))

                setUpdatingJob_categories(null)



            }





        } catch (err) {


            console.log(err)
            toast.error("an error occurd try again")



        }









    }


    const deleteJob_categories = async () => {


        try {
            const response = await fetch(
                `${process.env.API}/admin/job_categories/${updatingJob_categories?._id}`,
                {
                    method: "DELETE",
                }
            );
            const data = await response.json()

            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success("job categories deletd")


                setJob_categories(job_categories.filter((t) => t._id !== updatingJob_categories._id))

                setUpdatingJob_categories(null)

            }






        } catch (error) {


            console.log(err)
            toast.error("an error occurd try again")





        }


    }





    return (

        <Job_categoriesContext.Provider

            value={{
                icon, setIcon,
                name, setName,

                job_categories, setJob_categories,

                updatingJob_categories, setUpdatingJob_categories,

                createJob_categories, fetchJob_categories,
                fetchJob_categoriesPublic,
                updateJob_categories, deleteJob_categories







            }}





        >

            {children}

        </Job_categoriesContext.Provider>
    )



}


export const useJob_category = () => useContext(Job_categoriesContext);