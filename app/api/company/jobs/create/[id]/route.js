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




export async function PUT(req, context) {


    await dbConnect()
    const body = await req.json()




    try {

const session = await getServerSession(authOptions)
 const  company=await Company.findOne({user_id:session.user._id})



        const jobsupdate = {


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
            descriptions: body.description,
            highlight: body.highlight,
            featured: body.featured,
            salary_mode: body.isSalaryRange ? "range" : "custom",






        }

        const jobs = await Jobs.findByIdAndUpdate(

            context.params.id,
            { ...jobsupdate },
            { new: true }
        )



        await Jobtag.deleteMany({ job_id: jobs._id })

        const job_tag = await Jobtag.create({
            job_id: jobs._id,
            tag_id: body.tags
        })


        await Benfits.deleteMany({ company_id: company?._id })
        const benfit = await Benfits.create({

            company_id: company?._id,
            name: body.benefits
        })

        await Job_benfits.deleteMany({ job_id: jobs._id })
        const job_benfit = await Job_benfits.create({
            job_id: jobs._id,
            benfits_id: benfit._id
        })

        await Jobskill.deleteMany({ job_id: jobs._id })
        const job_skills = await Jobskill.create({
            job_id: jobs._id,
            skill_id: body.skills
        })


       console.log("job updated by company", { jobs,
            job_skills, job_benfit, benfit, job_tag
             })
        return NextResponse.json(jobs)


    } catch (err) {
        console.log(err)
        return NextResponse.json({ err: err.message })


    }

}



















export async function DELETE(req, context) {
    await dbConnect()
    try {

        const jobs = await Jobs.findByIdAndDelete(context.params.id)
      //  console.log("jobsdeleted", jobs)

        await Jobtag.deleteMany({ job_id: jobs._id })
        await Benfits.deleteMany({ company_id: jobs.company_id })
        await Job_benfits.deleteMany({ job_id: jobs._id })
        await Jobskill.deleteMany({ job_id: jobs._id })

 console.log("job deleted",jobs)

        return NextResponse.json(jobs)



    } catch (err) {
        return NextResponse.json({ err: err.message });
    }
}