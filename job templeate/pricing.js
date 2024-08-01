"use client";

import { FaCheck, FaTimes } from 'react-icons/fa';
export default function Register() {
   
    const price = [
        {
            _id: 1,
            recommended: true,
            leble: "Basic Plan",
            price: 29.99,
            joblimit: 5,
            featuredJoblimit: 1,
            highlightJoblimit: 1,
            profile_verify: true
        },
        {
            _id: 2,
            recommended: false,
            leble: "Standard Plan",
            price: 49.99,
            joblimit: 10,
            featuredJoblimit: 3,
            highlightJoblimit: 2,
            profile_verify: true
        },
        {
            _id: 3,
            recommended: true,
            leble: "Premium Plan",
            price: 79.99,
            joblimit: 20,
            featuredJoblimit: 5,
            highlightJoblimit: 3,
            profile_verify: true
        }
    ];

   



    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="col shadow bg-light p-5">

                        <section id="pricing" className="bg-white">
                            <div className="container">
                                <h2 className="text-center">PRICING</h2>
                                <div className="spacer spacer-line border-primary">&nbsp;</div>
                                <div className="spacer">&nbsp;</div>
                                <div className="row">
                                    {price.map(item => (
                                        <div className="col-md-4" key={item._id}>
                                            <div className="pricing-table">
                                                <div className="pricing-table-title">
                                                    <strong> {item.recommended ? <h4 className="badge badge-pill badge-success"   >recommended</h4> : ""}            </strong>

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
                                                            <strong>Company Verify: {item.profile_verify ? <FaCheck style={{ color: 'green' }} /> : <FaTimes style={{ color: 'red' }} />}</strong>
                                                        </li>
                                                    </ul>
                                                    <div className="pricing-table-button">
                                                        <button  className="btn btn-primary mr-2">
                                                            <span >
                                                                Choose plan
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>


                    </div>
                </div>
            </div>
        </main>
    );
}
