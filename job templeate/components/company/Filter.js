"use client"
import Link from "next/link"
import { useState, useEffect } from "react";
import { Skeleton } from 'antd';
import { useRouter } from "next/navigation";
import { useCountry } from "@/context/country";
import { useCity } from "@/context/city";
import { useStat } from "@/context/state";
import { useIndustry } from "@/context/industry";

import { useOrganization } from "@/context/organization";




export default function Filter({ searchParams }) {
    const pathname = "/companies";
    const { countryid, stateid, cityid, indusrtyid, organizationid } = searchParams;


    const { fetchIndustriesPublic, industries } = useIndustry();
    const { fetchStatePublic, state } = useStat();
    const { fetchCityPublic, city } = useCity();
    const { fetchCountryPublic, country } = useCountry();
    const { fetchOrganizationPublic, organization } = useOrganization()



    useEffect(() => {
        fetchCountryPublic()
        fetchIndustriesPublic()
        fetchStatePublic()
        fetchCityPublic()
        fetchOrganizationPublic()
    }, []);

    //  console.log("tag", organization)
    //     console.log("state", state)
    //     console.log("city", city)
    //     console.log("country", country)
    //     console.log("job_categories", job_categories)





    const router = useRouter();

    const activeButton = "btn btn-primary btn-raised mx-1 rounded-pill";
    const button = "btn btn-raised mx-1 rounded-pill";

    const handleRemoveFilter = (filterName) => {
        const updatedSearchParams = { ...searchParams };
        // delete updatedSearchParams[filterName];

        // if filterName is string
        if (typeof filterName === "string") {
            delete updatedSearchParams[filterName];
        }
        // if filterName is array
        if (Array.isArray(filterName)) {
            filterName?.forEach((name) => {
                delete updatedSearchParams[name];
            });
        }



        const queryString = new URLSearchParams(updatedSearchParams).toString();
        const newUrl = `${pathname}?${queryString}`;
        router.push(newUrl);
    };







    return (

        <>
            {JSON.stringify({ searchParams }, null, 4)}

            <div className="mb-5 overflow-scroll   filter-scrolls">
                <p className="lead" style={{ fontSize: '20px', color: '#333', margin: '10px 0', textAlign: 'center', fontWeight: 'bold' }}>
                    Filter Companies
                </p>
                <div style={{ textAlign: 'center', margin: '20px 0' }}>
                    <Link
                        className="text-danger"
                        href="/companies"
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
                    {country ? (
                        country.map((c) => {
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
                        })
                    ) : (
                        <p><Skeleton active /></p>
                    )}

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
                        state
                    </p>
                </div>

                <div className="row d-flex align-items-center mx-1 filter-scroll">
                    {state?.map((c) => {
                        const isActive = stateid === c._id;

                        const url = {
                            pathname,
                            query: {
                                ...searchParams,
                                stateid: c?._id,

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
                                    {c?.statename}
                                </Link>
                                {isActive && (
                                    <span
                                        onClick={() => handleRemoveFilter("stateid")}
                                        className="pointer"
                                    >
                                        X
                                    </span>
                                )}
                            </div>
                        );
                    })}
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
                        city
                    </p>
                </div>

                <div className="row d-flex align-items-center mx-1 filter-scroll">
                    {city?.map((c) => {
                        const isActive = cityid === c._id;

                        const url = {
                            pathname,
                            query: {
                                ...searchParams,
                                cityid: c?._id,

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
                                        onClick={() => handleRemoveFilter("cityid")}
                                        className="pointer"
                                    >
                                        X
                                    </span>
                                )}
                            </div>
                        );
                    })}
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
                        Industry_type
                    </p>
                </div>


                <div className="row d-flex align-items-center mx-1 filter-scroll">
                    {industries?.map((c) => {
                        const isActive = indusrtyid === c._id;

                        const url = {
                            pathname,
                            query: {
                                ...searchParams,
                                indusrtyid: c?._id,

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
                                        onClick={() => handleRemoveFilter("indusrtyid")}
                                        className="pointer"
                                    >
                                        X
                                    </span>
                                )}
                            </div>
                        );
                    })}
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
                        Organization_type
                    </p>
                </div>
                <div className="row d-flex align-items-center mx-1 filter-scroll">
                    {organization?.map((c) => {
                        const isActive = organizationid === c._id;

                        const url = {
                            pathname,
                            query: {
                                ...searchParams,
                                organizationid: c?._id,

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
                                        onClick={() => handleRemoveFilter("organizationid")}
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


        </>

    )



}