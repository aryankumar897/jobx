"use client"
import axios from 'axios';
import { useState, useEffect } from "react"
import { DatePicker } from 'antd';
import { RiEdit2Line, RiDeleteBin6Line } from 'react-icons/ri';
import moment from 'moment';

import { toast, ToastContainer } from 'react-toastify'
const experiences = [
    {
        _id: '1',
        company: 'Tech Solutions',
        department: 'Development',
        designation: 'Software Engineer',
        start: '2022-01-15',
        end: '2023-01-14',
        responsibilities: 'Developed web applications',
        currently_working: false,
    },
    {
        _id: '2',
        company: 'Creative Minds',
        department: 'Design',
        designation: 'Graphic Designer',
        start: '2021-05-10',
        end: '2022-05-10',
        responsibilities: 'Created visual content',
        currently_working: false,
    },
    {
        _id: '3',
        company: 'Business Corp',
        department: 'Marketing',
        designation: 'Marketing Manager',
        start: '2019-03-01',
        end: '2021-02-28',
        responsibilities: 'Managed marketing campaigns',
        currently_working: false,
    },
];
import 'react-toastify/dist/ReactToastify.css';
export default function Expericence() {
   const [loading,setLoading]=useState(false)



    return (
        <main>
            <ToastContainer />
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="  col   shadow  p-5">
                        <h2 className="mb-1 text-center">Experience and education  </h2>



                        <form onSubmit={handleSubmit}>
                            <input
                                className=" mb-4"
                                style={{ outline: "none" }}
                                type="text"
                                
                                  placeholder="Company" />
                            <input
                                className=" mb-4"
                                style={{ outline: "none" }}
                                type="text" 

                                  placeholder="Department" />
                            <input
                                className=" mb-4"
                                style={{ outline: "none" }}
                                type="text"
                               
                                 placeholder="Designation"
                                  />



                            <DatePicker
                                className="mb-4"
                                placeholder="Select  start date"
                               // onChange={handleDateChange}
                                style={{
                                    width: '100%',
                                    height: '40px',
                                    fontSize: '16px',
                                }}
                            />

                            <DatePicker
                                className="mb-4"
                                placeholder="Select  end date"
                               // onChange={handleDateChang}
                                style={{
                                    width: '100%',
                                    height: '40px',
                                    fontSize: '16px',
                                }}
                            />


                            <textarea
                                className=" mb-4"
                                style={{ outline: "none" }}
                              
                                 placeholder="Responsibilities"
                                 
                                  />
                            <label className=" mb-4"
                                style={{ outline: "none" }}

                            >
                                <input

                                    type="checkbox"
                                    
                                      />
                                Currently Working
                            </label>
                            <button
                                type="submit"

                            >
                                {loading ? "Please wait.." : "Add experience "}
                            </button>
                        </form>

                        <br /> <br /> <br /> <br />


                        <div className="table-container">
                            <h2>Experience</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Company</th>
                                        <th>Department</th>
                                        <th>Designation</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Responsibilities</th>
                                        <th>Currently Working</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {experiences && experiences?.map((experience) => (
                                        <tr key={experience._id}>
                                            <td>{experience.company}</td>
                                            <td>{experience.department}</td>
                                            <td>{experience.designation}</td>
                                            <td>{
                                                moment(experience.start).format('MMMM Do YYYY')

                                            }</td>
                                            <td>{

                                                moment(experience.end).format('MMMM Do YYYY')
                                            }</td>
                                            <td>{experience.responsibilities}</td>
                                            <td>{experience.currently_working ? 'Yes' : 'No'}</td> 
                                            <td>
                                                <button
                                                    className="btn btn-primary btn-sm"

                                                  //  onClick={() => handleEditClick(experience)}
                                                    
                                                    
                                                    >
                                                    <RiEdit2Line /> 
                                                </button>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                   // onClick={() => handleDelete(experience._id)}
                                                    
                                                    
                                                    >
                                                    <RiDeleteBin6Line /> 
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>



                            {/* {editedExperience && (


                                <div className="modal-overlay">
                                    <div className="modal-content-custom " style={{ width: '60%' }} >
                                        <h6 style={{ borderBottom: '1px solid #000', fontWeight: 'bold' }}>Edit Experience</h6>
                           


                                        <div className="form-group-custom">
                                            <label className="label-custom" htmlFor="company">Company</label>
                                            <input
                                              
                                                className="form-control mb-4"
                                                type="text"
                                                id="company"
                                                value={editedExperience.company}
                                                onChange={(e) => setEditedExperience({ ...editedExperience, company: e.target.value })}
                                            />
                                        </div>



                                        <div className="form-group-custom">
                                            <label className="label-custom" htmlFor="department">Department</label>
                                            <input
                                             
                                                className="form-control mb-4"
                                                type="text"
                                                id="department"
                                                value={editedExperience.department}
                                                onChange={(e) => setEditedExperience({ ...editedExperience, department: e.target.value })}
                                            />
                                        </div>



                                        <div className="form-group-custom">
                                            <label className="label-custom" htmlFor="designation">Designation</label>
                                            <input
                                              
                                                className="form-control mb-4"
                                                type="text"
                                                id="designation"
                                                value={editedExperience.designation}
                                                onChange={(e) => setEditedExperience({ ...editedExperience, designation: e.target.value })}
                                            />
                                        </div>


                                        <div className="form-group-custom">
                                            <label className="label-custom" htmlFor="start">Start Date</label>
                                            <DatePicker
                                                className="form-control mb-4"
                                                placeholder="Select start date"
                                                defaultValue={moment(editedExperience.start)}
                                                onChange={(date, dateString) => setEditedExperience({ ...editedExperience, start: dateString })}
                                                style={{
                                                    width: '100%',
                                                    height: '40px',
                                                    fontSize: '16px',
                                                }}
                                            />
                                        </div>
                                        <div className="form-group-custom">
                                            <label className="label-custom" htmlFor="end">End Date</label>
                                            <DatePicker
                                                className="form-control mb-4"
                                                placeholder="Select end date"
                                                defaultValue={moment(editedExperience.end)}
                                                onChange={(value) => setEditedExperience({ ...editedExperience, end: value })}
                                                style={{
                                                    width: '100%',
                                                    height: '40px',
                                                    fontSize: '16px',
                                                }}
                                            />
                                        </div>




                                        <div className="form-group-custom">
                                            <label className="label-custom" htmlFor="responsibilities">Responsibilities</label>
                                            <textarea
                                               

                                                className="form-control mb-4"
                                                id="responsibilities"
                                                value={editedExperience.responsibilities}
                                                onChange={(e) => setEditedExperience({ ...editedExperience, responsibilities: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group-custom">
                                            <label className="label-custom" htmlFor="currentlyWorking">Currently Working</label>
                                            <select
                                              
                                                className="form-control mb-4"
                                                id="currentlyWorking"
                                                value={editedExperience.currently_working}
                                                onChange={(e) => setEditedExperience({ ...editedExperience, currently_working: e.target.value })}
                                            >
                                                <option value="true">Yes</option>
                                                <option value="false">No</option>
                                            </select>
                                        </div>


                                       
                                        <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }} 
                                        onClick={() => handleSaveEdit(editedExperience._id)}
                                        >Save</button>
                                        <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '5px', cursor: 'pointer' }} 
                                        onClick={handleCancelEdit}
                                        >Cancel</button>




                                    </div>
                                </div>



                            )}




                            <style jsx global>{`
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999; 
    }
    .modal-content-custom {
         background-color: #fff;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
     
    }
    .form-group-custom {
        margin-bottom: 2px;
    }
    .label-custom {
        display: block;
        margin-bottom: 1px;
    }
    .input-custom {
        width: 100%;
        padding: 2px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
  
`}</style>



                            <style jsx>{`
        .table-container {
          overflow-x: auto;
          border-bottom: 2px solid #ccc;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
        }
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          padding: 5px;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #f0f0f0;
        }
      `}</style> */}



                        </div>

                        <br /> <br /> <br /> <br />




                        <h2 className="mb-1 text-center">Add education  </h2>


                        {/* <br /> <br />
                        <form onSubmit={handleSubmitt}>
                            <input
                                className="form-control mb-4"
                                type="text"
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                                placeholder=" your Level*"

                            />
                            <input
                                className="form-control mb-4"
                                type="text" value={degree}
                                onChange={(e) => setDegree(e.target.value)}
                                placeholder="degree" />


                            <DatePicker
                                className="form-control mb-4"
                                placeholder="Select  year"
                                picker="year"
                                onChange={handleYearChange}
                                style={{
                                    width: '100%',
                                    height: '40px',
                                    fontSize: '16px',
                                }}
                            />




                            <textarea
                                className="form-control mb-4"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder=" notes "
                            />



                            <button
                                className="btn btn-primary btn-raised"

                            >
                                {loadings ? "Please wait.." : "Add education"}
                            </button>
                        </form>


                        <br /> <br /> <br /> <br />





                        <div className="table-container">
                            <h2>Education</h2>

                            <div className="table-container">

                                <table className="responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Level</th>
                                            <th>Degree</th>
                                            <th>Year</th>
                                            <th>Notes</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {educations.map((education) => (
                                            <tr key={education._id}>
                                                <td>{education.level}</td>
                                                <td>{education.degree}</td>
                                                <td>{moment(education.year).year()}</td>
                                                <td>{education.notes}</td>
                                                <td>
                                                    <button className="btn btn-primary btn-sm" onClick={() => handleEditClicked(education)}>
                                                        Edit
                                                    </button>
                                                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteed(education._id)}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>


                            </div>




                            {editedEducation && (


                                <div className="modal-overlay">
                                    <div className="modal-content-custom " style={{ width: '60%' }} >
                                        <h6 style={{ borderBottom: '1px solid #000', fontWeight: 'bold' }}>Edit Experience</h6>
                                 


                                        <div className="form-group-custom">
                                            <label className="label-custom" htmlFor="company">Level</label>
                                            <input
                                               
                                                className="form-control mb-4"
                                                type="text"
                                                id="company"
                                                value={editedEducation.level}
                                                onChange={(e) => setEditedEducation({ ...editedEducation, level: e.target.value })}
                                            />
                                        </div>



                                        <div className="form-group-custom">
                                            <label className="label-custom" htmlFor="department">Degree</label>
                                            <input
                                                
                                                className="form-control mb-4"
                                                type="text"
                                                id="department"
                                                value={editedEducation.degree}
                                                onChange={(e) => setEditedEducation({ ...editedEducation, degree: e.target.value })}
                                            />
                                        </div>







                                        <div className="form-group-custom" style={{

                                            zIndex: '9999999' 
                                          
                                        }}   >
                                            <label className="label-custom" htmlFor="end">Year</label>
                                            <DatePicker
                                                picker="year"
                                                placement="topLeft"
                                                className="form-control mb-4"
                                                placeholder="Select year"
                                                defaultValue={moment(editedEducation.year)}
                                                onChange={(value) => setEditedEducation({ ...editedEducation, year: value })}


                                                style={{
                                                    width: '100%',
                                                    height: '40px',
                                                    fontSize: '16px',
                                                    zIndex: '9999999',


                                                  
                                                }}
                                            />
                                        </div>




                                        <div className="form-group-custom">
                                            <label className="label-custom" htmlFor="responsibilities">Notes</label>
                                            <textarea
                                                

                                                className="form-control mb-4"
                                                id="responsibilities"
                                                value={editedEducation.notes}
                                                onChange={(e) => setEditedEducation({ ...editedEducation, notes: e.target.value })}
                                            />
                                        </div>



                                       
                                        <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }} onClick={() => handleSaveEdited(editedEducation._id)}>Save</button>
                                        <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '5px', cursor: 'pointer' }} onClick={handleCancelEdited}>Cancel</button>




                                    </div>
                                </div>



                            )}







                            <style jsx>{`
    .table-container {
        overflow-x: auto;
    }


.ant-picker-input{
zIndex: '9999999' 
}
    .responsive-table {
        width: 100%;
        overflow-x: auto;
        border-collapse: collapse;
    }

    th, td {
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 5px;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #f0f0f0;
    }


    @media screen and (max-width: 768px) {
        .responsive-table {
            overflow-x: auto;
        }

        table {
            border-spacing: 0;
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        button {
            padding: 5px;
        }
    }

  
    .modal {
        position: fixed; 
        z-index: 1000; 
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto; 
        background-color: rgba(0, 0, 0, 0.4); 
    }

 
    .modal-content {
        background-color: #fefefe;
        margin: 15% auto; 
        padding: 20px;
        border: 1px solid #888;
        width: 80%; 
    }


    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`}</style>


                        </div>
 */}



                    
                    </div>
                </div>

            </div>
        </main>
    )

}