"use client"
import Link from "next/link"
import { useState, useEffect } from "react";
import { salaryRanges } from "@/utils/salaryData"
import { useRouter } from "next/navigation";
import { useCountry } from "@/context/country";
import { useCity } from "@/context/city";
import { useStat } from "@/context/state";


import {useJob_category}from  "@/context/job_categories"

export default function Filter({ searchParams }) {

    const router = useRouter();
    const activeButton = "btn  btn-raised mx-1 rounded-pill";
    const button = "btn btn-raised mx-1 rounded-pill";
    console.log("searchParams", searchParams)
    const pathname = "/jobs";
    const {jobcatid, minSalary, maxSalary, countryid, stateid, cityid, industryid, organizationid, } = searchParams;


    const { fetchCountryPublic, country } = useCountry()

    const { fetchStatePublic, state } = useStat()
    const { fetchCityPublic, city } = useCity()
  
    const { fetchJob_categoriesPublic, job_categories } = useJob_category()


    useEffect(() => {
        fetchCountryPublic()
     
        fetchStatePublic()
        fetchCityPublic()
        fetchJob_categoriesPublic()

    }, []);



    const handleRemoveFilter = (filterName) => {
        const updateSearchParams = { ...searchParams }
        //if filtername is string then
        if (typeof filterName === "string") {
            delete updateSearchParams[filterName]
        }

//if filtername is array then
if(Array.isArray(filterName)) {

filterName?.forEach((name)=>{
    delete updateSearchParams[name]

})

}



        const queryString = new URLSearchParams(updateSearchParams).toString()
        const newUrl = `${pathname}?${queryString}`;


        router.push(newUrl)
    }



    return (

        <div className="m-5 overflow-scroll">
            <p className="lead" style={{ fontSize: '20px', color: '#333', margin: '10px 0', textAlign: 'center', fontWeight: 'bold' }}>
                Filter Companies
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


            {/* salary range */}


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
                    SalaryRange
                </p>
            </div>


            <div className="row d-flex align-items-center mx-1 filter-scroll">


                {

                    salaryRanges?.map((range) => {



                        const isActive = minSalary === String(range?.min) && maxSalary === String(range?.max)

                        const url = {

                            pathname,

                            query: {
                                ...searchParams,
                                minSalary: range?.min,
                                maxSalary: range?.max

                            }



                        }

                        return (

                            <div key={range?.label}    >
                                <Link href={url}

                                    className={isActive ? activeButton : button}
                                    style={
                                        isActive ? {

                                            color: "white",
                                            backgroundColor: "green",
                                            border: "1px solid green",

                                        } : {
                                            color: "green",
                                            backgroundColor: "transparent",
                                            border: "1px solid green",
                                        }


                                    }
                                >

                                    {range?.label}

                                </Link>


                                {
                                    isActive && (

                                        <span
                                            onClick={() => handleRemoveFilter(["minSalary","maxSalary"])}

                                            className="pointer"

                                        >

                                            ❌

                                        </span>

                                    )

                                }


                            </div>


                        )

                    })

                }

            </div>




            {/* country */}
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


                {

                    country?.map((c) => {



                        const isActive = countryid === c._id

                        const url = {

                            pathname,

                            query: {
                                ...searchParams,
                                countryid: c?._id


                            }



                        }

                        return (

                            <div key={c._id}    >
                                <Link href={url}

                                    className={isActive ? activeButton : button}
                                    style={
                                        isActive ? {

                                            color: "white",
                                            backgroundColor: "green",
                                            border: "1px solid green",

                                        } : {
                                            color: "green",
                                            backgroundColor: "transparent",
                                            border: "1px solid green",
                                        }


                                    }
                                >

                                    {c.name}

                                </Link>


                                {
                                    isActive && (

                                        <span
                                            onClick={() => handleRemoveFilter("countryid")}

                                            className="pointer"

                                        >

                                            ❌

                                        </span>

                                    )

                                }


                            </div>


                        )

                    })

                }

            </div>


            {/* state */}

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


                {

                    state?.map((s) => {



                        const isActive = stateid === s._id

                        const url = {

                            pathname,

                            query: {
                                ...searchParams,
                                stateid: s?._id


                            }



                        }

                        return (

                            <div key={s._id}    >
                                <Link href={url}

                                    className={isActive ? activeButton : button}
                                    style={
                                        isActive ? {

                                            color: "white",
                                            backgroundColor: "green",
                                            border: "1px solid green",

                                        } : {
                                            color: "green",
                                            backgroundColor: "transparent",
                                            border: "1px solid green",
                                        }


                                    }
                                >

                                    {s.statename}

                                </Link>


                                {
                                    isActive && (

                                        <span
                                            onClick={() => handleRemoveFilter("stateid")}

                                            className="pointer"

                                        >

                                            ❌

                                        </span>

                                    )

                                }


                            </div>


                        )

                    })

                }

            </div>



            {/* city */}

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


                {

                    city?.map((c) => {



                        const isActive = cityid === c._id

                        const url = {

                            pathname,

                            query: {
                                ...searchParams,
                                cityid: c?._id


                            }



                        }

                        return (

                            <div key={c._id}    >
                                <Link href={url}

                                    className={isActive ? activeButton : button}
                                    style={
                                        isActive ? {

                                            color: "white",
                                            backgroundColor: "green",
                                            border: "1px solid green",

                                        } : {
                                            color: "green",
                                            backgroundColor: "transparent",
                                            border: "1px solid green",
                                        }


                                    }
                                >

                                    {c.name}

                                </Link>


                                {
                                    isActive && (

                                        <span
                                            onClick={() => handleRemoveFilter("cityid")}

                                            className="pointer"

                                        >

                                            ❌

                                        </span>

                                    )

                                }


                            </div>


                        )

                    })

                }

            </div>



       

         

{/*  job category */}



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
                    Job Categories
                </p>
            </div>


            <div className="row d-flex align-items-center mx-1 filter-scroll">


                {

                    job_categories?.map((j) => {



                        const isActive = jobcatid === j._id

                        const url = {

                            pathname,

                            query: {
                                ...searchParams,
                                jobcatid: j?._id


                            }



                        }

                        return (

                            <div key={j._id}    >
                                <Link href={url}

                                    className={isActive ? activeButton : button}
                                    style={
                                        isActive ? {

                                            color: "white",
                                            backgroundColor: "green",
                                            border: "1px solid green",

                                        } : {
                                            color: "green",
                                            backgroundColor: "transparent",
                                            border: "1px solid green",
                                        }


                                    }
                                >

                                    {j?.name}

                                </Link>


                                {
                                    isActive && (

                                        <span
                                            onClick={() => handleRemoveFilter("jobcatid")}

                                            className="pointer"

                                        >

                                            ❌

                                        </span>

                                    )

                                }


                            </div>


                        )

                    })

                }

            </div>




        </div>

    )


}



