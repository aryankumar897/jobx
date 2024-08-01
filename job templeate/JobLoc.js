// pages/index.js
"use client"
import Image from 'next/image';


const dummyData = [
    {
        location: "New York",
        vacancies: 10,
        number: 30,
        companies: [
            { name: "Company A", image: "/images/de.png" },

        ]
    },
    {
        location: "New York",
        vacancies: 10,
        number: 30,
        companies: [
            { name: "Company A", image: "/images/de.png" },

        ]
    },
    {
        location: "New York",
        vacancies: 10,
        number: 30,
        companies: [
            { name: "Company A", image: "/images/de.png" },

        ]
    },
    {
        location: "New York",
        vacancies: 10,
        number: 30,
        companies: [
            { name: "Company A", image: "/images/de.png" },

        ]
    },
    {
        location: "New York",
        vacancies: 10,
        number: 30,
        companies: [
            { name: "Company A", image: "/images/de.png" },

        ]
    },
    {
        location: "New York",
        vacancies: 10,
        number: 30,
        companies: [
            { name: "Company A", image: "/images/de.png" },

        ]
    },
    {
        location: "New York",
        vacancies: 10,
        number: 30,
        companies: [
            { name: "Company A", image: "/images/de.png" },

        ]
    },
    {
        location: "New York",
        vacancies: 10,
        number: 30,
        companies: [
            { name: "Company A", image: "/images/de.png" },

        ]
    },



];

export default function Home() {
    return (

        <div> <h2 className="text-center" >job by locations</h2>
            <p className="text-center" >job by locations</p>

            <div className="containers m-5">

                {dummyData.map((item, index) => (
                    <div className="locationContainers" key={index}>
                        <h2>{item.location}</h2>
                        <span className="m-4">Vacancies: {item.vacancies}</span>
                        <span>available company: {item.number}</span>
                        <div className="companyList">
                            {item.companies.map((company, idx) => (
                                <div className="companyItem" key={idx}>
                                    <Image src={company.image} alt={company.name}
                                        width={200} height={200}



                                    />
                                    <p>{company.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
