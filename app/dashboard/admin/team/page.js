

"use client"
import TeamCreate from "@/components/team/TeamCreate";
import TeamList from "@/components/team/TeamList";
export default function Industries() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">

                    <p className="lead   ">Create Team</p>
                    <TeamCreate />
                </div>
            </div>
            <div className="row mt-5"> 
                <div className="col">
                    <p className="lead mb-4"> Team name </p>
                    <TeamList/>
                </div>
            </div>
        </div>
    );
}





