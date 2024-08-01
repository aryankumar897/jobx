"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";
import { useOrganization } from "@/context/organization";
import { useIndustry } from "@/context/industry";
import { useTeam } from "@/context/team";
import { useCountry } from "@/context/country";
import { useStat } from "@/context/state";
import { useCity } from "@/context/city"









export default function FoundingInfo() {


    const router = useRouter();

    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [startDate, setStartDate] = useState(null)
    const [website, setWebsite] = useState("")
    const [loading, setLoading] = useState(false)
    const [map, setMap] = useState("")
    const [address, setAddress] = useState("")


    const [selectedIndustry, setSelectedIndustry] = useState([])
    const [selectedTeam, setSelectedTeam] = useState([])
    const [selectedOrganization, setSelectedOrganization] = useState([])


    const [selectedCountry, setSelectedCountry] = useState([])
    const [selectedState, setSelectedState] = useState([])

    const [selectedCity, setSelectedCity] = useState([])



    const { fetchOrganizationPublic, organization } = useOrganization()
    const { fetchIndustriesPublic, industries } = useIndustry()

    const { fetchTeamPublic, team } = useTeam()
    const { fetchCountryPublic, country } = useCountry()

    const { fetchStatePublic, state, setState } = useStat()

    const { fetchCityPublic, city, setCity } = useCity()

    useEffect(() => {
        fetchIndustriesPublic()
        fetchOrganizationPublic()
        fetchTeamPublic()
        fetchCountryPublic()
        fetchStatePublic()
        fetchCityPublic()
        fetchData()

    }, [])

    console.log("selectedState", selectedState)
    const handleCountryChange = async (e) => {
        try {



            const countryId = e.target.value;
            setSelectedCountry(countryId);

            const response = await fetch(`${process.env.API}/state`, {
                method: 'POST',
                headers: {

                    "Content-Type": "application/json"


                },

                body: JSON.stringify({ countryId })

            })

            const data = await response.json()
            if (!response.ok) {
                toast.error("faild to fetch")
            } else {


                setState(data)


            }




        } catch (error) {
            console.log(error)
        }




    }

    const handleStateChange = async (e) => {

        try {

            const stateId = e.target.value;
            setSelectedState(stateId)
            const response = await fetch(`${process.env.API}/city`, {
                method: 'POST',
                headers: {

                    "Content-Type": "application/json"


                },

                body: JSON.stringify({ stateId })

            })

            const data = await response.json()
            if (!response.ok) {
                toast.error("faild to fetch")
            } else {


                setCity(data)


            }

        } catch (error) {
            console.log(error)
        }

    }





 const fetchData = async() => {

try {
     const  response = await fetch(`${process.env.API}/company/foundinginfo`)

 if(!response.ok){

throw new Error("faield to fetch company data")

 }



    const data = await response.json()
 console.log( "datax"  ,  data)

 setAddress(data.address)


setMap(data.map_link)
setSelectedOrganization(data.organization_type_id)
setSelectedTeam(data.team_type_id)
setSelectedIndustry(data.industry_type_id)
    setStartDate(new Date(data?.establishment_date))

 setEmail(data.email);
 setContact(data.phone);
 setWebsite(data.website);
setSelectedCity(data&&data.city);
setSelectedCountry(data&&data.country);
setSelectedState(data&&data.state);

} catch (error) {
   console.log(error)  
}




 }








    const handleSubmit = async (e) => {
        try {

            e.preventDefault()

            console.log({

                startDate,
                email,
                selectedCountry,
                selectedState,
                selectedCity,
                selectedIndustry,
                selectedOrganization,
                selectedTeam,
                map, address, website, contact



            })




            setLoading(false)

            const response = await fetch(`${process.env.API}/company/foundinginfo`, {
                method: 'POST',
                headers: { 'Content-Type': "application/json" },


                body: JSON.stringify({

                    startDate,
                    email,
                    selectedCountry,
                    selectedState,
                    selectedCity,
                    selectedIndustry,
                    selectedOrganization,
                    selectedTeam,
                    map, address, website, contact



                })





            })




            const data = await response.json();

            if (!response.ok) {
                toast.error(data.err)
                setLoading(false)
            } else {

                toast.success("save change successfully")

         

            }





        } catch (error) {
            console.log(error)
        }



    }




    return (
        <main className="mb-5">
            <div className="container  ">
                <div className="row d-flex justify-content-center align-items-center ">
                    <div className="  col   shadow p-5">
                        <h2 className="mb-4 text-center">Founding info</h2>

                        <form onSubmit={handleSubmit}>






                            <select
                                className=" mb-4"
                                placeholder="Enter your Industry name"

                                style={{
                                    width: 'calc(100% - 20px)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    fontSize: '15px',
                                    appearance: 'none',
                                    outline: "none"
                                }}

                                value={selectedIndustry}
                                onChange={(e) => setSelectedIndustry(e.target.value)}





                            >



                                <option value="">Select an industry Type</option>

                                {industries.map((industry) => (

                                    <option key={industry._id} value={industry._id}>{industry.name}</option>




                                ))}







                                {/* Add more options as needed */}
                            </select>




                            <select
                                className=" mb-4"
                                style={{
                                    width: 'calc(100% - 20px)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    fontSize: '15px',
                                    appearance: 'none',
                                    outline: "none"
                                    // Hide the default arrow icon
                                }}
                                placeholder="Enter your Organization type"

                                value={selectedOrganization}
                                onChange={(e) => setSelectedOrganization(e.target.value)}
                            >
                                <option value="">Select an  Organization type</option>



                                {organization.map((o) => (

                                    <option key={o._id} value={o._id}>{o.name}</option>




                                ))}




                                {/* Add more options as needed */}
                            </select>







                            <select
                                className=" mb-4"
                                placeholder="Enter your Team size"


                                style={{
                                    width: 'calc(100% - 20px)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    fontSize: '15px',
                                    outline: "none",
                                    appearance: 'none', // Hide the default arrow icon
                                }}

                                value={selectedTeam}
                                onChange={(e) => setSelectedTeam(e.target.value)}

                            >
                                <option value="">Select an team size</option>



                                {team.map((t) => (

                                    <option key={t._id} value={t._id}>{t.name}</option>




                                ))}





                                {/* Add more options as needed */}
                            </select>




                            <div className="datePickerContainer">
                                <label for="birthday"> company establishment date</label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="mb-4 
                                  datePickerInput   
                                "

                                    style={{
                                        outline: "none", width: '100% ',

                                        padding: '10px',
                                        borderRadius: '5px',
                                        border: '2px solid #ccc',
                                        backgroundColor: '#fff',

                                    }}

                                />
                            </div>
                            <input
                                type="text"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your website  name"
                            />


                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your email  name"
                            />

                            <input
                                type="tel"

                                value={contact}
                                onChange={(e) => setContact(e.target.value)}

                                className=" mb-4"

                                style={{
                                    outline: "none", width: '100% ',

                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',

                                }}
                                placeholder="Enter your phone  name"
                            />


                            <select
                                className=" mb-4"
                                value={selectedCountry}
                                onChange={handleCountryChange}






                                style={{
                                    width: 'calc(100% - 20px)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    outline: "none",
                                    fontSize: '15px',
                                    appearance: 'none', // Hide the default arrow icon
                                }}


                            >
                                <option value="">Select an country name</option>

                                {country && country.map((c) => (

                                    <option key={c._id} value={c._id}>{c.name}</option>




                                ))}


                                {/* Add more options as needed */}
                            </select>



                            <select
                                value={selectedState}
                                onChange={handleStateChange}


                                className=" mb-4"
                                style={{
                                    width: 'calc(100% - 20px)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    fontSize: '15px',
                                    outline: "none",
                                    appearance: 'none', // Hide the default arrow icon
                                }}


                            >
                                <option value="">Select an state name</option>


                                {state && state.map((s) => (

                                    <option key={s._id} value={s._id}>{s.statename}</option>




                                ))}



                                {/* Add more options as needed */}
                            </select>



                            <select
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}


                                className=" mb-4"
                                style={{
                                    width: 'calc(100% - 20px)',
                                    padding: '10px',
                                    outline: "none",
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    fontSize: '15px',
                                    appearance: 'none',
                                }}

                            >
                                <option value="">Select a city</option>



                                {city && city.map((c) => (

                                    <option key={c._id} value={c._id}>{c.name}</option>




                                ))}





                            </select>








                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}

                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your address  name"
                            />
                            <input
                                type="text"


                                value={map}
                                onChange={(e) => setMap(e.target.value)}


                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your Map link"
                            />

                            <button
                                type="submit"

                            >
                                {loading ? "please wait" : "save changes"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </main>
    );
}
