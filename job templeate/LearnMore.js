// components/FeatureComponent.js
"use client"
import React from 'react';
import Image from 'next/image';

export default function FeatureComponent() {
    return (
        <div className="feature">
            <div className="textContainer">
                <h2 className="title">Your Title</h2>
                <p className="subtitle">Your Subtitle</p>
                <div className="buttons">
                    <button className="button">Search</button>
                    <button className="learnMoreButton">Learn More</button>
                </div>
            </div>
            <div className="imageContainer">
                <Image
                    src="/images/de.png" // Replace with your image path
                    alt="Feature"
                    width={800}
                    height={5000} // Adjust as needed
                    className="image"
                />
            </div>
        </div>
    );
};


