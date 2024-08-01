// components/WhyChooseUs.js
"use client"
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';


export default function WhyChooseUs() {
    return (
        <div className="why p-4 m-4">

            <h2 className="title">hy Choose Us</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>

            <div className="whyChooseUs m-3">
                <div className="item">
                    <FaCheckCircle className="icon" />
                    <h3>Expert Team</h3>
                    <p>Our team consists of experienced professionals dedicated to delivering exceptional results.</p>
                </div>
                <div className="item">
                    <FaCheckCircle className="icon" />
                    <h3>Quality Service</h3>
                    <p>We prioritize providing top-notch service to ensure customer satisfaction.</p>
                </div>
                <div className="item">
                    <FaCheckCircle className="icon" />
                    <h3>Quality Service</h3>
                    <p>We prioritize providing top-notch service to ensure customer satisfaction.</p>
                </div>
            </div>
        </div>
    );
};


