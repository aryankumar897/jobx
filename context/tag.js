
" use client"


import { createContext, useState, useContext } from "react"
import toast from "react-hot-toast"


export const TagContext = createContext();


export const TagProvider = ({ children }) => {

    const [name, setName] = useState("")
    const [tag, setTag] = useState([])
    const [updatingTag, setUpdatingTag] = useState(null)



    const createTag = async () => {
        try {


            const response = await fetch(`${process.env.API}/admin/tag`, {
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



                toast.success("tag created")
                setName("")
                setTag([data, ...tag])
            }



        } catch (err) {

            console.log(err)
            toast.error("an error occurd try again")




        }




    }
    const fetchTag = async () => {

        try {

            const response = await fetch(`${process.env.API}/admin/tag`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setTag(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }



    }



    const fetchTagPublic = async () => {

        try {

            const response = await fetch(`${process.env.API}/tag`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)

            } else {
                setTag(data);
            }


        } catch (err) {
            console.log(err)
            toast.error("an error occurd try again")


        }




    }


    const updateTag = async () => {



        try {

            const response = await fetch(
                `${process.env.API}/admin/tag/${updatingTag?._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatingTag),
                }
            );

            const data = await response.json();
            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success('tag  Updated')
                setUpdatingTag(null)


                setTag(tag.map(((t) => t._id === updatingTag._id ? data : t)))

                setUpdatingTag(null)



            }





        } catch (err) {


            console.log(err)
            toast.error("an error occurd try again")



        }









    }


    const deleteTag = async () => {


        try {
            const response = await fetch(
                `${process.env.API}/admin/tag/${updatingTag?._id}`,
                {
                    method: "DELETE",
                }
            );
            const data = await response.json()

            if (!response.ok) {

                toast.error(data.err)

            } else {

                toast.success("tag deletd")


                setTag(tag.filter((t) => t._id !== updatingTag._id))

                setUpdatingTag(null)

            }






        } catch (error) {


            console.log(err)
            toast.error("an error occurd try again")





        }


    }





    return (

        <TagContext.Provider

            value={{

                name, setName,

                tag, setTag,

                updatingTag, setUpdatingTag,

                createTag, fetchTag,
                fetchTagPublic,
                updateTag, deleteTag







            }}





        >

            {children}

        </TagContext.Provider>
    )



}


export const useTag = () => useContext(TagContext);