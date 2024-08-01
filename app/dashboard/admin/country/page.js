

"use client"
import CountryCreate from "@/components/country/CountryCreate";
import CountryList from "@/components/country/CountryList";
export default function Industries() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">

                    <p className="lead   ">country   Create</p>
                    <CountryCreate/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <p className="lead mb-4"> Country   List name </p>
                    <CountryList/>
                </div>
            </div>
        </div>
    );
}





