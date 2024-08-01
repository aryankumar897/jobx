

"use client"
import JobCategoriesCreate from "@/components/job_categories/JobCategoriesCreate";
import JobCategoriesList from "@/components/job_categories/JobCategoriesList";
export default function Industries() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">

                    <p className="lead   ">Create  JobCategories</p>
                    <JobCategoriesCreate />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <p className="lead mb-4"> JobCategoriesList  name </p>
                    <JobCategoriesList />
                </div>
            </div>
        </div>
    );
}





