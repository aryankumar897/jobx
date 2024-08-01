

"use client"
import LanguageCreate from "@/components/language/LanguageCreate";
import LanguageList from "@/components/language/LanguageList";
export default function Industries() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">

                    <p className="lead   ">Create language</p>
                    <LanguageCreate />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <p className="lead mb-4">language  name </p>
                    <LanguageList />
                </div>
            </div>
        </div>
    );
}





