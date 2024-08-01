
" use client"


import { createContext, useState, useContext } from "react"
import toast from "react-hot-toast"


export const ProfessionContext = createContext();


export const ProfessionProvider = ({ children }) => {

    const [name, setName] = useState("")
    const [profession, setProfession] = useState([])
    const [updatingProfession, setUpdatingProfession] = useState(null)



    const createProfession = async () => {
        try {


            const response = await fetch(`${process.env.API}/admin/profession`, {
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



                toast.success("skill created")
                setName("")
                setProfession([data, ...profession])
            }



        } catch (err) {

            console.log(err)
            toast.error("an error occurd try again")




        }




    }
    const fetchProfession = async () => {

        try {

            const response = await fetch(`${process.env.API}/admin/profession`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setProfession(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }



    }



    const fetchProfessionPublic = async () => {

        try {

            const response = await fetch(`${process.env.API}/profession`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setProfession(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }




    }


    const updateProfession = async () => {



        try {

            const response = await fetch(
                `${process.env.API}/admin/profession/${updatingProfession?._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatingProfession),
                }
            );

            const data = await response.json();
            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success('profession Updated')
                setUpdatingProfession(null)


                setProfession(profession.map(((t) => t._id === updatingProfession._id ? data : t)))

                setUpdatingProfession(null)



            }





        } catch (err) {


            console.log(err)
            toast.error("an error occurd try again")



        }









    }


    const deleteProfession = async () => {


        try {
            const response = await fetch(
                `${process.env.API}/admin/profession/${updatingProfession?._id}`,
                {
                    method: "DELETE",
                }
            );
            const data = await response.json()

            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success("profession deletd")


                setProfession(profession.filter((t) => t._id !== updatingProfession._id))

                setUpdatingProfession(null)

            }






        } catch (error) {


            console.log(err)
            toast.error("an error occurd try again")





        }


    }





    return (

        <ProfessionContext.Provider

            value={{

                name, setName,

                profession, setProfession,

                updatingProfession, setUpdatingProfession,

                createProfession, fetchProfession,
                fetchProfessionPublic,
                updateProfession, deleteProfession



            }}





        >

            {children}

        </ProfessionContext.Provider>
    )



}


export const useProfession = () => useContext(ProfessionContext);