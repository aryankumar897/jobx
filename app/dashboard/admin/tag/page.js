

"use client"
import TagCreate from "@/components/tag/TagCreate";
import TagList from "@/components/tag/TagList";
export default function Industries() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">

                    <p className="lead   ">Create  tag</p>
                    <TagCreate />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <p className="lead mb-4"> tag name </p>
                    <TagList />
                </div>
            </div>
        </div>
    );
}





