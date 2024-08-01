"use client"

import React from 'react';

const data = [
    {
        image: "/images/de.png",
        title: "Example Title 1",
        subtitle: "Example Subtitle 1",
        username: "JohnDoe",
        date: "March 14, 2024",
        comments: 5
    },
    {
        image: "/images/de.png",
        title: "Example Title 2",
        subtitle: "Example Subtitle 2",
        username: "JaneDoe",
        date: "March 15, 2024",
        comments: 3
    },
    {
        image: "/images/de.png",
        title: "Example Title 3",
        subtitle: "Example Subtitle 3",
        username: "Alice",
        date: "March 16, 2024",
        comments: 7
    },

];




export default function NewsItem() {
    return (
        <div className="news-container m-5">
            <h3 className="text-center">Nesw AND blog SECTION</h3>
            {data.map((item, index) => (
                <div className="news-item" key={index}>
                    <img src={item.image} alt={item.title} className='p-2' />
                    <h3>{item.title}</h3>
                    <h5>{item.subtitle}</h5>
                    <div className="metadata">
                        <span className="username">{item.username}</span>
                        <span className="date">{item.date}</span>
                        <span className="comments">{item.comments} comments</span>
                    </div>
                </div>
            ))}
        </div>
    );
};


