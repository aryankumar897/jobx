

"use client"
import JobroleCreate from "@/components/jobrole/JobroleCreate";
import JobroleList from "@/components/jobrole/JobroleList";
export default function Industries() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">

                    <p className="lead   ">Create  job role</p>
                    <JobroleCreate/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <p className="lead mb-4"> job role name </p>
                    <JobroleList/>
                </div>
            </div>
        </div>
    );
}





