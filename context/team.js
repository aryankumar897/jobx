
" use client"


import { createContext, useState, useContext } from "react"
import toast from "react-hot-toast"


export const TeamContext = createContext();


export const TeamProvider = ({ children }) => {

    const [name, setName] = useState("")
    const [team, setTeam] = useState([])
    const [updatingTeam, setUpdatingTeam] = useState(null)



    const createTeam = async () => {
        try {


            const response = await fetch(`${process.env.API}/admin/team`, {
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



                toast.success("team created")
                setName("")
                setTeam([data, ...team])
            }



        } catch (err) {

            console.log(err)
            toast.error("an error occurd try again")




        }




    }
    const fetchTeam = async () => {

        try {

            const response = await fetch(`${process.env.API}/admin/team`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setTeam(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }



    }



    const fetchTeamPublic = async () => {

        try {

            const response = await fetch(`${process.env.API}/team`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setTeam(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }




    }


    const updateTeam = async () => {



        try {

            const response = await fetch(
                `${process.env.API}/admin/team/${updatingTeam?._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatingTeam),
                }
            );

               const data=await response.json();
            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success('team Updated')
                setUpdatingTeam(null)


                setTeam(team.map(((t) => t._id === updatingTeam._id ? data : t)))

                setUpdatingTeam(null)



            }





        } catch (err) {


            console.log(err)
            toast.error("an error occurd try again")



        }









    }


    const deleteTeam = async () => {


        try {
            const response = await fetch(
                `${process.env.API}/admin/team/${updatingTeam?._id}`,
                {
                    method: "DELETE",
                }
            );
            const data = await response.json()

            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success("team deletd")


                setTeam(team.filter((t) => t._id !== updatingTeam._id))

                setUpdatingTeam(null)

            }






        } catch (error) {


            console.log(err)
            toast.error("an error occurd try again")





        }


    }





    return (

        <TeamContext.Provider

            value={{

                name, setName,

                team, setTeam,

                updatingTeam, setUpdatingTeam,

                createTeam, fetchTeam,
                fetchTeamPublic, updateTeam, deleteTeam







            }}





        >

            {children}

        </TeamContext.Provider>
    )



}


export const useTeam = () => useContext(TeamContext);