"use client"


import { createContext, useState, useContext } from "react"



import toast from "react-hot-toast"



export const CountryContext = createContext()




export const CountryProvider = ({ children }) => {


    const [name, setName] = useState("")
    const [country, setCountry] = useState([])

    const [updatingCountry, setUpdatingCountry] = useState(null)



    const createCountry = async () => {

        try {

            const response = await fetch(`${process.env.API}/admin/country`, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name })

            })



            const data = await response.json()

            if (!response.ok) {



                toast.error(data.err)

            } else {
                toast.success("country created")

                setName("")
                setCountry([data, ...country]);

            }




        } catch (err) {

            console.log(err)

            toast.error("an error occured. try again")
        }








    }




    const fetchCountry = async () => {

        try {

            const response = await fetch(`${process.env.API}/admin/country`)


            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {

                setCountry(data)

            }


        } catch (err) {
            console.log(err)

            toast.error("an error occured. try again")



        }


    }




    const fetchCountryPublic = async () => {

        try {

            const response = await fetch(`${process.env.API}/country`)


            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {

                setCountry(data)

            }


        } catch (err) {
            console.log(err)

            toast.error("an error occured. try again")



        }



    }





    const updateCountry = async () => {

        try {


            const response = await fetch(`${process.env.API}/admin/country/${updatingCountry?._id}`, {

                method: "PUT",
                headers: { "Content-Type": "application" },
                body: JSON.stringify(updatingCountry)




            })


            const data = await response.json()



            if (!response.ok) {
                toast.error(data.err)
            } else {



                toast.success(" Country updated")
                setUpdatingCountry(null)

                setCountry(


                    country.map((c) => c._id === updatingCountry._id ? data : c)


                )
                setUpdatingCountry(null)


            }





        } catch (err) {
            console.log(err)

            toast.error("an error occured. try again")


        }


    }





    const deleteCountry = async () => {

        try {

            const response = await fetch(`${process.env.API}/admin/country/${updatingCountry?._id}`, {

                method: 'DELETE',
            })





            const data = await response.json()



            if (!response.ok) {
                toast.error(data.err)
            } else {

                toast.success("country deleted")

                setCountry(

                    country.filter((c) => c._id !== updatingCountry._id)



                )


                setUpdatingCountry(null)
            }









        } catch (err) {
            console.log(err)

            toast.error("an error occured. try again")

        }


    }


    return (

        <CountryContext.Provider

            value={{


                name,
                setName, country, setCountry,

                updatingCountry, setUpdatingCountry,
                createCountry,
                fetchCountry,

                fetchCountryPublic,

                updateCountry,
                deleteCountry




            }}




        >

            {children}

        </CountryContext.Provider>


    )


}


export const useCountry = () => useContext(CountryContext)