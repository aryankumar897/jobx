"use client"
import { useState, useEffect } from "react"

import toast from "react-hot-toast";
import { Select } from 'antd';
const { Option } = Select;


export default function Profile() {
   

   









    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="  col   shadow  p-5">
                        <h2 className="mb-1 text-center"> profile</h2>


                        <form 
                        
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



                             //   onSearch={handleSearch}

                                filterOption={false}
                                showSearch


                            >
                                {/* {filteredProfessions.map((profession) => (
                                    <Option key={profession._id} value={profession._id}>
                                        {profession.name}
                                    </Option>
                                ))} */}
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
                               // onChange={handleSkillChanges}
                              //  value={selectedSkill}
                               // onSearch={handleSearch}
                                filterOption={false}
                                showSearch


                            >
                                {/* {filteredSkill.map((skill) => (
                                    <Option key={skill._id} value={skill._id}>
                                        {skill.name}
                                    </Option>
                                ))} */}
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
                              //  onChange={handleLanguageChanges}
                               // value={selectedLanguages}
                               // onSearch={handleSearch}
                                filterOption={false}
                                showSearch
                            >
                                {/* {filteredLanguage.map((language) => (
                                    <Option key={language._id} value={language._id}>
                                        {language.name}
                                    </Option>
                                ))} */}
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


                               // value={status}
                             //   onChange={(e) => setStatus(e.target.value)}
                                
                                
                                >
                                <option value="">Select an  availablbility</option>



                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="available">
                                    available
                                </option>


                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="not available ">
                                    not available
                                </option>


                                {/* Add more options as needed */}
                            </select>


                            <textarea
                                text="text"
                               
                                rows={4}
                                cols={50}
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter Company bio"
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