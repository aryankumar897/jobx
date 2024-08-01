"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FaCheck, FaTimes } from 'react-icons/fa';


export default function Register() {




    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="col shadow  p-5">
                        <h2 className="mb-4 text-center">Add Prcing System</h2>

                        <form
                        
                 
                        
                        
                        >

                            <div className="row">
                                <div className="col-lg-6">
                                    <label >Label</label>
                                    <input
                                      
                                        type="text"
                                     
                                      
                                        className=" mb-4"
                                        style={{ outline: "none" }}
                                        placeholder="Enter your name"


                                    />
                                </div>
                                <div className="col-lg-6">
                                    <label >Price</label>
                                    <input
                                        type="number"
                                        className=" mb-4"
                                        style={{ outline: "none" }}
                                      
                                  
                                        
                                         />
                                </div>
                                <div className="col-lg-6">
                                    <label >Job Limit</label>
                                    <input
                                        type="number"
                                        className=" mb-4"
                                        style={{ outline: "none" }}
                 
                 

                                         />
                                </div>
                                <div className="col-lg-6">
                                    <label >Featured Job Limit</label>
                                    <input
                                        type="number"
                                        className="  mb-4"
                                        style={{ outline: "none" }}
                  

                                         />
                                </div>
                                <div className="col-lg-6">
                                    <label >Highlight Job Limit</label>
                                    <input
                                        type="number"
                                        className="  mb-4"
                                        style={{ outline: "none" }}
                   


                                        />
                                </div>
                                <div className="col-lg-6">
                                    <label>Recommended</label>
                                    <select className="  mb-4"
                                        style={{ outline: "none" }}
                                       
                                         
                                         >
                                        <option value=""></option>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>
                                <div className="col-lg-6">
                                    <label >Frontend Show</label>
                                    <select className=" mb-4"
                                        style={{ outline: "none" }}
                                       
                                         >
                                        <option value=""></option>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>



                                <div className="col-lg-6">
                                    <label>Profile Verify</label>
                                    <select className="  mb-4  "
                                        style={{ outline: "none" }}
                                       
                                       
                                         >
                                        <option value=""></option>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>


                                <div className="col-lg-6">
                                    <label>Display home</label>
                                    <select className="  mb-4  "
                                        style={{ outline: "none" }}
                                       
                                       
                                         >
                                        <option value=""></option>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>



                            </div>
                            <br />
                            <button
                                type="submit"
                              
                              
                              //  disabled={loading || !leble || !joblimit || !featuredJoblimit || !highlightJoblimit || !recommended || !frontendshow || !profileverify}
                            >
                                {loading ? "Please wait.." : "Add Price"}
                            </button>
                        </form>





                        {/* price */}

                        {/* <section id="pricing" className="bg-white">
                            <div className="container">
                                <h2 className="text-center">PRICING</h2>
                                <div className="spacer spacer-line border-primary">&nbsp;</div>
                                <div className="spacer">&nbsp;</div>
                                <div className="row">
                                    {listprice.map(item => (
                                        <div className="col-md-4" key={item._id}>
                                            <div className="pricing-table">
                                                <div className="pricing-table-title">
                                                    <strong> {item.recommended ? <h4 className="badge badge-pill badge-success"   >recommended</h4> : ""}            </strong>
                                                    <strong> {item.home ? <h4 className="badge badge-pill badge-success"   >home</h4> : ""} </strong>

                                                    <strong> {item.frontend_show ? <h4 className="badge badge-pill badge-success"   >frontend show</h4> : ""} </strong>

                                                    <h5 className="pricing-title bg-info-hover text-white">{item.leble}</h5>
                                                </div>
                                                <div className="pricing-table-price text-center bg-info">
                                                    <p className="title-font">
                                                        <span className="pricing-period text-white mr-1">From</span>
                                                        <span className="pricing-currency text-white">$</span>
                                                        <span className="pricing-price text-white">{item.price}</span>
                                                        <span className="pricing-period text-white">/ Mo.</span>
                                                    </p>
                                                </div>
                                                <div className="pricing-table-content">
                                                    <ul>
                                                        <li><strong>Job Limit: {item.joblimit}</strong></li>


                                                        <li><strong>Featured Job Limit: {item.featuredJoblimit}</strong></li>
                                                        <li><strong>Highlight Job Limit: {item.highlightJoblimit}</strong></li>
                                                        <li>
                                                            <strong>Recommended: {item.recommended ? <FaCheck style={{ color: 'green' }} /> : <FaTimes style={{ color: 'red' }} />}</strong>
                                                        </li>
                                                        <li>
                                                            <strong>Frontend Show: {item.frontend_show ? <FaCheck style={{ color: 'green' }} /> : <FaTimes style={{ color: 'red' }} />}</strong>
                                                        </li>
                                                        <li>
                                                            <strong>Profile Verify: {item.profile_verify ? <FaCheck style={{ color: 'green' }} /> : <FaTimes style={{ color: 'red' }} />}</strong>
                                                        </li>
                                                    </ul>
                                                    <div className="pricing-table-button">
                                                        <button onClick={() => handleEdit(item)} className="btn btn-primary mr-2"><span>Edit</span></button>
                                                        <button onClick={() => handleDelete(item._id)} className="btn btn-danger"><span>Delete</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
 */}



                        {/* price end */}

                        {/* model open */}


                        {/* {isModalOpen && (
                            <div className="modal fade show" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true" style={{ display: 'block' }}>
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="editModalLabel">Edit price</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCloseModal}>
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">



                                            <form onSubmit={handleSave}>
                                                <div className="form-group">
                                                    <label htmlFor="lebleInput">Label</label>
                                                    <input type="text" className="form-control" id="lebleInput" name="leble" value={editedItem.leble} onChange={handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="priceInput">Price</label>
                                                    <input type="text" className="form-control" id="priceInput" name="price" value={editedItem.price} onChange={handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="jobLimitInput">Job Limit</label>
                                                    <input type="number" className="form-control" id="jobLimitInput" name="joblimit" value={editedItem.joblimit} onChange={handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="featuredJobLimitInput">Featured Job Limit</label>
                                                    <input type="number" className="form-control" id="featuredJobLimitInput" name="featuredJoblimit" value={editedItem.featuredJoblimit} onChange={handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="highlightJobLimitInput">Highlight Job Limit</label>
                                                    <input type="number" className="form-control" id="highlightJobLimitInput" name="highlightJoblimit" value={editedItem.highlightJoblimit} onChange={handleChange} />
                                                </div>



                                                <div className="row">


                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <label htmlFor="recommendedInput">Recommended</label>
                                                            <select className="form-control" id="recommendedInput" name="recommended" value={editedItem.recommended} onChange={handleChange}>
                                                                <option value=""></option>
                                                                <option value="true">Yes</option>
                                                                <option value="false">No</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label htmlFor="frontendShowInput">Frontend Show</label>
                                                            <select className="form-control" id="frontendShowInput" name="frontend_show" value={editedItem.frontend_show} onChange={handleChange}>
                                                                <option value=""></option>
                                                                <option value="true">Yes</option>
                                                                <option value="false">No</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label htmlFor="profileVerifyInput">Profile Verify</label>
                                                            <select className="form-control" id="profileVerifyInput" name="profile_verify" value={editedItem.profile_verify} onChange={handleChange}>
                                                                <option value=""></option>
                                                                <option value="true">Yes</option>
                                                                <option value="false">No</option>
                                                            </select>
                                                        </div>


                                                        <div className="col-md-4">
                                                            <label htmlFor="homeVerifyInput">display home</label>
                                                            <select className="form-control" id="homeVerifyInput" name="home_verify" value={editedItem.home} onChange={handleChange}>
                                                                <option value=""></option>
                                                                <option value="true">Yes</option>
                                                                <option value="false">No</option>
                                                            </select>
                                                        </div>




                                                    </div>


                                                </div>




                                                <button type="submit"


                                                    className="btn btn-primary">Save changes</button>

                                            </form>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        )} */}





                        {/* model open */}
                    </div>
                </div>
            </div>





        </main>
    );
}