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


export async function GET() {


    await dbConnect()

    try {
        const jobs = await Jobs.find({})
            .populate("job_category_id", "name")
            .populate("company_id")
            .sort({ createdAt: -1 })


        return NextResponse.json(jobs)

    } catch (error) {
        return NextResponse({ err: err.message })
    }


}




export async function POST(req) {

    await dbConnect()

    const session = await getServerSession(authOptions)
    const body = await req.json()



    const { highlight, featured,


        title, isSalaryRange, deadline, totalVacancies, selectedCompany,

        selectedJobCategory, selectedCountry, selectedState, selectedCity,
        address, minSalary, maxSalary, customSalary, selectedSalaryType,
        education,
        experience, jobRole, jobType, tags, benefits, skills, applicationReceived,
        description } = body

    console.log({
        highlight, featured,


        title, isSalaryRange, deadline, totalVacancies, selectedCompany,

        selectedJobCategory, selectedCountry, selectedState, selectedCity,
        address, minSalary, maxSalary, customSalary, selectedSalaryType,
       education,
        experience, jobRole, jobType, tags, benefits, skills, applicationReceived,
        description
    })

    try {

        const jobs = await Jobs.create({


            title: body.title,
            slug: slugify(body.title),
            deadline: body.deadline,
            vacancies: body.totalVacancies,
            company_id: body.selectedCompany,
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

            status: "active"




        })



        const job_tag = await Jobtag.create({
            job_id: jobs._id,
            tag_id: body.tags
        })



        const benfit = await Benfits.create({

            company_id: body.selectedCompany,
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




       console.log( "created",  { jobs, job_skills, job_benfit, job_tag, benfit })
        return NextResponse.json({ success: "job created" })


    } catch (err) {
        console.log(err)
        return NextResponse.json({ err: err.message })
    }





}
