

"use client"
import SkillCreate from "@/components/skill/SkillCreate";
import SkillList from "@/components/skill/SkillList";
export default function Industries() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">

                    <p className="lead   ">Create  skill</p>
                    <SkillCreate />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <p className="lead mb-4"> skill name </p>
                    <SkillList />
                </div>
            </div>
        </div>
    );
}





