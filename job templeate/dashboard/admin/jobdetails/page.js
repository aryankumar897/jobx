// pages/checkout.js
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
import { useCity } from "@/context/city";
import { useJob_category } from "@/context/job_categories";
import moment from 'moment';
import { useEducation } from "@/context/educationssearch";
import { useJobrole } from "@/context/jobrole";
import { useJobtype } from "@/context/job_type";
//import { useJobtype } from "@/context/job_type";
import { useJobexperience } from "@/context/jobexperiences";
import { useSalarytype } from "@/context/salarytype";
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



export default function CheckoutPage({ searchParams }) {
    const [loading, setLoading] = useState(false)
    const [aryan, setAryan] = useState('')
    const id = searchParams?.id
    console.log("params", id)
    const { data, status } = useSession()
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [deadline, setDeadline] = useState('');
    const [totalVacancies, setTotalVacancies] = useState('');
    const [selectedCompany, setSelectedCompany] = useState([]);
    const [selectedJobCategory, setSelectedJobCategory] = useState('');

    //location
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [address, setAddress] = useState('');

    // State for salary details form fields
    const [isSalaryRange, setIsSalaryRange] = useState(true);
    const [minSalary, setMinSalary] = useState('');
    const [maxSalary, setMaxSalary] = useState('');
    const [customSalary, setCustomSalary] = useState('');
    const [selectedSalaryType, setSelectedSalaryType] = useState('');


    // State for sattribute form fields

    const [experience, setExperience] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [education, setEducation] = useState('');
    const [jobType, setJobType] = useState('');
    const [tags, setTags] = useState([]);
    const [benefits, setBenefits] = useState([]);
    const [skills, setSkills] = useState([]);


    const [applicationReceived, setApplicationReceived] = useState('');



    const [highlight, setHighlight] = useState(true);
    const [featured, setFeatured] = useState(false);
    const [description, setDescription] = useState('');

    const [allcompany, setAllcompany] = useState([])
    const [searchKeyword, setSearchKeyword] = useState('');
    const { fetchCountryPublic, country } = useCountry();
    const { fetchStatePublic, state, setState } = useStat();

    const { fetchCityPublic, city, setCity } = useCity();

    const { fetchJob_categoriesPublic, job_categories,
        setJob_categories, } = useJob_category();

    const { fetchEducationPublic, educations, setEducations } = useEducation();
    const { fetchJobrolePublic, jobrole,
        setJobrole, } = useJobrole();

    const { fetchJobtypePublic, jobtype,
        setJobtype, } = useJobtype();




    const { fetchJobexperiencePublic, jobexperience,
        setJobexperience,
    } = useJobexperience();
    const { fetchSalarytypePublic, salarytype,
        setSalarytype,
    } = useSalarytype();
    const { fetchSkillPublic, skill } = useSkill();



    const { fetchTagPublic,
        tag,
        setTag,
    } = useTag();


    useEffect(() => {
        fetchTagPublic()
        // Function to fetch data from MongoDB
        fetchSkillPublic()
        fetchJobtypePublic()
        fetchSalarytypePublic()
        fetchJobexperiencePublic()
        fetchJobrolePublic()
        fetchCountryPublic()
        fetchData()
        fetchJob_categoriesPublic()
        fetchEducationPublic()
        fetchStatePublic()
        fetchCityPublic()
        fetchEducationPublic()

    }, []);


    const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.API}/admin/selectcompany`);
            const data = await response.json();

            if (!response.ok) {
                toast.error(data);
            } else {
                setAllcompany(data);
            }
        } catch (err) {
            console.log(err);
            toast.error("An error occurred. Try again");
        }
    };





    const handleSubmit = async (e) => {
        try {
            e.preventDefault();


            console.log({
                title,
                isSalaryRange,
                deadline,
                totalVacancies,
                selectedCompany,
                selectedJobCategory,
                selectedCountry,
                selectedState,
                selectedCity,
                address,
                minSalary,
                maxSalary,
                customSalary,
                selectedSalaryType,
                experience,
                jobRole,
                education,
                jobType,
                tags,
                benefits,
                skills,
                applicationReceived
            })





            if (
                !title ||
                !deadline ||
                !totalVacancies ||
                !selectedCompany ||
                !selectedJobCategory ||
                !selectedCountry ||
                !selectedState ||
                !selectedCity ||
                !address ||
                (isSalaryRange && (!minSalary || !maxSalary)) ||
                (!isSalaryRange && !customSalary) ||

                !selectedSalaryType ||
                !experience ||
                !jobRole ||
                !education ||
                !jobType ||
                !tags ||
                !benefits ||
                !skills ||
                !applicationReceived ||
                !description
            ) {
                toast.error('Please fill in all fields');
                return
            }


            setLoading(true)


            const response = await fetch(`${process.env.API}/admin/jobs/create/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    highlight,
                    featured,
                    isSalaryRange,
                    title,
                    deadline,
                    totalVacancies,
                    selectedCompany,
                    selectedJobCategory,
                    selectedCountry,
                    selectedState,
                    selectedCity,
                    address,
                    minSalary,
                    maxSalary,
                    customSalary,
                    selectedSalaryType,
                    experience,
                    jobRole,
                    education,
                    jobType,
                    tags,
                    benefits,
                    skills,
                    applicationReceived, description

                }),
            });
            console.log(response)
            const data = await response.json();

            if (!response.ok) {
                toast.error(data.err);
                setLoading(false);
            } else {
                toast.success("success  update");
                router.push("/login");
            }
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };


    const handleHighlightChange = () => {
        setHighlight(!highlight);
        if (!highlight) {
            setFeatured(false);
        }
    };

    const handleFeaturedChange = () => {
        setFeatured(!featured);
        if (!featured) {
            setHighlight(false);
        }
    };
    const handleDescriptionChange = (value) => {
        setDescription(value);
    };






    const handleCountryChange = async (e) => {

        try {
            const countryId = e.target.value;
            setSelectedCountry(countryId);

            const response = await fetch(` ${process.env.API}/state`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ countryId })
            })
            const data = await response.json();
            if (!response.ok) {
                toast.error("failed to fetch")
            } else {
                setState(data)
                toast.success("data  fetch")
            }



        } catch (error) {
            console.log(error)
        }
    }

    const handleStateChange = async (e) => {
        const stateId = e.target.value;
        setSelectedState(stateId);

        try {
            const response = await fetch(`${process.env.API}/city`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ stateId }),
            });
            const data = await response.json();

            if (!response.ok) {
                toast.error(" faild to fetch")
            } else {
                setCity(data)
            }
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };


    const handleJob_categoriesChange = async (e) => {
        const categories = e.target.value;
        setSelectedJobCategory(categories);

    }
    const handleSelcetCompanyChange = async (e) => {
        const company = e.target.value;
        setSelectedCompany(company)

    }
    const handleSlaryTypeChange = async (e) => {
        const salary = e.target.value;
        setSelectedSalaryType(salary)
    }
    const handleExperienceChange = async (e) => {
        const experience = e.target.value;
        setExperience(experience)


    }

    const handleJobroleChange = async (e) => {
        const job = e.target.value;
        setJobRole(job)
    }

    const handleEducatonChange = async (e) => {
        const educat = e.target.value;
        setEducation(educat)
    }


    const handleJobTypeChange = async (e) => {
        const jobtype = e.target.value;
        setJobType(jobtype)
    }




    const handleDateChange = (date) => {
        setDeadline(date); // Update the dob state with the selected date
    };

    const handleSkillChanges = (value) => {
        setSkills(value);
    };

    const filteredSkill = skill.filter((profession) =>
        profession.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );



    const handleTagChanges = (value) => {
        setTags(value);
    };
    const filteredTag = tag.filter((profession) =>
        profession.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );



    const handleBenfitChanges = (value) => {
        setBenefits(value)
    }

















    useEffect(() => {
        fetchdata()
    }, [id])


    const fetchdata = async () => {
        try {

            const response = await fetch(`${process.env.API}/admin/jobdetails/${id}`, {
                method: "GET",
            });

            const data = await response.json();
            console.log("dxxxxx", data)
            if (!response.ok) {
                alert("Error")
                toast.error(data.err);
                setLoading(false);
            } else {
                //   toast.success("fetch data");
                setAryan(data?.job_tag)
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
                setSelectedCompany(data?.jobs?.company_id)

                setSelectedCountry(data?.jobs?.country)
                setSelectedState(data?.jobs?.state)
                setSelectedCity(data?.jobs?.city)
                setSelectedSalaryType(data?.jobs?.salary_type_id)
                setExperience(data?.jobs?.job_experience_id)
                setJobRole(data?.jobs?.job_role_id)
                setEducation(data?.jobs?.education_id)
                setJobType(data?.jobs?.job_type_id)

                setBenefits(data?.benefit?.name.map(name => name).flat())

                setSkills(data?.job_skills?.skill_id.map(skill => skill).flat())
                setTags(data?.job_tag?.tag_id.map(skill => skill).flat())



            }
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    }


    return (
        <>

            <h6 className="text-center"  >
                {JSON.stringify({ aryan }, null, 4)}

            </h6>


            <main>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center h-auto">
                        <div className="col shadow bg-light p-5">
                            <h6 className="mb-4 ">Job details</h6>


                            <div className="container">
                                <div className="row">

                                    <form onSubmit={handleSubmit}>

                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    style={{ width: '100%' }}
                                                />
                                            </div>

                                        </div>

                                        <div className="row" >
                                            <div className="col-md-6">

                                                <div className="mb-3">
                                                    <label className="form-label">Select Job Category</label>




                                                    <select
                                                        className="form-control mb-4"
                                                        style={{
                                                            width: '100%',
                                                            padding: '5px',
                                                            borderRadius: '5px',
                                                            border: '2px solid #ccc',
                                                            backgroundColor: '#fff',
                                                            color: '#333',
                                                            fontSize: '15px',
                                                            appearance: 'none',
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


                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Select Company</label>

                                                    {/* <select
                                                    className="form-select"
                                                    value={selectedCompany}
                                                    onChange={(e) => setSelectedCompany(e.target.value)}
                                                    style={{ width: '100%' }}
                                                >
                                                    <option value="">Select Company</option>
                                                    <option value="company1">Company 1</option>
                                                    <option value="company2">Company 2</option>
                                                    <option value="company3">Company 3</option>
                                                </select> */}



                                                    <select
                                                        className="form-control mb-4"
                                                        style={{
                                                            width: '100%',
                                                            padding: '5px',
                                                            borderRadius: '5px',
                                                            border: '2px solid #ccc',
                                                            backgroundColor: '#fff',
                                                            color: '#333',
                                                            fontSize: '15px',
                                                            appearance: 'none',
                                                        }}
                                                        value={selectedCompany}
                                                        onChange={handleSelcetCompanyChange}
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

                                            </div>


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
                                                        className="form-control"
                                                        value={totalVacancies}
                                                        onChange={(e) => setTotalVacancies(e.target.value)}
                                                        style={{ width: '100%' }}
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
                                                            className="form-control mb-4"
                                                            style={{
                                                                width: '100%',
                                                                padding: '10px',
                                                                borderRadius: '5px',
                                                                border: '2px solid #ccc',
                                                                backgroundColor: '#fff',
                                                                color: '#333',
                                                                fontSize: '15px',
                                                                appearance: 'none',
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
                                                            className="form-control mb-4"
                                                            style={{
                                                                width: '100%',
                                                                padding: '10px',
                                                                borderRadius: '5px',
                                                                border: '2px solid #ccc',
                                                                backgroundColor: '#fff',
                                                                color: '#333',
                                                                fontSize: '15px',
                                                                appearance: 'none',
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
                                                            className="form-control mb-4"
                                                            style={{
                                                                width: '100%',
                                                                padding: '10px',
                                                                borderRadius: '5px',
                                                                border: '2px solid #ccc',
                                                                backgroundColor: '#fff',
                                                                color: '#333',
                                                                fontSize: '15px',
                                                                appearance: 'none',
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
                                                        className="form-control"
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)}
                                                        style={{ width: '100%' }}
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
                                                            className="form-control"
                                                            value={customSalary}
                                                            onChange={(e) => setCustomSalary(e.target.value)}
                                                        />
                                                    </div>
                                                )}




                                                <div className="mb-3">
                                                    <label className="form-label">Select Salary Type</label>
                                                    {/* <select
                                                        className="form-select"
                                                        value={selectedSalaryType}
                                                        onChange={(e) => setSelectedSalaryType(e.target.value)}
                                                    >
                                                    <option value="">Select Salary Type</option>
                                                    <option value="hourly">Hourly</option>
                                                    <option value="daily">Daily</option>
                                                    <option value="monthly">Monthly</option>
                                                    <option value="yearly">Yearly</option>
                                                    </select>
 */}





                                                    <select
                                                        className="form-control mb-4"
                                                        style={{
                                                            width: '100%',
                                                            padding: '5px',
                                                            borderRadius: '5px',
                                                            border: '2px solid #ccc',
                                                            backgroundColor: '#fff',
                                                            color: '#333',
                                                            fontSize: '15px',
                                                            appearance: 'none',
                                                        }}
                                                        value={selectedSalaryType}
                                                        onChange={handleSlaryTypeChange}
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
                                                        className="form-control mb-4"
                                                        style={{
                                                            width: '100%',
                                                            padding: '5px',
                                                            borderRadius: '5px',
                                                            border: '2px solid #ccc',
                                                            backgroundColor: '#fff',
                                                            color: '#333',
                                                            fontSize: '15px',
                                                            appearance: 'none',
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
                                                        className="form-control mb-4"
                                                        style={{
                                                            width: '100%',
                                                            padding: '5px',
                                                            borderRadius: '5px',
                                                            border: '2px solid #ccc',
                                                            backgroundColor: '#fff',
                                                            color: '#333',
                                                            fontSize: '15px',
                                                            appearance: 'none',
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
                                                        className="form-control mb-4"
                                                        style={{
                                                            width: '100%',
                                                            padding: '5px',
                                                            borderRadius: '5px',
                                                            border: '2px solid #ccc',
                                                            backgroundColor: '#fff',
                                                            color: '#333',
                                                            fontSize: '15px',
                                                            appearance: 'none',
                                                        }}
                                                        value={education}
                                                        onChange={handleEducatonChange}
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
                                                    {/* <select
                                                    value={jobType}
                                                    onChange={(e) => setJobType(e.target.value)}
                                                    className="form-control"
                                                >
                                                    <option value="">Select Job Type</option>
                                                    <option value="Full-time">Full-time</option>
                                                    <option value="Part-time">Part-time</option>
                                                    <option value="Contract">Contract</option>
                                                </select> */}



                                                    <select
                                                        className="form-control mb-4"
                                                        style={{
                                                            width: '100%',
                                                            padding: '5px',
                                                            borderRadius: '5px',
                                                            border: '2px solid #ccc',
                                                            backgroundColor: '#fff',
                                                            color: '#333',
                                                            fontSize: '15px',
                                                            appearance: 'none',
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
                                                        className="form-control mb-4 border-bottom-0"
                                                        mode="multiple"
                                                        style={{
                                                            width: 'calc(100% - 20px)',
                                                            height: "50px",
                                                        }}
                                                        placeholder="Select Tags"
                                                        onChange={handleTagChanges}
                                                        value={tags}

                                                        filterOption={false}
                                                        showSearch


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
                                                    {/* <input
                                                    type="text"
                                                    value={benefits}
                                                    onChange={(e) => setBenefits(e.target.value)}
                                                    className="form-control"
                                                /> */}

                                                    <Select
                                                        className="form-control mb-4 border-bottom-0"
                                                        mode="multiple"
                                                        style={{
                                                            width: 'calc(100% - 20px)',
                                                            height: "50px",



                                                        }}
                                                        placeholder="Select skills"
                                                        onChange={handleBenfitChanges}
                                                        value={benefits}

                                                        filterOption={false}
                                                        showSearch


                                                    >
                                                        {ben.map((skill) => (
                                                            <Option key={skill} value={skill}>
                                                                {skill}
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
                                                        className="form-control mb-4 border-bottom-0"
                                                        mode="multiple"
                                                        style={{
                                                            width: 'calc(100% - 20px)',
                                                            height: "50px",



                                                        }}
                                                        placeholder="Select skills"
                                                        onChange={handleSkillChanges}
                                                        value={skills}

                                                        filterOption={false}
                                                        showSearch


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
                                                        className="form-control"
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
                                            className="btn btn-primary"
                                            style={{
                                                backgroundColor: 'blue',
                                                color: 'white',
                                                borderRadius: '5px',
                                                padding: '10px 20px',
                                                border: 'none',
                                                cursor: 'pointer',
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Submit Job Details
                                        </button>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>






        </>




    )

}