"use client";
import { useCity } from "@/context/city";
import { useEffect, useState } from 'react';
import { MdOutlineClear } from "react-icons/md";

import { MdOutlineDeleteOutline } from "react-icons/md";

import { Select } from 'antd';

const { Option } = Select;


export default function CityCreate() {
  


    const [searchTerm, setSearchTerm] = useState('');
    const [searchTerms, setSearchTerms] = useState('');



    useEffect(() => {
        fetchCountry();
        fetchState();
    }, []);

    console.log("state", state)
    const handleSearch = value => {
        setSearchTerm(value);
    };

    const handleSearchs = value => {
        setSearchTerms(value);
    };
    return (
        <div className="my-5">

            <p className="m-1 p-1"> select country</p>
            <Select
                showSearch
                style={{ width: 500, height: 50 }}
                placeholder="Select a country"
                loading={loading}
              
                onSearch={handleSearch}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              
                className="form-control p-2 my-2"
            >
                {country
                    .filter((country) =>
                        country.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((country) => (
                        <Option key={country._id} value={country._id}>

                            {country.name}

                        </Option>
                    ))}
            </Select>
            {
                country.map(countryItem => (
                    <p key={countryItem._id}>
                        {updatingCity?.country_Id?._id === countryItem._id ? updatingCity?.country_Id?.name : ""}
                    </p>
                ))
            }


            <p className="m-1 p-1"> select state</p>
            <Select
                showSearch
                style={{ width: 500, height: 60 }}
                placeholder="Select a state"
                loading={loading}
              
                onSearch={handleSearchs}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
           
                className="form-control p-2 my-2"
            >


                {state
                    .filter((state) =>
                        state?.statename?.toLowerCase().includes(searchTerms.toLowerCase())
                    )
                    .map((state) => (
                        <Option key={state._id} value={state._id}>

                            {state.statename}

                        </Option>
                    ))}
            </Select>



            {
                state.map(countryItem => (
                    <p key={countryItem._id}>
                        {updatingCity?.state_Id?._id === countryItem._id ? updatingCity?.state_Id?.statename : ""}
                    </p>
                ))
            }


            <input
                type="text"
                value={updatingCity ? updatingCity?.name : name}
                onChange={(e) =>
                    updatingCity
                        ? setUpdatingCity({ ...updatingCity, name: e.target.value })
                        : setName(e.target.value)
                }
                className="form-control p-2 my-2"
            />
            <div className="d-flex justify-content-between">
                <button
                    className={`btn bg-${updatingCity ? "info" : "primary"
                        } text-light`}
                    onClick={(e) => {
                        e.preventDefault();
                        updatingCity ? updateCity() : createCity();
                    }}
                >
                    {updatingCity ? "Update" : "Create"}
                </button>

                {updatingCity && (
                    <>
                        <button
                            className={`btn bg-danger text-light`}
                            onClick={(e) => {

                                e.preventDefault();
                                deleteCity();
                            }}
                        >
                            <MdOutlineDeleteOutline />
                        </button>

                        <button
                            className="btn bg-success text-light"
                            onClick={() => setUpdatingCity(null)}
                        >
                            <MdOutlineClear />
                        </button>
                    </>
                )}
            </div>
            {/* {JSON.stringify({ state }, null, 4)}
            <br /> <br /> <br /> <br />
            {JSON.stringify({ country}, null, 4)} */}
        </div>
    );
}