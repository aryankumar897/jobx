import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Jobs from "@/models/jobs";
import Company from "@/models/companies"
import slugify from "slugify";
import User from "@/models/user"
import { getServerSession } from "next-auth/next";

import { authOptions } from "@/utils/authOptions";
import jobexperienceid from "@/models/jobexperienceid";
import educationid from "@/models/educationid";
import Jobtag from "@/models/job_tags";

import Jobskill from "@/models/job_skills";

import Benfits from "@/models/benfits";
import Job_benfits from "@/models/job_benfits";
import UserPlan from "@/models/user_plans"

export async function GET() {


    await dbConnect()

    try {

        const session = await getServerSession(authOptions)
        console.log("sess", session)

        const company = await Company.findOne({ user_id: session?.user?._id })
        console.log("company", company)

        const jobs = await Jobs.find({ company_id: company?._id })
            .populate("job_category_id", "name")
            .populate("company_id")
            .sort({ createdAt: -1 })

        console.log("jobs", jobs)
        return NextResponse.json(jobs)

    } catch (err) {
        return NextResponse.json({ err: err.message })
    }


}




export async function POST(req) {

    await dbConnect()

    const session = await getServerSession(authOptions)
    const body = await req.json()



    const company = await Company.findOne({ user_id: session?.user?._id })

    const userplan = await UserPlan.findOne({ company_id: company?._id })



    console.log("joblimit===========================")
   // console.log("companyx", company)


    if (!userplan ) {

        console.log("joblimit")
        return NextResponse.json({ err: "buy  plan" }, { status: 500 })

    }


    if (!userplan&&    userplan?.job_limit < 1) {

console.log("joblimit")
        return NextResponse.json({ err: "job limit exceeded" }, { status: 500 })

    }

    if (   userplan?.featured_job_limit < 1) {

console.log("featured")
        return NextResponse.json({ err: "featured  job limit exceeded" }, { status: 500 })

    }


    if (      userplan?.highlight_job_limit < 1) {

        console.log("highlight")
        return NextResponse.json({ err: "highlight  job limit exceeded" }, { status: 500 })

    }






    const { highlight, featured,


        title, isSalaryRange, deadline, totalVacancies,

        selectedJobCategory, selectedCountry, selectedState, selectedCity,
        address, minSalary, maxSalary, customSalary, selectedSalaryType,
        education,
        experience, jobRole, jobType, tags, benefits, skills, applicationReceived,
        description } = body

    // console.log({
    //     highlight, featured,


    //     title, isSalaryRange, deadline, totalVacancies,

    //     selectedJobCategory, selectedCountry, selectedState, selectedCity,
    //     address, minSalary, maxSalary, customSalary, selectedSalaryType,
    //     education,
    //     experience, jobRole, jobType, tags, benefits, skills, applicationReceived,
    //     description
    // })



    try {

        const jobs = await Jobs.create({


            title: body.title,
            slug: slugify(body.title),
            deadline: body.deadline,
            vacancies: body.totalVacancies,
            company_id: company?._id,
            job_category_id: body.selectedJobCategory,
            country: body.selectedCountry,
            state: body.selectedState,
            city: body.selectedCity,
            address: body.address,
            min_salary: body.minSalary || "",
            max_salary: body.maxSalary || "",

            custom_salary: body.customSalary || "",
            salary_type_id: body.selectedSalaryType,
            jobexperienceid: body.experience,
            job_role_id: body.jobRole,
            educationid: body.education,

            job_type_id: body.jobType,

            apply_on: body.applicationReceived,
            description: body.description,

            highlight: body.highlight,
            featured: body.featured,
            salary_mode: body.isSalaryRange ? "range" : "custom",

            status: "pending"




        })



        const job_tag = await Jobtag.create({
            job_id: jobs._id,
            tag_id: body.tags
        })



        const benfit = await Benfits.create({

            company_id: company?._id,
            name: body.benefits
        })


        const job_benfit = await Job_benfits.create({
            job_id: jobs._id,
            benfits_id: benfit._id
        })


        const job_skills = await Jobskill.create({
            job_id: jobs._id,
            skill_id: body.skills
        })



        if (jobs) {


            userplan.job_limit -= 1;

            if (jobs.featured == true) {

                userplan.featured_job_limit -= 1

            }
            if (jobs.highlight == true) {

                userplan.highlight_job_limit -= 1

            }


        }


        await UserPlan.findByIdAndUpdate(userplan._id, {

            $set: {

                job_limit: userplan.job_limit,
                featured_job_limit: userplan.featured_job_limit,
                highlight_job_limit: userplan.highlight_job_limit


            }



        }




        )




       // console.log("created job by company", { jobs, job_skills, job_benfit, job_tag, benfit })
        return NextResponse.json({ success: "job created" })


    } catch (err) {
        console.log(err)
        return NextResponse.json({ err: err.message },{status:500})
    }





}
