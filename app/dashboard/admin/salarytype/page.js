

"use client"
import SalarytypeCreate from "@/components/salarytype/SalarytypeCreate";
import SalarytypeList from "@/components/salarytype/SalarytypeList";
export default function Industries() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">

                    <p className="lead   ">Create   salary type </p>
                    <SalarytypeCreate />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <p className="lead mb-4">  salary type name </p>
                    <SalarytypeList />
                </div>
            </div>
        </div>
    );
}





