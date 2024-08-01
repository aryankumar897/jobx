
" use client"


import { createContext, useState, useContext } from "react"
import toast from "react-hot-toast"


export const SalarytypeContext = createContext();


export const SalarytypeProvider = ({ children }) => {

    const [name, setName] = useState("")
    const [salarytype, setSalarytype] = useState([])
    const [updatingSalarytype, setUpdatingSalarytype] =  useState(null)



    const createSalarytype = async () => {
        try {


            const response = await fetch(`${process.env.API}/admin/salarytype`, {
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



                toast.success(" salarytype created")
                setName("")
                setSalarytype([data, ...salarytype])
            }



        } catch (err) {

            console.log(err)
            toast.error("an error occurd try again")




        }




    }
    const fetchSalarytype = async () => {

        try {

            const response = await fetch(`${process.env.API}/admin/salarytype`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setSalarytype(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }



    }



    const fetchSalarytypePublic = async () => {

        try {

            const response = await fetch(`${process.env.API}/salarytype`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setSalarytype(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }




    }


    const updateSalarytype = async () => {



        try {

            const response = await fetch(
                `${process.env.API}/admin/salarytype/${updatingSalarytype?._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatingSalarytype),
                }
            );

            const data = await response.json();
            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success('salarytype Updated')
                setUpdatingSalarytype(null)


                setSalarytype(salarytype.map(((t) => t._id === updatingSalarytype._id ? data : t)))

               
                setUpdatingSalarytype(null)

            }





        } catch (err) {


            console.log(err)
            toast.error("an error occurd try again")



        }









    }


    const deleteSalarytype = async () => {


        try {
            const response = await fetch(
                `${process.env.API}/admin/salarytype/${updatingSalarytype?._id}`,
                {
                    method: "DELETE",
                }
            );
            const data = await response.json()

            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success("salarytype deletd")


                setSalarytype(salarytype.filter((t) => t._id !== updatingSalarytype._id))

                setUpdatingSalarytype(null)

            }






        } catch (error) {


            console.log(err)
            toast.error("an error occurd try again")





        }


    }





    return (

        <SalarytypeContext.Provider

            value={{

                name, setName,

                salarytype, setSalarytype,

                updatingSalarytype, setUpdatingSalarytype,

                createSalarytype, fetchSalarytype,
                fetchSalarytypePublic,
                updateSalarytype, deleteSalarytype







            }}





        >

            {children}

        </SalarytypeContext.Provider>
    )



}


export const useSalarytype = () => useContext(SalarytypeContext);