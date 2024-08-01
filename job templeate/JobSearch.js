// JobSearchForm.js
"use client"
import { useState } from 'react';

export default function JobSearchForm() {
    const [industry, setIndustry] = useState('');
    const [location, setLocation] = useState('');
    const [keyword, setKeyword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass the form data to the onSubmit callback
        console.log({ industry, location, keyword });
    };

    return (
        <form onSubmit={handleSubmit} className="job-search-form">
            <div className="form-group">
                <label htmlFor="industry">Industry:</label>
                <input
                    type="text"
                    id="industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="input-field"
                />
            </div>
            <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-field"
                />
            </div>
            <div className="form-group">
                <label htmlFor="keyword">Keyword:</label>
                <input
                    type="text"
                    id="keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="input-field"
                />
            </div>
            <button type="submit" className="submit-button">Search</button>
        </form>
    );
};


