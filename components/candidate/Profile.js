"use client"
import { useState, useEffect } from "react"

import toast from "react-hot-toast";
import { Select } from 'antd';
const { Option } = Select;
import { useSkill } from "@/context/skill"
import { useLanguage } from "@/context/language";


import { useProfession } from "@/context/profession"

export default function Profile() {
    const [loading, setLoading] = useState(false)

    const [gender, setGender] = useState('')

    const [maritalStatus, setMaritalStatus] = useState()
    const [bio, setBio] = useState()
    const [status, setStatus] = useState()

    const [selectedSkill, setSelectedSkill] = useState([])

    const [searchKeyward, setSearchKeyward] = useState("")

    const [selectedLanguages, setSelectedLanguages] = useState([])
    const [selectedProfessions, setSelectedProfessions] = useState([])

    const { fetchSkillPublic, skill } = useSkill()

    const { fetchLanguagePublic, language } = useLanguage()

    const { fetchProfessionPublic, profession } = useProfession()

    console.log({ skill, profession, language })


    useEffect(() => {
        fetchSkillPublic()
        fetchProfessionPublic()
        fetchLanguagePublic()
        fetchData()
    }, [])




 const  fetchData=async()=>{


try {
    


 const  response =await fetch(`${process.env.API}/candidate/profile`)


 if(!response.ok){

    throw new Error("failed to fetch")
 }

 const  data =await response.json()
  
 setGender(data?.candidate?.gender)
setMaritalStatus(data?.candidate?.marital_status)

setBio(data?.candidate?.bio)

    setStatus(data?.candidate?.status)

setSelectedProfessions(data?.candidate?.profession_id.map(p=>p))

setSelectedSkill(data.skill.map(s=>s.skill_id).flat())
setSelectedLanguages(data.language.map(l=>l.lang_id).flat())

} catch (error) {
    console.log(error)
}


 }









    const handleSubmit = async (e) => {
        try {

            e.preventDefault()
            setLoading(true)

            console.log({
                gender,
                maritalStatus,
                status,
                bio,
                selectedLanguages
                , selectedProfessions,
                selectedSkill    })




            const response = await fetch(`${process.env.API}/candidate/profile`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({


                    gender,
                    maritalStatus,
                    status,
                    bio,
                    selectedLanguages
                    , selectedProfessions,
                    selectedSkill




                })

            })



            if(!response.ok){
                toast.error(data?.err)
                setLoading(false)
            }else{
                setLoading(false)
                toast.success("sucessfully profile Updated")
            }






        } catch (error) {
            setLoading(false)
            console.log(error)
        }



    }







    const handleSearch = (value) => {
        setSearchKeyward(value)
    }

    const handleProfessionChanges = (value) => {

        setSelectedProfessions(value)

    }



    const filteredProfessions = profession.filter((p) => p.name.toLowerCase().includes(searchKeyward.toLowerCase()))




    const handleSkillChanges = (value) => {

        setSelectedSkill(value)

    }



    const filteredSkill = skill.filter((p) => p.name.toLowerCase().includes(searchKeyward.toLowerCase()))







    const handleLanguageChanges = (value) => {

        setSelectedLanguages(value)

    }



    const filteredLanguage = language.filter((p) => p.name.toLowerCase().includes(searchKeyward.toLowerCase()))



    return (
        <main>
            <div className="container">
              
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="  col   shadow  p-5">
                        <h2 className="mb-1 text-center" 
                        
                            style={{

                                color: 'black',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                                padding: '1px'
                            }}
                        
                        >  profile  section</h2>


                        <form
                            onSubmit={handleSubmit}
                        >






                            <select
                                className=" mb-4"
                                placeholder="Enter your gender name"

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

                                value={gender}
                                onChange={(e) => setGender(e.target.value)}


                            >


                                <option value="">Select gender*</option>



                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="male">
                                    male
                                </option>


                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="female">
                                    female
                                </option>


                                {/* Add more options as needed */}
                            </select>




                            <select
                                className=" mb-4"
                                placeholder="Enter your gender name"

                                style={{
                                    width: 'calc(100% - 20px)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    outline: "none",
                                    color: '#333',
                                    fontSize: '15px',
                                    appearance: 'none', // Hide the default arrow icon
                                }}

                                value={maritalStatus}
                                onChange={(e) => setMaritalStatus((e.target.value))}


                            >
                                <option value="">Select and marital status</option>



                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="married">
                                    married
                                </option>


                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="single">
                                    single
                                </option>


                                {/* Add more options as needed */}
                            </select>





                            {/* Add more options  for  profession */}







                            {/* Add more options  for  profession */}



                            <Select
                                className=" mb-4"
                                mode="multiple"
                                style={{
                                    width: 'calc(100% - 20px)',
                                    height: "50px",
                                }}
                                placeholder="Select professions"


                                onChange={handleProfessionChanges}
                                value={selectedProfessions}
                                onSearch={handleSearch}

                                filterOption={false}
                                showSearch


                            >
                                {filteredProfessions.map((profession) => (
                                    <Option key={profession._id} value={profession._id}>
                                        {profession.name}
                                    </Option>
                                ))}
                            </Select>

                            {/* select  skills */}




                            <Select
                                className=" mb-4 "
                                mode="multiple"
                                style={{
                                    width: 'calc(100% - 20px)',
                                    height: "50px",



                                }}
                                placeholder="Select skills"
                                onChange={handleSkillChanges}
                                value={selectedSkill}
                                onSearch={handleSearch}
                                filterOption={false}
                                showSearch


                            >
                                {filteredSkill.map((skill) => (
                                    <Option key={skill._id} value={skill._id}>
                                        {skill.name}
                                    </Option>
                                ))}
                            </Select>





                            {/* select language */}
                            <Select
                                className=" mb-4"
                                mode="multiple"
                                style={{
                                    width: 'calc(100% - 20px)',
                                    height: "50px",
                                }}
                                placeholder="Select language"
                                onChange={handleLanguageChanges}
                                value={selectedLanguages}
                                onSearch={handleSearch}
                                filterOption={false}
                                showSearch
                            >
                                {filteredLanguage.map((language) => (
                                    <Option key={language._id} value={language._id}>
                                        {language.name}
                                    </Option>
                                ))}
                            </Select>





                            <select
                                className=" mb-4"
                                placeholder="Enter your gender name"

                                style={{
                                    width: 'calc(100% - 20px)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    outline: "none",
                                    fontSize: '15px',
                                    appearance: 'none', // Hide the default arrow icon
                                }}


                                value={status}
                                onChange={(e) => setStatus(e.target.value)}


                            >
                                <option value="">Select an  availablbility</option>



                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="avaibale">
                                    available
                                </option>


                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="not available">
                                    not available
                                </option>


                                {/* Add more options as needed */}
                            </select>


                            <textarea
                                text="text"

                                rows={8}
                                cols={130}
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter Company bio"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                            />












                            <button
                                type="submit"
 
                            >
                                {loading ? "Please wait.." : "save changes"}
                            </button>
                        </form>



                    </div>
                </div>

            </div>
        </main>
    )

}