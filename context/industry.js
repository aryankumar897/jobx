"use client"



import { createContext, useState, useContext} from "react"
import toast from "react-hot-toast"



export const IndustryContext = createContext()

export const IndustryProvider = ({ children }) => {

    const [name, setName] = useState("")
    //for fetching all the industry information

    const [industries, setIndustries] = useState([])
    //for update and delete all the industry information
    const [updatingIndustry, setUpdatingIndustry] = useState(null)


    const createIndustry = async () => {

        try {


            const response = await fetch(`${process.env.API}/admin/industry`, {

                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ name })

            })



            const data = await response.json()
             console.log(data)
            if (!response.ok) {
                toast.error(data.err)
            } else {
                toast.success("Industry Created");
                setName("")

                setIndustries([data, ...industries])

            }



        } catch (err) {

            console.log(err)

            toast.error("an arror  occured .try again")

        }




    }


    const fetchIndustries = async () => {

        try {

            const response = await fetch(`${process.env.API}/admin/industry`)

            const data = await response.json();


            if (!response.ok) {
                toast.error(data.err)
            } else {

                setIndustries(data)


            }

        } catch (err) {
            console.log(err)

            toast.error("an arror  occured .try again")
        }

    }




    const fetchIndustriesPublic = async () => {


        try {

            const response = await fetch(`${process.env.API}/industry`)

            const data = await response.json();


            if (!response.ok) {
                toast.error(data.err)
            } else {

                setIndustries(data)


            }

        } catch (err) {
            console.log(err)

            toast.error("an arror  occured .try again")
        }

    }

    const updateIndustry = async () => {
        const response = await fetch(`${process.env.API}/admin/industry/${updatingIndustry?._id}`, {

            method: "PUT",
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify(updatingIndustry)





        })




        const data = await response.json()

        if (!response.ok) {
            toast.error(data.err)


        } else {
            toast.success("industry updated")
            setUpdatingIndustry(null)


            setUpdatingIndustry(

                industries.map((industry) => industry._id === updatingIndustry?._id ? data : industry)


            )

            setUpdatingIndustry(null)

        }

    }



    const deleteIndustry = async () => {

        try {

            const response = await fetch(`${process.env.API}/admin/industry/${updatingIndustry?._id}`, {

                method: 'DELETE',


            })

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)
            } else {

                toast.success("industry deleted")

                setIndustries(
                    industries.filter((industry) => industry._id !== updatingIndustry._id)


                )

                setUpdatingIndustry(null)

            }






        } catch (err) {
            console.log(err)

            toast.error("an error  occured  try again")



        }

    }


    return (

        <IndustryContext.Provider

            value={{

                name, setName, industries, setIndustries,
                updatingIndustry, setUpdatingIndustry,


                createIndustry,
                fetchIndustries,
                fetchIndustriesPublic,
                updateIndustry,
                deleteIndustry


            }}



        >

            {children}

        </IndustryContext.Provider>




    )






}


export const useIndustry = () => useContext(IndustryContext)