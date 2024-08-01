"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Select } from 'antd';
import { useSkill } from "@/context/skill";
const { Option } = Select;
import { DatePicker } from 'antd';
import { useCountry } from "@/context/country";
import { useStat } from "@/context/state";
import moment from "moment"
import { useCity } from "@/context/city";
import { useJob_category } from "@/context/job_categories";
import { useEducation } from "@/context/education";
import { useJobrole } from "@/context/jobrole";


import { useJobtype } from "@/context/job_type";

import { useJobexperience } from "@/context/jobexperiences";
import { useSalarytype } from "@/context/salartype";
import { useTag } from "@/context/tag";





const ben = [
    "Job",
    "Career",
    "Employment",
    "Opportunity",
    "Vacancy",
    "Position",
    "Work",
    "Recruitment",
    "Hiring",
    "Interview",
    "Resume",
    "Salary",
    "Benefits",
    "Skills",
    "Experience",
    "Job search",
    "Job market",
    "Job application",
    "Job satisfaction",
    "Professional development"
]






export default function Jobs({ searchParams }) {

    const id = searchParams?.id;
    console.log("id", id)


    const [title, setTitle] = useState("")
    const [loading, setLoading] = useState(false)
    const [deadline, setDeadline] = useState("")
    const [totalVacancies, setTotalVacancies] = useState("")


    const [selectedCompany, setSelectedCompany] = useState([])
    const [selectedJobCategory, setSelectedJobCategory] = useState("")
    const [allcompany, setAllcompany] = useState([])
    //location
    const [selectedCity, setSelectedCity] = useState("")
    const [selectedCountry, setSelectedCountry] = useState("")
    const [selectedState, setSelectedState] = useState("")
    const [address, setAddress] = useState("")



    //state  for salary details


    const [isSalaryRange, setIsSalaryRange] = useState(true)

    const [minSalary, setMinSalary] = useState("")
    const [maxSalary, setMaxSalary] = useState("")
    const [customSalary, setCustomSalary] = useState("")
    const [selectedSalaryType, setSelectedSalaryType] = useState("")


    //state for  attribute
    const [experience, setExperience] = useState("")

    const [jobRole, setJobRole] = useState("")

    const [education, setEducation] = useState("")

    const [jobType, setJobType] = useState("")

    const [tags, setTags] = useState([])
    const [benefits, setBenefits] = useState([])

    const [skills, setSkills] = useState([])

    const [applicationReceived, setApplicationReceived] = useState('')




    const [highlight, setHighlight] = useState(true)
    const [featured, setFeatured] = useState(false)
    const [description, setDescription] = useState("")

    const [searchKeyword, setSearchKeyword] = useState("")


    const { fetchCountryPublic, country } = useCountry()
    const { fetchStatePublic, state, setState } = useStat()

    const { fetchCityPublic, city, setCity } = useCity()
    const { fetchJob_categoriesPublic, job_categories, setJob_Categories } = useJob_category()

    const { fetchEducationPublic, educations, setEducations } = useEducation()

    const { fetchJobrolePublic, jobrole, setJobrole } = useJobrole()

    const { fetchJobtypePublic, jobtype, setJobtype } = useJobtype()
    const { fetchJobexperiencePublic, jobexperience, setJobexperience } = useJobexperience()

    const { fetchSalarytypePublic, salarytype, setSalarytype } = useSalarytype()

    const { fetchSkillPublic, skill, } = useSkill()

    const { fetchTagPublic, tag, setTag } = useTag()

    console.log("xxxxx", job_categories)

    const [datas, setDatas] = useState("")

    useEffect(() => {
        fetchJobexperiencePublic()
        fetchJob_categoriesPublic()
        fetchData()
        fetchCountryPublic()
        fetchSalarytypePublic()
        fetchJobrolePublic()
        fetchJobtypePublic()
        fetchEducationPublic()
        fetchTagPublic()
        fetchSkillPublic()
    }, [])

    const fetchData = async () => {

        try {


            const response = await fetch(`${process.env.API}/admin/selectcompany`)
            const data = await response.json()
            if (!response.ok) {
                toast.error(date.err)
            } else {
                setAllcompany(data)
            }




        } catch (error) {
            console.log(error)
        }

    }






    const handleJob_categoriesChange = async (e) => {
        const categories = e.target.value

        setSelectedJobCategory(categories)

    }

    const handleSelectCompanyChange = async (e) => {
        const company = e.target.value
        setSelectedCompany(company)

    }

    const handleDateChange = async (value) => {
        setDeadline(value)

    }




    const handleCountryChange = async (e) => {

        try {


            const countryId = e.target.value
            setSelectedCountry(countryId)
            const response = await fetch(`${process.env.API}/state`, {

                method: "POST",
                headers: { "Content-Type": "application/json" },
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


            const stateId = e.target.value
            setSelectedState(stateId)
            const response = await fetch(`${process.env.API}/city`, {

                method: "POST",
                headers: { "Content-Type": "application/json" },

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


    const handleSalaryChange = async (e) => {
        const salary = e.target.value
        setSelectedSalaryType(salary)
    }


    const handleExperienceChange = async (e) => {
        const experience = e.target.value
        setExperience(experience)

    }
    const handleJobroleChange = async (e) => {
        const job = e.target.value
        setJobRole(job)
    }

    const handleJobTypeChange = async (e) => {
        const jobtype = e.target.value
        setJobType(jobtype)
    }



    const handleEducationChange = async (e) => {
        const edu = e.target.value
        setEducation(edu)


    }


    const handleTagChanges = (value) => {
        setTags(value)

    }

    const filteredTag = tag.filter((t) => t.name.toLowerCase().includes(searchKeyword.toLowerCase()))


    const handleBenfitChange = (value) => {
        setBenefits(
            value
        )

    }

    const handleSkillChanges = (value) => {
        setSkills(value)

    }

    const filteredSkill = skill.filter((t) => t.name.toLowerCase().includes(searchKeyword.toLowerCase()))

    const handleDescriptionChange = (value) => {
        setDescription(value)
    }


    const handleHighlightChange = () => {
        setHighlight(!highlight)
        if (!highlight) {
            setFeatured(false)
        }

    }


    const handleFeaturedChange = () => {
        setFeatured(!featured)

        if (!featured) {

            setHighlight(false)

        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {



            console.log({

                title, isSalaryRange, deadline, totalVacancies, 

                selectedJobCategory, selectedCountry, selectedState, selectedCity,
                address, minSalary, maxSalary, customSalary, selectedSalaryType,

                experience, jobRole, jobType, tags, benefits, skills, applicationReceived,
                description








            })



            if (
                !title ||

                !deadline ||
                !totalVacancies ||

                !selectedJobCategory ||
                !selectedCountry ||
                !selectedState ||
                !selectedCity ||
                !address ||
                !description ||
                !selectedSalaryType ||

                !experience ||
                !jobRole ||
                !jobType ||
                !tags ||
                !benefits ||
                !skills ||
                !applicationReceived ||
                (isSalaryRange && (!minSalary || !maxSalary)) ||
                (!isSalaryRange && !customSalary)





            ) {

                toast.error("please fill  all the field")
                return

            }
            setLoading(true)


            const response = await fetch(`${process.env.API}/company/jobs/create/${id}`, {

                method: "PUT",
                headers: {

                    "Content-type": "application/json"

                },


                body: JSON.stringify({
                    highlight, featured,


                    title, isSalaryRange, deadline, totalVacancies, 

                    selectedJobCategory, selectedCountry, selectedState, selectedCity,
                    address, minSalary, maxSalary, customSalary, selectedSalaryType,
                    education,
                    experience, jobRole, jobType, tags, benefits, skills, applicationReceived,
                    description





                })


            })

            const data = await response.json();
            if (!response.ok) {
                toast.error(data?.err)
                setLoading(false)
            } else {
                toast.success("sucessfully update")
                fetchdata()
                setLoading(false)
            }



        } catch (error) {
            console.log(error)
        }




    }


    useEffect(() => {
        fetchdata()
    }, [id])



    const fetchdata = async () => {



        try {

            const response = await fetch(`${process.env.API}/company/jobdetails/${id}`)
            const data = await response.json();

            console.log("dataxxxx", data)

            if (!response.ok) {
                toast.error(data.err)
            } else {
                setDatas(data)

                setTitle(data?.jobs?.title)
                setTotalVacancies(data?.jobs?.vacancies)
                setDeadline(moment(data?.jobs?.deadline))

                setAddress(data?.jobs?.address)
                setMinSalary(data?.jobs?.min_salary)
                setMaxSalary(data?.jobs?.max_salary)
                setCustomSalary(data?.jobs?.custom_salary)
                setIsSalaryRange(data?.jobs?.salary_mode == "range" ? true : false)

                setHighlight(data?.jobs?.highlight)
                setFeatured(data?.jobs?.featured)
                setDescription(data?.jobs?.description)
                setApplicationReceived(data?.jobs?.apply_on)
                setSelectedJobCategory(data?.jobs?.job_category_id)
              //  setSelectedCompany(data?.jobs?.company_id)
                setSelectedCountry(data?.jobs?.country)
                setSelectedState(data?.jobs?.state)
                setSelectedCity(data?.jobs?.city)
                setSelectedSalaryType(data?.jobs?.salary_type_id)

                setExperience(data?.jobs?.jobexperienceid)

                setJobRole(data?.jobs?.job_role_id)
                setEducation(data?.jobs?.educationid)
                setJobType(data?.jobs?.job_type_id)
                setBenefits(data?.benfit?.name.map(name => name).flat())

                setSkills(data?.job_skills?.skill_id.map(skill => skill).flat())
                setTags(data?.job_tag?.tag_id.map(skill => skill).flat())

            }


        } catch (error) {
            console.log(error)
        }

    }












    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="col shadow  p-5">
                        {JSON.stringify({ datas }, null, 4)}
                        <h6 className="mb-4 ">Job details</h6>


                        <div className="container">
                            <div className="row">

                                <form onSubmit={handleSubmit}>

                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Title</label>
                                            <input
                                                type="text"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}



                                                style={{ width: '100%', outline: "none" }}
                                            />
                                        </div>

                                    </div>

                                    <div className="row" >
                                        <div className="col-md-12">

                                            <div className="mb-3">
                                                <label className="form-label">Select Job Category</label>




                                                <select
                                                    className=" mb-4"
                                                    style={{
                                                        width: '100%',
                                                        padding: '5px',
                                                        borderRadius: '5px',

                                                        backgroundColor: '#fff',
                                                        color: '#333',
                                                        fontSize: '15px',
                                                        appearance: 'none',
                                                        outline: "none"
                                                    }}

                                                    value={selectedJobCategory}
                                                    onChange={handleJob_categoriesChange}

                                                >
                                                    <option value="">Select Job Category</option>
                                                    {job_categories && job_categories.map((categories) =>
                                                        <option
                                                            key={categories._id}
                                                            value={categories._id}>
                                                            {categories.name}
                                                        </option>
                                                    )}
                                                </select>





                                            </div>




                                        </div>


                                        {/* <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Select Company</label>





                                                <select
                                                    className=" mb-4"
                                                    style={{
                                                        outline: "none",
                                                        width: '100%',
                                                        padding: '5px',
                                                        borderRadius: '5px',

                                                        backgroundColor: '#fff',
                                                        color: '#333',
                                                        fontSize: '15px',
                                                        appearance: 'none',
                                                    }}


                                                    value={selectedCompany}
                                                    onChange={handleSelectCompanyChange}

                                                >
                                                    <option value="">Select Company</option>
                                                    {allcompany && allcompany.map((company) =>
                                                        <option
                                                            key={company._id}
                                                            value={company._id}>
                                                            {company.name}
                                                        </option>
                                                    )}
                                                </select>






                                            </div>

                                        </div> */}


                                        <div className="col-md-6 " >
                                            <div className="mb-3">
                                                <label className="form-label">Deadline</label>



                                                <DatePicker
                                                    placeholder="Select date of birth"



                                                    onChange={handleDateChange}

                                                    value={deadline}

                                                    style={{
                                                        width: '100%',
                                                        height: '40px',
                                                        fontSize: '16px',
                                                    }}
                                                />


                                            </div>

                                        </div>


                                        <div className="col-md-6" >

                                            <div className="mb-3">
                                                <label className="form-label">Total Vacancies</label>
                                                <input
                                                    type="text"
                                                    value={totalVacancies}
                                                    onChange={(e) => setTotalVacancies(e.target.value)}

                                                    style={{ width: '100%', outline: "none" }}
                                                />
                                            </div>




                                        </div>

                                    </div>




                                    <br />             <h6>   Location</h6>
                                    <div className="row mt-4">
                                        <div className="col">

                                            <div className="row mb-3">
                                                <div className="col">
                                                    <label className="form-label">Country</label>


                                                    <select
                                                        className="mb-4"
                                                        style={{
                                                            width: '100%',
                                                            padding: '10px',
                                                            borderRadius: '5px',

                                                            backgroundColor: '#fff',
                                                            color: '#333',
                                                            fontSize: '15px',
                                                            appearance: 'none',
                                                            outline: "none"
                                                        }}
                                                        value={selectedCountry}
                                                        onChange={handleCountryChange}

                                                    >
                                                        <option value="">Select a country</option>
                                                        {country && country.map((country) =>
                                                            <option
                                                                key={country._id}
                                                                value={country._id}>
                                                                {country.name}
                                                            </option>
                                                        )}
                                                    </select>








                                                </div>
                                                <div className="col">
                                                    <label className="form-label">State</label>
                                                    <select
                                                        className=" mb-4"
                                                        style={{
                                                            width: '100%',
                                                            padding: '10px',
                                                            borderRadius: '5px',

                                                            backgroundColor: '#fff',
                                                            color: '#333',
                                                            fontSize: '15px',
                                                            appearance: 'none',
                                                            outline: "none"
                                                        }}
                                                        value={selectedState}
                                                        onChange={handleStateChange}




                                                    >
                                                        <option value="">Select a state</option>

                                                        {state && state.map((state) =>


                                                            <option
                                                                key={state._id}
                                                                value={state._id}
                                                            >
                                                                {state.statename}
                                                            </option>
                                                        )}

                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label className="form-label">City</label>
                                                    <select
                                                        className="mb-4"
                                                        style={{
                                                            width: '100%',
                                                            padding: '10px',
                                                            borderRadius: '5px',

                                                            backgroundColor: '#fff',
                                                            color: '#333',
                                                            fontSize: '15px',
                                                            appearance: 'none',
                                                            outline: "none"
                                                        }}

                                                        value={selectedCity}
                                                        onChange={(e) => setSelectedCity(e.target.value)}

                                                    >
                                                        <option value="">Select a city</option>
                                                        {city.map((city) => (
                                                            <option
                                                                key={city._id}
                                                                value={city._id}
                                                            >
                                                                {city.name}
                                                            </option>
                                                        ))}
                                                    </select>

                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Address</label>
                                                <textarea
                                                    type="text"


                                                    value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    style={{ width: '100%', outline: "none" }}
                                                />
                                            </div>

                                        </div>
                                    </div>












                                    <br />       <h6> salary details</h6>

                                    <div className="row mt-4">
                                        <div className="col-md-12">





                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3 form-check">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="salaryRangeCheckbox"
                                                            checked={isSalaryRange}
                                                            onChange={() => setIsSalaryRange(!isSalaryRange)}
                                                        />
                                                        <label className="form-check-label" htmlFor="salaryRangeCheckbox">
                                                            Salary Range
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3 form-check">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="customSalaryCheckbox"
                                                            checked={!isSalaryRange}
                                                            onChange={() => setIsSalaryRange(!isSalaryRange)}
                                                        />
                                                        <label className="form-check-label" htmlFor="customSalaryCheckbox">
                                                            Custom Salary
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            {isSalaryRange ? (
                                                <div className="row mb-3">
                                                    <div className="col">
                                                        <label className="form-label">Minimum Salary</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={minSalary}
                                                            onChange={(e) => setMinSalary(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="col">
                                                        <label className="form-label">Maximum Salary</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={maxSalary}
                                                            onChange={(e) => setMaxSalary(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="mb-3">
                                                    <label className="form-label">Custom Salary</label>
                                                    <input
                                                        type="text"
                                                        style={{ outline: "none" }}
                                                        value={customSalary}
                                                        onChange={(e) => setCustomSalary(e.target.value)}
                                                    />
                                                </div>
                                            )}




                                            <div className="mb-3">
                                                <label className="form-label">Select Salary Type</label>





                                                <select
                                                    className=" mb-4"
                                                    style={{
                                                        width: '100%',
                                                        padding: '5px',
                                                        borderRadius: '5px',
                                                        border: '2px solid #ccc',
                                                        backgroundColor: '#fff',
                                                        color: '#333',
                                                        fontSize: '15px',
                                                        appearance: 'none',
                                                        outline: "none"
                                                    }}

                                                    value={selectedSalaryType}
                                                    onChange={handleSalaryChange}

                                                >
                                                    <option value="">Select Salary Type</option>
                                                    {salarytype && salarytype.map((salary) =>
                                                        <option
                                                            key={salary._id}
                                                            value={salary._id}>
                                                            {salary.name}
                                                        </option>
                                                    )}
                                                </select>













                                            </div>

                                        </div>
                                    </div>







                                    {/* attribute */}<br />       <h6> attribute details</h6>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Experience</label>
                                                <select
                                                    className=" mb-4"
                                                    style={{
                                                        width: '100%',
                                                        padding: '5px',
                                                        borderRadius: '5px',
                                                        border: '2px solid #ccc',
                                                        backgroundColor: '#fff',
                                                        color: '#333',
                                                        fontSize: '15px',
                                                        appearance: 'none',
                                                        outline: "none"
                                                    }}
                                                    value={experience}
                                                    onChange={handleExperienceChange}


                                                >
                                                    <option value="">Select a  Experience</option>
                                                    {jobexperience && jobexperience.map((experience) =>
                                                        <option
                                                            key={experience._id}
                                                            value={experience._id}>
                                                            {experience.name}
                                                        </option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Job Role</label>
                                                {/* <select
                                                    value={jobRole}
                                                    onChange={(e) => setJobRole(e.target.value)}
                                                    className="form-control"
                                                >
                                                    <option value="">Select Job Role</option>
                                                    <option value="Software Engineer">Software Engineer</option>
                                                    <option value="Data Analyst">Data Analyst</option>
                                                    <option value="Product Manager">Product Manager</option>
                                                </select> */}




                                                <select
                                                    className=" mb-4"
                                                    style={{
                                                        width: '100%',
                                                        padding: '5px',
                                                        borderRadius: '5px',
                                                        border: '2px solid #ccc',
                                                        backgroundColor: '#fff',
                                                        color: '#333',
                                                        fontSize: '15px',
                                                        appearance: 'none',
                                                        outline: "none"
                                                    }}

                                                    value={jobRole}
                                                    onChange={handleJobroleChange}

                                                >
                                                    <option value="">Select a  Job Role</option>
                                                    {jobrole && jobrole.map((jobs) =>
                                                        <option
                                                            key={jobs._id}
                                                            value={jobs._id}>
                                                            {jobs.name}
                                                        </option>
                                                    )}
                                                </select>








                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Education</label>





                                                <select
                                                    className=" mb-4"
                                                    style={{
                                                        width: '100%',
                                                        padding: '5px',
                                                        borderRadius: '5px',
                                                        border: '2px solid #ccc',
                                                        backgroundColor: '#fff',
                                                        color: '#333',
                                                        fontSize: '15px',
                                                        appearance: 'none',
                                                        outline: "none"
                                                    }}
                                                    value={education}
                                                    onChange={handleEducationChange}



                                                >
                                                    <option value="">Select a Education</option>
                                                    {educations && educations.map((education) =>
                                                        <option
                                                            key={education._id}
                                                            value={education._id}>
                                                            {education.name}
                                                        </option>
                                                    )}
                                                </select>









                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Job Type</label>




                                                <select
                                                    className=" mb-4"
                                                    style={{
                                                        width: '100%',
                                                        padding: '5px',
                                                        borderRadius: '5px',

                                                        backgroundColor: '#fff',
                                                        color: '#333',
                                                        fontSize: '15px',
                                                        appearance: 'none',
                                                        outline: "none"
                                                    }}

                                                    value={jobType}
                                                    onChange={handleJobTypeChange}
                                                >
                                                    <option value="">Select a Job Type</option>
                                                    {jobtype && jobtype.map((education) =>
                                                        <option
                                                            key={education._id}
                                                            value={education._id}>
                                                            {education.name}
                                                        </option>
                                                    )}
                                                </select>









                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Tags</label>



                                                <Select
                                                    className="mb-4 "
                                                    mode="multiple"
                                                    style={{
                                                        width: 'calc(100% - 20px)',
                                                        height: "50px",
                                                    }}
                                                    placeholder="Select Tags"


                                                    filterOption={false}
                                                    showSearch
                                                    value={tags}
                                                    onChange={handleTagChanges}


                                                >
                                                    {filteredTag.map((tag) => (
                                                        <Option key={tag._id} value={tag._id}>
                                                            {tag.name}
                                                        </Option>
                                                    ))}
                                                </Select>







                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Benefits</label>


                                                <Select
                                                    className=" mb-4 "
                                                    mode="multiple"
                                                    style={{
                                                        width: 'calc(100% - 20px)',
                                                        height: "50px",



                                                    }}
                                                    placeholder="Select skills"


                                                    filterOption={false}
                                                    showSearch

                                                    value={benefits}
                                                    onChange={handleBenfitChange}


                                                >
                                                    {ben.map((b) => (
                                                        <Option key={b} value={b}>
                                                            {b}
                                                        </Option>
                                                    ))}
                                                </Select>



                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Skills</label>

                                                <Select
                                                    className=" mb-4 "
                                                    mode="multiple"
                                                    style={{
                                                        width: 'calc(100% - 20px)',
                                                        height: "50px",



                                                    }}
                                                    placeholder="Select skills"


                                                    filterOption={false}
                                                    showSearch


                                                    value={skills}
                                                    onChange={handleSkillChanges}


                                                >
                                                    {filteredSkill.map((skill) => (
                                                        <Option key={skill._id} value={skill._id}>
                                                            {skill.name}
                                                        </Option>
                                                    ))}
                                                </Select>

                                            </div>
                                        </div>
                                    </div>



                                    <br />       <h6>Application  details</h6>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Application Received</label>
                                                <select
                                                    value={applicationReceived}
                                                    onChange={(e) => setApplicationReceived(e.target.value)}

                                                    style={{ outline: "none" }}
                                                >
                                                    <option value="">Select Option</option>
                                                    <option value="app">On Platform</option>
                                                    <option value="email">Email</option>
                                                    <option value="custom_url">
                                                        Custom_url
                                                    </option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>




                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="highlightCheckbox"
                                                    checked={highlight}
                                                    onChange={handleHighlightChange}
                                                />
                                                <label className="form-check-label" htmlFor="highlightCheckbox">
                                                    Highlight
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="featuredCheckbox"
                                                    checked={featured}
                                                    onChange={handleFeaturedChange}
                                                />
                                                <label className="form-check-label" htmlFor="featuredCheckbox">
                                                    Featured
                                                </label>
                                            </div>
                                        </div>
                                    </div>




                                    <div className="row mt-5">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Description</label>
                                                <ReactQuill

                                                    value={description}
                                                    onChange={handleDescriptionChange}
                                                    modules={{ toolbar: true }}
                                                    theme="snow"
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <button
                                        type="submit"


                                    >
                                      update  Job Details
                                    </button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}