

"use client"
import OrgazitionCreate from "@/components/organization/OrganizationCreate";
import OrganizationList from "@/components/organization/OrganizationList";
export default function Industries() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">

                    <p className="lead   ">Create organization</p>
                    <OrgazitionCreate />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <p className="lead mb-4"> organization name </p>
                    <OrganizationList />
                </div>
            </div>
        </div>
    );
}





