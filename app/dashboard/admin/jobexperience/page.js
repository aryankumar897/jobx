

"use client"
import JobexperienceCreate from "@/components/jobexperience/JobexperienceCreate";
import JobexperienceList from "@/components/jobexperience/JobexperienceList";
export default function Industries() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">

                    <p className="lead   ">Create   job experience</p>
                    <JobexperienceCreate />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <p className="lead mb-4"> job experience name </p>
                    <JobexperienceList />
                </div>
            </div>
        </div>
    );
}





