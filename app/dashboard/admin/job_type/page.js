

"use client"
import JobtypeCreate from "@/components/jobtype/JobtypeCreate";
import JobtypeList from "@/components/jobtype/JobtypeList";
export default function Industries() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">

                    <p className="lead   ">Create  Jobtype</p>
                    <JobtypeCreate />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <p className="lead mb-4"> Jobtype name </p>
                    <JobtypeList />
                </div>
            </div>
        </div>
    );
}





