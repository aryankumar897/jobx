import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Jobs from "@/models/jobs";
import Company from "@/models/companies"


import jobexperienceid from "@/models/jobexperienceid";
import educationid from "@/models/educationid";

import Jobskill from "@/models/job_skills";
import Jobtag from "@/models/job_tags";



export async function GET(req, context) {


    await dbConnect()

    try {


 console.log("cccoooooooooooooooooooooooooooooooooooooo")

        const job = await Jobs.findOne({ slug: context.params.slug })
            .populate("job_category_id", "name")
            .populate("company_id")
            .populate("job_role_id")
            .populate("jobexperienceid")
            .populate("educationid")
            .populate("job_type_id")
            .populate("salary_type_id")
            .populate("country")
            .populate("state")
            .populate("city")
            .populate("company_id.industry_type_id")
            .sort({ createdAt: -1 })



        const currentDate = new Date()
        const openjobs = await Jobs.find({

            company_id: job?.company_id,
            deadline: { $gte: currentDate }


        }).estimatedDocumentCount()

        console.log("openjobs ", openjobs)

        const skills = await Jobskill.find({ job_id: job?._id }).populate("skill_id")


        const tag = await Jobtag.find({ job_id: job?._id }).populate("tag_id")

        console.log({ job, tag, skills, openjobs })
        return NextResponse.json({ job, tag, skills, openjobs })

    } catch (error) {

        console.log(error)

        return NextResponse({ err: err.message })
    }


}

