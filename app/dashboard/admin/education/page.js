

"use client"
import EducationCreate from "@/components/education/EducationCreate";
import EducationList from "@/components/education/EducationList";
export default function Industries() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">

                    <p className="lead   ">education skill</p>
                    <EducationCreate />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <p className="lead mb-4"> education name </p>
                    <EducationList />
                </div>
            </div>
        </div>
    );
}





