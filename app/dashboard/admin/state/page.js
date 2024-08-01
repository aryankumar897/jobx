

"use client"
import StateCreate   from "@/components/state/StateCreate";
import StateList from "@/components/state/StateList";
export default function Industries() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">

                    <p className="lead   ">Create  state</p>
                    <StateCreate/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <p className="lead mb-4"> state name </p>
                    <StateList/>
                </div>
            </div>
        </div>
    );
}





