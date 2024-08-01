"use client"
import Link from "next/link"
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import { useCountry } from "@/context/country";
import { useCity } from "@/context/city";
import { useStat } from "@/context/state";

import { useSkill } from "@/context/skill"





export default function Filter({ searchParams }) {

    const router = useRouter();
    const activeButton = "btn  btn-raised mx-1 rounded-pill";
    const button = "btn btn-raised mx-1 rounded-pill";

    const pathname = "/candidates";
    const { countryid, stateid, cityid, skillid } = searchParams;


    const { fetchCountryPublic, country } = useCountry()

    const { fetchStatePublic, state } = useStat()
    const { fetchCityPublic, city } = useCity()
    const { fetchSkillPublic, skill } = useSkill()



    useEffect(() => {
        fetchCountryPublic()
        fetchSkillPublic()
        fetchStatePublic()
        fetchCityPublic()

    }, []);


    const handleRemoveFilter = (filterName) => {
        const updatedSearchParams = { ...searchParams };
        // delete updatedSearchParams[filterName];

        // if filterName is string
        if (typeof filterName === "string") {
            delete updatedSearchParams[filterName];
        }




        const queryString = new URLSearchParams(updatedSearchParams).toString();
        const newUrl = `${pathname}?${queryString}`;
        router.push(newUrl);
    };


    return (

        <div className="m-5 overflow-scroll">
            <p className="lead" style={{ fontSize: '20px', color: '#333', margin: '10px 0', textAlign: 'center', fontWeight: 'bold' }}>
                Filter Candidate
            </p>
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <Link
                    className="text-danger"
                    href="/shop"
                    style={{
                        color: '#dc3545',
                        fontSize: '18px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        padding: '5px 10px',
                        border: '1px solid #dc3545',
                        borderRadius: '4px',
                        display: 'inline-block',
                        transition: 'background-color 0.3s, color 0.3s'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#dc3545';
                        e.currentTarget.style.color = '#fff';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#dc3545';
                    }}
                >
                    Clear Filters
                </Link>
            </div>




            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <p

                    style={{
                        color: 'green',
                        padding: '10px 20px',
                        borderRadius: '4px',
                        fontSize: '24px',
                        marginTop: '1.5rem',
                        transition: 'color 0.3s ease-in-out',
                        display: 'inline-block',
                        border: '2px solid green',
                        width: "100%",
                        fontWeight: 'bold',
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.backgroundColor = 'green';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.color = 'green';
                        e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                >
                    country
                </p>
            </div>


            <div className="row d-flex align-items-center mx-1 filter-scroll">

                {country?.map((c) => {
                    const isActive = countryid === c._id;

                    const url = {
                        pathname,
                        query: {
                            ...searchParams,
                            countryid: c?._id,
                        },
                    };
                    return (
                        <div key={c._id}>
                            <Link href={url}

                                style={
                                    isActive
                                        ? { color: 'white', backgroundColor: 'green', border: '2px solid green' }
                                        : { color: 'green', backgroundColor: 'transparent', border: '2px solid green' }
                                }



                                className={isActive ? activeButton : button}>
                                {c?.name}
                            </Link>
                            {isActive && (
                                <span
                                    onClick={() => handleRemoveFilter("countryid")}
                                    className="pointer"
                                >
                                    X
                                </span>
                            )}
                        </div>
                    );
                })}


            </div>




        </div>

    )


}

