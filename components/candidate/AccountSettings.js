"use client"
import { useState, useEffect } from "react"
import { useCountry } from "@/context/country";
import { useStat } from "@/context/state";
import { useCity } from "@/context/city";
import toast from "react-hot-toast";
import AccountPassword from "./AccountPassword"
export default function Account() {

    const [adress, setAdress] = useState("")
    const [primaryPhone, setPrimaryPhone] = useState('');
    const [secondaryPhone, setSecondaryPhone] = useState('');
    const [email, setEmail] = useState('');
    const [loadings, setLoadings] = useState(false)

    const [selectedCountry, setSelectedCountry] = useState([]);
    const [selectedState, setSelectedState] = useState([]);
    const [selectedCity, setSelectedCity] = useState([]);



    const { fetchCountryPublic, country } = useCountry();
    const { fetchStatePublic, state, setState } = useStat();

    const { fetchCityPublic, city, setCity } = useCity();


    useEffect(() => {
        // Function to fetch data from MongoDB

        fetchCountryPublic()


        fetchData()

        fetchStatePublic()
        fetchCityPublic()
    }, []);




    const fetchData = async () => {



        try {



            const response = await fetch(`${process.env.API}/candidate/account`);

            //   console.log(response)


            if (!response.ok) {
                throw new Error("failed to fetched")

            }

            const data = await response.json();
            console.log(data)


            setSelectedCity(data?.city)

            setSelectedCountry(data?.country)

            setSelectedState(data?.state)
            setAdress(data?.address)
            setPrimaryPhone(data?.phone_one)

            setSecondaryPhone(data?.phone_two)
            setEmail(data?.email)



        } catch (err) {
            console.error(err);

        }




    }










    const handleSubmit = async (e) => {



        try {
            e.preventDefault();

            // const formData = {
            //     selectedCountry,
            //     selectedState,
            //      selectedCity,
            //   phone_one:  primaryPhone,
            //   phone_two:   secondaryPhone,
            //       adress, 
            //       email
            // };
            // console.log(formData)



            setLoadings(true)


            const response = await fetch(`${process.env.API}/candidate/account`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    country: selectedCountry,
                    state: selectedState,
                    city: selectedCity,
                    phone_one: primaryPhone,
                    phone_two: secondaryPhone,
                    address: adress,
                    email
                })
            });

            //   console.log(response)
            const data = await response.json();
            console.log(data)
            if (!response.ok) {
                toast.error(data.err);
                setLoadings(false);
            } else {
                setLoadings(false);
                toast.success("sucessfully profile updated");
                //  router.push("/");
            }
        } catch (err) {
            console.error(err);
            setLoadings(false);
        }
    };












    const handleCountryChange = async (e) => {

        try {
            const countryId = e.target.value;
            setSelectedCountry(countryId);

            const response = await fetch(` ${process.env.API}/state`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ countryId })
            })
            const data = await response.json();
            if (!response.ok) {
                toast.error("failed to fetch")
            } else {
                setState(data)

            }



        } catch (error) {
            console.log(error)
        }
    }

    const handleStateChange = async (e) => {
        const stateId = e.target.value;
        setSelectedState(stateId);

        try {
            const response = await fetch(`${process.env.API}/city`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ stateId }),
            });
            const data = await response.json();

            if (!response.ok) {
                toast.error(" faild to fetch")
            } else {
                setCity(data)
            }
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };









    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="  col   shadow  p-5">
                        <h2 className="mb-2 ">Lacation</h2>


                        <form onSubmit={handleSubmit}>



                            <div className="row">
                                <div className="col-md-4">
                                    <select
                                        className=" mb-4"
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '5px',
                                            border: '2px solid #ccc',
                                            backgroundColor: '#fff',
                                            color: '#333',
                                            fontSize: '15px',
                                            outline: "none",
                                            appearance: 'none',
                                        }}
                                        value={selectedCountry}
                                        onChange={handleCountryChange}
                                    >
                                        <option value="">Select a country</option>
                                        {country && country.map((country) =>
                                            <option
                                                key={country._id}
                                                value={country._id}>
                                                {country.name}
                                            </option>
                                        )}
                                    </select>
                                </div>

                                <div className="col-md-4">
                                    <select
                                        className=" mb-4"
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '5px',
                                            border: '2px solid #ccc',
                                            backgroundColor: '#fff',
                                            color: '#333',
                                            fontSize: '15px',
                                            outline: "none",
                                            appearance: 'none',
                                        }}
                                        value={selectedState}
                                        onChange={handleStateChange}
                                    >
                                        <option value="">Select a state</option>

                                        {state && state.map((state) =>


                                            <option
                                                key={state._id}
                                                value={state._id}
                                            >
                                                {state.statename}
                                            </option>



                                        )}


                                    </select>
                                </div>

                                <div className="col-md-4">



                                    <select
                                        className="mb-4"
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '5px',
                                            border: '2px solid #ccc',
                                            backgroundColor: '#fff',
                                            color: '#333',
                                            fontSize: '15px',
                                            appearance: 'none',
                                            outline: "none"
                                        }}
                                        value={selectedCity}
                                        onChange={(e) => setSelectedCity(e.target.value)}
                                    >
                                        <option value="">Select a city</option>
                                        {city.map((city) => (
                                            <option
                                                key={city._id}
                                                value={city._id}
                                            >
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>



                                </div>
                            </div>



                            <textarea
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    fontSize: '15px',
                                    appearance: 'none',
                                    outline: "none"
                                }}
                                className=" mb-4"
                                value={adress}
                                onChange={(e) => setAdress(e.target.value)}
                                placeholder=" address "
                            />

                            <h2 className="mb-5 ">Contact details </h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <input
                                        placeholder=" phone  one "
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '5px',
                                            border: '2px solid #ccc',
                                            backgroundColor: '#fff',
                                            color: '#333',
                                            fontSize: '15px',
                                            appearance: 'none',
                                            outline: "none"
                                        }}


                                        type="tel"
                                        className="  mb-4"

                                        value={primaryPhone}
                                        onChange={(e) => setPrimaryPhone(e.target.value)}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <input
                                        placeholder=" phone email "
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '5px',
                                            border: '2px solid #ccc',
                                            backgroundColor: '#fff',
                                            color: '#333',
                                            fontSize: '15px',
                                            appearance: 'none',
                                            outline: "none"
                                        }}

                                        type="tel"
                                        className=" mb-4"

                                        value={secondaryPhone}
                                        onChange={(e) => setSecondaryPhone(e.target.value)}
                                    />
                                </div>


                            </div>

                            <input
                                placeholder="  enter email "

                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    fontSize: '15px',
                                    appearance: 'none',
                                    outline: "none",
                                }}

                                type="email"
                                className="  mb-4"

                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />



                            <button
                                type="submit"

                            >
                                {loadings ? "Please wait.." : "Save changes"}
                            </button>

                        </form>
                        <AccountPassword />

                    </div>
                </div>

            </div>
        </main>
    )

}