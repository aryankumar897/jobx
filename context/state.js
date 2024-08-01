
"use client"

import { createContext, useState, useContext } from "react"



import toast from "react-hot-toast"



export const StateContext = createContext()


export const StateProvider = ({ children }) => {

    const [statename, setStateName] = useState("")

    const [state, setState] = useState([])

    const [selectedCountryId, setSelectedCountryId] = useState("")

    const [updatingState, setUpdatingState] = useState(null)



    const createState = async () => {

        try {


            const response = await fetch(`${process.env.API}/admin/state`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ statename, selectedCountryId })



            })



            const data = await response.json()


            if (!response.ok) {

                toast.error(data.err)
            } else {

                toast.success("State created")

                setStateName("")
                setState([data, ...state])



            }






        } catch (err) {

            console.log(err)



            toast.error("an  error occured try again")

        }


    }

    const fetchState = async () => {

        try {


            const response = await fetch(`${process.env.API}/admin/state`)

            const data = await response.json()


            if (!response.ok) {
                toast.error(data.err)
            } else {


                setState(data)

            }






        } catch (err) {

            console.log(err)
            toast.error("an  error occured try again")
        }



    }


    const fetchStatePublic = async () => {
        try {


            const response = await fetch(`${process.env.API}/state`)

            const data = await response.json()


            if (!response.ok) {
                toast.error(data.err)
            } else {


                setState(data)

            }






        } catch (err) {

            console.log(err)
            toast.error("an  error occured try again")



        }




    }





    const updateState = async () => {
        try {

            const response = await fetch(`${process.env.API}/admin/state/${updatingState?._id}`, {

                method: "PUT",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(updatingState),



            })

            const data = await response.json();

            if (!response.ok) {
                toast.error(data.err)
            } else {

                toast.success("state updated successfully")
                setUpdatingState(null)

                setState(

                    state.map((s) => s._id === updatingState._id ? data : s)


                )


                setUpdatingState(null)

            }


        } catch (err) {
            console.log(err)
            toast.error("an  error occured try again")

        }



    }




    const deleteState = async () => {

        try {


            const response = await fetch(`${process.env.API}/admin/state/${updatingState?._id}`,{

method: "DELETE"


            })




 const data= await response.json()


 if(!response.ok){
toast.error(data.err)

 }else{

toast.success("stste deleted")

setState( 

state.filter((s)=>  s._id!==updatingState._id      )

)


setUpdatingState(null)


 }




        } catch (err) {
            console.log(err)
            toast.error("an  error occured try again")

        }


    }





    return (

        <StateContext.Provider

            value={{

                statename,
                setStateName,

                selectedCountryId, setSelectedCountryId,

                state, setState,

                updatingState, setUpdatingState,
                createState, fetchState, fetchStatePublic, updateState, deleteState





            }}





        >






            {children}
        </StateContext.Provider>



    )





}



export const useStat = () => useContext(StateContext)