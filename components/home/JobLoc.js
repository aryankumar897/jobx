// pages/index.js
"use client"
import Image from 'next/image';


const dummyData = [
    {
        location: "New York",
        vacancies: 10,
        number: 30,
        companies: [
            { name: "Company A", image: "/image/dee.jpg" },

        ]
    },
    {
        location: "New York",
        vacancies: 10,
        number: 30,
        companies: [
            { name: "Company A", image: "/image/dee.jpg" },

        ]
    },
    {
        location: "New York",
        vacancies: 10,
        number: 30,
        companies: [
            { name: "Company A", image: "/image/dee.jpg" },

        ]
    },
    {
        location: "New York",
        vacancies: 10,
        number: 30,
        companies: [
            { name: "Company A", image: "/image/dee.jpg" },

        ]
    },
    {
        location: "New York",
        vacancies: 10,
        number: 30,
        companies: [
            { name: "Company A", image: "/image/dee.jpg" },

        ]
    },
    {
        location: "New York",
        vacancies: 10,
        number: 30,
        companies: [
            { name: "Company A", image: "/image/dee.jpg" },

        ]
    },
    {
        location: "New York",
        vacancies: 10,
        number: 30,
        companies: [
            { name: "Company A", image: "/image/dee.jpg" },

        ]
    },
    {
        location: "New York",
        vacancies: 10,
        number: 30,
        companies: [
            { name: "Company A", image: "/image/dee.jpg" },

        ]
    },



];

export default function Home() {
    return (

        <div> <h2 className="text-center"
        
            style={{
                textAlign: 'center',
                color: 'black',
                fontSize: '20px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                padding: '1px'
            }}
         >job by locations</h2>
            <p className="text-center" 
            
                style={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                    padding: '1px'
                }}
            
            
            >job by locations</p>

            <div className="containers m-5">

                {dummyData.map((item, index) => (
                    <div className="locationContainers" key={index}>
                        <h2 style={{
                            textAlign: 'center',
                            color: 'black',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            letterSpacing: '1px',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                            padding: '1px'
                        }}>{item.location}</h2>
                        <span className="m-4" 
                            style={{
                                textAlign: 'center',
                                color: 'black',
                                fontSize: '15px',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                                padding: '1px'
                            }}
                        
                         >Vacancies: {item.vacancies}</span>
                        <span  
                            style={{
                                textAlign: 'center',
                                color: 'black',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                                
                            }}
                        
                        
                         >available company: {item.number}</span>
                        <div className="companyList">
                            {item.companies.map((company, idx) => (
                                <div className="companyItem" key={idx}>
                                    <Image src={company.image} alt={company.name}
                                        width={200} height={200}



                                    />
                                    <p style={{
                                        textAlign: 'center',
                                        color: 'black',
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        letterSpacing: '1px',
                                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                                        padding: '1px'
                                    }}  >{company.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
