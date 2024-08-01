"use client"



import { createContext, useState, useContext } from "react"
import toast from "react-hot-toast"



export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {

    const [name, setName] = useState("")
   

    const [language, setLanguage] = useState([])

    const [updatingLanguage, setUpdatingLanguage] = useState(null)


    const createLanguage = async () => {

        try {


            const response = await fetch(`${process.env.API}/admin/language`, {

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
                toast.success("language  Created");
                setName("")

                setLanguage([data, ...language])
                fetchLanguage()

            }



        } catch (err) {

            console.log(err)

            toast.error("an arror  occured .try again")

        }




    }


    const fetchLanguage = async () => {

        try {

            const response = await fetch(`${process.env.API}/admin/language`)

            const data = await response.json();


            if (!response.ok) {
                toast.error(data.err)
            } else {

                setLanguage(data)


            }

        } catch (err) {
            console.log(err)

            toast.error("an arror  occured .try again")
        }

    }




    const fetchLanguagePublic = async () => {


        try {

            const response = await fetch(`${process.env.API}/language`)

            const data = await response.json();


            if (!response.ok) {
                toast.error(data.err)
            } else {

                setLanguage(data)


            }

        } catch (err) {
            console.log(err)

            toast.error("an arror  occured .try again")
        }

    }

    const updateLanguage = async () => {
        const response = await fetch(`${process.env.API}/admin/language/${updatingLanguage?._id}`, {

            method: "PUT",
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify(updatingLanguage)

        })




        const data = await response.json()

        if (!response.ok) {
            toast.error(data.err)


        } else {
            toast.success("industry updated")
            setUpdatingLanguage(null)


            setUpdatingLanguage(

                language.map((i) => i._id === updatingLanguage?._id ? data : i)


            )

            setUpdatingLanguage(null)
            fetchLanguage()
        }

    }



    const deleteLanguage = async () => {

        try {

            const response = await fetch(`${process.env.API}/admin/language/${updatingLanguage?._id}`, {

                method: 'DELETE',


            })

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)
            } else {

                toast.success("language deleted")

                setLanguage(
                    language.filter((i) => i._id !== updatingLanguage._id)


                )

                setUpdatingLanguage(null)

            }






        } catch (err) {
            console.log(err)

            toast.error("an error  occured  try again")



        }

    }


    return (

        <LanguageContext.Provider

            value={{

                name, setName, 
               language,
                setLanguage,
                updatingLanguage, 
                setUpdatingLanguage,


                createLanguage,
                fetchLanguage,
                fetchLanguagePublic,
                updateLanguage,
                deleteLanguage


            }}



        >

            {children}

        </LanguageContext.Provider>




    )






}


export const useLanguage = () => useContext(LanguageContext)