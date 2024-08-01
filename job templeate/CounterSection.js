// CounterSection.js
"use client"
import { useState } from 'react';


export default function CounterSection() {
    const [happyClients, setHappyClients] = useState(100);
    const [totalCases, setTotalCases] = useState(500);
    const [ourOffice, setOurOffice] = useState(1);
    const [skilledPeople, setSkilledPeople] = useState(50);

    return (
        <div className="counter-section"> {/* Use class names directly */}
            <div className="counter">
                <h2>{happyClients}</h2>
                <p>Happy Clients</p>
            </div>
            <div className="counter">
                <h2>{totalCases}</h2>
                <p>Total Cases</p>
            </div>
            <div className="counter">
                <h2>{ourOffice}</h2>
                <p>Our Office</p>
            </div>
            <div className="counter">
                <h2>{skilledPeople}</h2>
                <p>Skilled People</p>
            </div>
        </div>
    );
};


