"use client"

import { useState, useEffect } from "react"
import { useStat } from "@/context/state"

import { MdOutlineClear } from "react-icons/md";

import { MdOutlineDeleteOutline } from "react-icons/md";

import { useCountry } from "@/context/country";
import { Select }
    from "antd"
const { Option } = Select


export default function StateCreate() {

    const [loading, setLoading] = useState()

    const { fetchCountry, country, setUpdatingCountry } = useCountry()

    console.log(country)

    const {
        statename
        ,
        setStateName,
        selectedCountryId,

        setSelectedCountryId,
        updatingState,
        setUpdatingState,
        createState, updateState, deleteState


    } = useStat()




    useEffect(() => {


        fetchCountry()

    }, [])

  
    console.log("updatingState", updatingState)

    return (
        <div className="my-5">

          

            <div className=" mb-5 ">

            <Select

           
                style={{ width: 500, height: 50 }}
                placeholder="select a country"

                loading={loading}

                value={selectedCountryId}


                    onChange={(value) => {

                        setSelectedCountryId(value);
                        if (updatingState) { // Check if updatingState exists
                            const selectedCountry = country.find((c) => c._id === value);

                            if (selectedCountry) {
                                console.log({ countryId: value, name: selectedCountry.name })
                                setUpdatingState({ ...updatingState, countryId: { _id: value, name: selectedCountry.name } });
                                console.log("seleeeeeeeeeee", { name: selectedCountry.name });
                            }
                        }
                    }}
            >

               
                {country&&   country.map((c)=>(      

      <Option    key={c._id} value={c._id} 
      
  
      
       >    {c.name}      </Option>



  ))}

            </Select>

            </div>

            {country && country.map((c) => (

                <p key={c._id}   >   {updatingState?.countryId._id === c._id ? updatingState?.countryId?.name : ""} </p>

            ))}




            <input
                type="text"
                value={updatingState ? updatingState?.statename : statename}

                onChange={(e) => updatingState ? setUpdatingState({ ...updatingState, statename: e.target.value }) :

                    setStateName(e.target.value)



                }


                className=" p-2 my-2"
                style={{ outline: "none" }}
            />
            <div className="d-flex justify-content-between">
                <button


                    style={{ backgroundColor: "green" }}

                    className={`btn bg-${updatingState ? "info" : "green"
                        } text-light`}

                    onClick={(e) => {
                        e.preventDefault();
                        updatingState ? updateState() : createState()



                    }}




                >
                    {updatingState ? "update" : "create"}
                </button>

                {updatingState && (
                    <>
                        <button
                            className={`btn bg-danger text-light`}
                            onClick={(e) => {
                                e.preventDefault();
                                deleteState();
                            }}
                        >
                            <MdOutlineDeleteOutline />
                        </button>

                        <button
                            className="btn bg-success text-light"
                            onClick={() => setUpdatingState(null)}
                        >
                            <MdOutlineClear />
                        </button>
                    </>
                )}
            </div>
        </div>










    )




}


