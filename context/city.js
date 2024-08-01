"use  client"


import { createContext, useContext, useState } from "react"
import toast from "react-hot-toast"



export const CityContext = createContext()



export const CityProvider = ({ children }) => {


    const [name, setName] = useState("")
    const [city, setCity] = useState([])
    const [selectedCountryId, setSelectedCountryId] = useState("")
    const [selectedStateId, setSelectedStateId] = useState("")
    const [updatingCity, setUpdatingCity] = useState(null)





    const createCity = async () => {

        try {

            const response = await fetch(`${process.env.API}/admin/city`, {

                method: "POST",
                headers: {
                    "Content-type": "application/json"



                },


                body: JSON.stringify({ name, selectedCountryId, selectedStateId })



            })
            const data = await response.json()


            if (!response.ok) {

                toast.error(data.err)
            } else {


                toast.success("city created")
                setName("")

                setSelectedCountryId("")
                setSelectedStateId("")
                setCity([data, ...city])
                fetchCity()

            }










        } catch (err) {


            console.log(err)



            toast.error("an  error occured try again")

        }









    }





    const fetchCity = async () => {


        try {


            const response = await fetch(`${process.env.API}/admin/city`, {

                method: 'GET',


            })


            const data = await response.json()

            if (!response.ok) {

                toast.error(data.err)
            } else {

                setCity(data)

            }





        } catch (err) {
            console.log(err)



            toast.error("an  error occured try again")

        }










    }



    const fetchCityPublic = async () => {

        try {


            const response = await fetch(`${process.env.API}/city`)


            const data = await response.json()

            if (!response.ok) {

                toast.error(data.err)
            } else {

                setCity(data)

            }





        } catch (err) {
            console.log(err)



            toast.error("an  error occured try again")

        }





    }



    const updateCity = async () => {
        try {




            const response = await fetch(`${process.env.API}/admin/city/${updatingCity?._id}`, {

                method: "PUT",
                headers: {

                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(updatingCity)


            })

            const data = await response.json()
            if (!response.ok) {

                toast.error(data.err)
            } else {

                toast.success("city  updated");

                setUpdatingCity(null)
                setCity(

                    city.map((c) => c._id === updatingCity._id ? data : city)

                )

                setUpdatingCity(null)

                fetchCity()

            }


        } catch (err) {
            console.log(err)



            toast.error("an  error occured try again")
        }


    }




    const deleteCity = async () => {
        try {

            const response = await fetch(`${process.env.API}/admin/city/${updatingCity?._id}`,

                {

                    method: 'DELETE',
                }





            )


            const data = await response.json()
            if (!response.ok) {
                toast.error(data.err)
            } else {

                toast.success("city deleted")
                setCity(
                    city.filter((c) => c._id !== updatingCity?._id)
                )


                setUpdatingCity(null)
            }




        } catch (err) {
            console.log(err)



            toast.error("an  error occured try again")
        }


    }






    return (


        <CityContext.Provider




            value={{
                name, setName, city, setCity, 
                selectedCountryId, setSelectedCountryId,

                selectedStateId, setSelectedStateId,
                updatingCity, setUpdatingCity,
                fetchCity, fetchCityPublic,

                createCity,

                updateCity, deleteCity

            }}

        >

            {children}

        </CityContext.Provider>




    )





}




export const useCity = () => useContext(CityContext)