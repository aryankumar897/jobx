"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FaCheck, FaTimes } from 'react-icons/fa';


export default function Register() {
    const [loading, setLoading] = useState(false)

    const [leble, setLable] = useState("")

    const [price, setPrice] = useState('')

    const [joblimit, setPjobLimit] = useState("")

    const [featuredjoblimit, setFeaturedJobLimit] = useState("")

    const [highlightjoblimit, setHighlightJobLimit] = useState("")

    const [recommended, setRecommended] = useState("")
    const [frontendshow, setFrontendShow] = useState("")
    const [profileverify, setProfileVerify] = useState("")
    const [home, setHome] = useState("")
    const [listprice, setListPrice] = useState([])


    //edit


    const [selectedItem, setSelectedItem] = useState(null)

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editedItem, setEditedItem] = useState(null)


    useEffect(() => {
        fetchData()
    }, [])



    const fetchData = async () => {


        try {

            const response = await fetch(`${process.env.API}/admin/plan`)


            const data = await response.json()
            if (!response.ok) {
                toast.error(data.err)
            } else {
                console.log("data=>", data)
                setListPrice(data)
            }







        } catch (err) {

            console.log(err)

        }


    }






    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log({



            leble, price, joblimit, featuredjoblimit, highlightjoblimit,
            recommended, frontendshow, profileverify, home
        })




        try {

            setLoading(true)

            const response = await fetch(`${process.env.API}/admin/plan`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({


                    leble, price, joblimit, featuredjoblimit, highlightjoblimit,
                    recommended, frontendshow, profileverify, home



                })






            })


            const data = await response.json()
            if (!response.ok) {
                toast.error(data.err)
                setLoading(false)
            } else {

                toast.success("sucessfully plane created")
                setLoading(false)


            }




        } catch (error) {
            console.log(error)
            setLoading(false)
        }







    }


    const handleDelete = async (id) => {


        try {


            const response = await fetch(` ${process.env.API}/admin/plan/${id}`, {


                method: "DELETE",


            }
            )

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.err)


            } else {

                toast.success("   succeffuly deleted ")

                fetchData()
            }



        } catch (error) {
            console.log(error)
        }



    }


    const handleEdit = async (item) => {

        setSelectedItem(item)
        setEditedItem(item)

        setIsModalOpen(true)

    }

    const handleCloseModal = async () => {

        setIsModalOpen(false)


    }



    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedItem(prevItem => ({
            ...prevItem,
            [name]: value
        }));

        console.log("Edited item:", editedItem);
    };


    const handleSave = async () => {


        const itemId = editedItem._id;

        try {



            const response = await fetch(` ${process.env.API}/admin/plan/${itemId}`, {

                method: "PUT",
                headers: {

                    "Contnet-Type": "application/json"

                },



                body: JSON.stringify(editedItem)

            })


            const data = await response.json()

            console.log(data)
            if (!response.ok) {

                toast.error(data.err)

            }
            else {


                toast.success("  data updated")
                setIsModalOpen(false)
                fetchData()
            }






        } catch (err) {


            console.log(err)

        }





    }


    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="col shadow  p-5">
                        <h2 className="mb-4 text-center">Add Prcing System</h2>

                        <form


                            onSubmit={handleSubmit}

                        >

                            <div className="row">
                                <div className="col-lg-6">
                                    <label >Label</label>
                                    <input

                                        type="text"
                                        value={leble}
                                        onChange={(e) => setLable(e.target.value)}

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

                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}

                                    />
                                </div>
                                <div className="col-lg-6">
                                    <label >Job Limit</label>
                                    <input
                                        type="number"
                                        className=" mb-4"
                                        style={{ outline: "none" }}


                                        value={joblimit}

                                        onChange={(e) => setPjobLimit(e.target.value)} />
                                </div>
                                <div className="col-lg-6">
                                    <label >Featured Job Limit</label>
                                    <input
                                        type="number"
                                        className="  mb-4"
                                        style={{ outline: "none" }}

                                        value={featuredjoblimit}

                                        onChange={(e) => setFeaturedJobLimit(e.target.value)}


                                    />
                                </div>
                                <div className="col-lg-6">
                                    <label >Highlight Job Limit</label>
                                    <input
                                        type="number"
                                        className="  mb-4"
                                        style={{ outline: "none" }}

                                        value={highlightjoblimit}
                                        onChange={(e) => setHighlightJobLimit(e.target.value)}

                                    />
                                </div>
                                <div className="col-lg-6">
                                    <label>Recommended</label>
                                    <select className="  mb-4"
                                        style={{ outline: "none" }}


                                        value={recommended}
                                        onChange={(e) => setRecommended(e.target.value)}

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

                                        value={frontendshow}

                                        onChange={(e) => setFrontendShow(e.target.value)}



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




                                        value={profileverify}
                                        onChange={(e) => setProfileVerify(e.target.value)}


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
                                        value={home}
                                        onChange={(e) => setHome(e.target.value)}

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





                            >
                                {loading ? "Please wait.." : "Add Price"}
                            </button>
                        </form>





                        {/* price */}

                        <section id="pricing" className="bg-white">
                            <div className="container">
                                <h2 className="text-center">PRICING</h2>
                                {JSON.stringify({ listprice }, null, 4)}


                                <div className="spacer spacer-line border-primary">&nbsp;</div>
                                <div className="spacer">&nbsp;</div>
                                <div className="row">
                                    {listprice.map(item => (
                                        <div className="col-md-4" key={item._id}>
                                            <div className="pricing-table">
                                                <div className="pricing-table-title">
                                                    <strong> {item.recommended ? <h4 className="badge badge-pill badge-success"   >recommended</h4> : ""}            </strong>
                                                    <strong> {item.home ? <h4 className="badge badge-pill badge-success"   >home</h4> : ""} </strong>

                                                    <strong> {item.frontendshow ? <h4 className="badge badge-pill badge-success"   >frontend show</h4> : ""} </strong>

                                                    <h5 className="pricing-title bg-info-hover text-white">{item.leble}</h5>
                                                </div>
                                                <div className="pricing-table-price text-center bg-info">
                                                    <p className="title-font">

                                                        <span className="pricing-currency text-white">$</span>
                                                        <span className="pricing-price text-white">{item.price}</span>

                                                    </p>
                                                </div>
                                                <div className="pricing-table-content">
                                                    <ul>
                                                        <li><strong>Job Limit: {item.joblimit}</strong></li>


                                                        <li><strong>Featured Job Limit: {item.featuredjoblimit}</strong></li>
                                                        <li><strong>Highlight Job Limit: {item.highlightjoblimit}</strong></li>
                                                        <li>
                                                            <strong>Recommended: {item.recommended ? <FaCheck style={{ color: 'green' }} /> : <FaTimes style={{ color: 'red' }} />}</strong>
                                                        </li>
                                                        <li>
                                                            <strong>Frontend Show: {item.frontendshow ? <FaCheck style={{ color: 'green' }} /> : <FaTimes style={{ color: 'red' }} />}</strong>
                                                        </li>
                                                        <li>
                                                            <strong>Profile Verify: {item.profileverify ? <FaCheck style={{ color: 'green' }} /> : <FaTimes style={{ color: 'red' }} />}</strong>
                                                        </li>
                                                    </ul>
                                                    <div className="pricing-table-button">
                                                        <button
                                                            onClick={() => handleEdit(item)}

                                                            className="btn btn-primary mr-2"><span>Edit</span></button>
                                                        <button
                                                            onClick={() => handleDelete(item._id)}
                                                            className="btn btn-danger"><span>Delete</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>




                        {/* price end */}

                        {/* model open */}



                        {isModalOpen && (
                            <div className="modal fade show" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true" style={{ display: 'block' }}>
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="editModalLabel">Edit price</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"

                                                onClick={handleCloseModal}

                                            >
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">



                                            <form

                                                onSubmit={handleSave}
                                            >
                                                <div className="form-group">
                                                    <label htmlFor="lebleInput">Label</label>
                                                    <input type="text" className="form-control" id="lebleInput" name="leble"

                                                        value={editedItem.leble}
                                                        onChange={handleChange}


                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="priceInput">Price</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="priceInput" name="price"

                                                        value={editedItem.price}
                                                        onChange={handleChange}



                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="jobLimitInput">Job Limit</label>
                                                    <input type="number"
                                                        className="form-control"
                                                        id="jobLimitInput"
                                                        min="1"
                                                        name="joblimit"
                                                        value={editedItem.joblimit}
                                                        onChange={handleChange}

                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="featuredJobLimitInput">Featured Job Limit</label>
                                                    <input type="number"
                                                        className="form-control"
                                                        id="featuredJobLimitInput"
                                                        name="featuredjoblimit"
                                                        value={editedItem.featuredjoblimit}
                                                        onChange={handleChange}
                                                        min="1"

                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="highlightJobLimitInput">Highlight Job Limit</label>
                                                    <input type="number" className="form-control" id="highlightJobLimitInput"
                                                        name="highlightjoblimit"
                                                        min="1"
                                                        value={editedItem.highlightjoblimit}
                                                        onChange={handleChange}
                                                    />
                                                </div>



                                                <div className="row">


                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <label htmlFor="recommendedInput">Recommended</label>
                                                            <select className="form-control" id="recommendedInput" name="recommended"

                                                                value={editedItem.recommended}
                                                                onChange={handleChange}
                                                            >
                                                                <option value=""></option>
                                                                <option value="true">Yes</option>
                                                                <option value="false">No</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label htmlFor="frontendShowInput">Frontend Show</label>
                                                            <select className="form-control" id="frontendShowInput"
                                                                name="frontendshow"
                                                                value={editedItem.frontendshow}
                                                                onChange={handleChange}
                                                            >
                                                                <option value=""></option>
                                                                <option value="true">Yes</option>
                                                                <option value="false">No</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label htmlFor="profileVerifyInput">Profile Verify</label>
                                                            <select className="form-control"
                                                                id="profileVerifyInput" name="profileverify"
                                                                value={editedItem.profileverify}
                                                                onChange={handleChange}

                                                            >
                                                                <option value=""></option>
                                                                <option value="true">Yes</option>
                                                                <option value="false">No</option>
                                                            </select>
                                                        </div>


                                                        <div className="col-md-4">
                                                            <label htmlFor="homeVerifyInput">display home</label>
                                                            <select className="form-control" id="homeVerifyInput"
                                                                name="home"
                                                                value={editedItem.home}

                                                                onChange={handleChange}
                                                            >
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
                        )}





                        {/* model open */}
                    </div>
                </div>
            </div>





        </main>
    );
}