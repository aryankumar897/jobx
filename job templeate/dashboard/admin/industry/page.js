
"use client"
import IndustryCreate from "@/components/industry/IndustryCreate";
import IndustryList from "@/components/industry/IndustryList";
export default function Industries() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">

                    <p className="lead   ">Create Industry</p>
                    <IndustryCreate />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <p className="lead mb-4"> Industries  name </p>
                    <IndustryList />
                </div>
            </div>
        </div>
    );
}







const industries = [
    "Automotive",
    "Aerospace",
    "Biotechnology",
    "Construction",
    "Consumer Electronics",
    "Education",
    "Energy",
    "Entertainment",
    "Financial Services",
    "Food and Beverage",
    "Healthcare",
    "Information Technology",
    "Insurance",
    "Manufacturing",
    "Pharmaceuticals",
    "Real Estate",
    "Retail",
    "Telecommunications",
    "Transportation",
    "Utilities"
];

