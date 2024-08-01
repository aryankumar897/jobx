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






export default function Jobs() {



  



    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="col shadow  p-5">
                        <h6 className="mb-4 ">Job details</h6>


                        <div className="container">
                            <div className="row">

                                <form >

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
                                        <div className="col-md-6">

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
                                                    className=" mb-4 "
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
                                                    className=" mb-4 "
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
                                        Submit Job Details
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