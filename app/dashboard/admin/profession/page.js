

"use client"
import ProfessionCreate from "@/components/profession/ProfessionCreate";
import ProfessionList from "@/components/profession/ProfessionList";
export default function Industries() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">

                    <p className="lead   ">Create   profession</p>
                    <ProfessionCreate />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <p className="lead mb-4"> profession name </p>
                    <ProfessionList/>
                </div>
            </div>
        </div>
    );
}





